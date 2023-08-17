import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function messageBottle(request: Request, response: Response) {
   const user = createUser({
      name: 'Stingo',
      email: 'donodothepolice@gmail.com', 
      password: 'demolitionman123',
      instruments: [
         'Guitar',
         'Piano',
         {special: 'Bass guitar', experience: 100},
      ],
      musics: [
         'August winds',
         'Shape of my heart',
         'Fields of gold',
         'Fortress around your heart',
      ],
   });

   return response.json({message: 'Please forgive me'});
}