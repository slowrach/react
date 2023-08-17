import React, {useState, useEffect} from 'react';
import api from './services/api';
import './App.css';
// import backgroundImage from './assets/background.jpg'; (apenas para entender como importa imagem)
import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);

        const response = await api.post('/projects', {
            name: `Novo projeto ${Date.now()}`,
            career: "singer"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects"/>

            {/* <img width={300} src={backgroundImage}/> */}

            <ul>
                {projects.map(project => <li key={project.id}>{project.name}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;

// esse foi uma demonstração de COMPONENTIZAÇÃO. Criou-se um componente (a função App) que retorna um HTML

//"response.data" porque "response" é o objeto, ao todo, puxado da api e, dentro do objeto, tem o tópico "data", que é onde, de fato, contém as informações (name e career) da api