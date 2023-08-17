const express = require('express');
const cors = require('cors');
const {uuid, isUuid} = require('uuidv4')

const app = express();

app.use(cors());
app.use(express.json());

const projects = [];

function logRequests(request, response, next) {
    const {method, url} = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.log(logLabel);

    return next(); //chamando o próximo middleware (rota)
}

function validateProjectId(request, response, next) {
    const {id} = request.params;

    if (!isUuid(id)) {
        return response.status(400).json({error: 'Invalid project ID!'})
    }

    return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId); //aplica apenas nas rotas que possuem essa url

app.get('/projects', (request, response) => {
    const {name} = request.query;

    const results = name
        ? projects.filter(project => project.name.includes(name))
        : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const {name, career} = request.body;

    const project = {id: uuid(), name, career}

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const {name, career} = request.body;

    const projectIndex = projects.findIndex(project => project.id == id);

    if (projectIndex < 0) {
        return response.status(400).json({error: 'Project not found'})
    }

    const project = {
        id,
        name,
        career,
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {

    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id == id);

    if (projectIndex < 0) {
        return response.status(400).json({error: 'Project not found'})
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('🚀 Back-end started!')
});