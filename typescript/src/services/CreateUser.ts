//Aprendendo a criar tipagens de objetos e vetores:

interface InstrumentsObject {
   special: string;
   experience: number;
}

interface CreateUserData {
   name?: string; // o '?' significa que é OPCIONAL
   email: string;
   password: string;
   instruments: Array<string | InstrumentsObject>;
   musics: string[];
}

export default function createUser({name, email, password}: CreateUserData) {
   const user = {
      name,
      email,
      password,
   }

   return user;
}