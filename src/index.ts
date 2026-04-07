import { ApiService } from "./services/apiServices.js";
import { Character } from "./models/character.js";
import open from 'open';

const characterService = new ApiService<Character>("https://rickandmortyapi.com/api/character");

async function ejecutarApp() {
  const personaje = await characterService.getOne(20);
  const listaPersonajes = await characterService.getAll();

  console.log("Personaje único:");
  console.log(JSON.stringify(personaje.data, (key, value) => {
    if (key === 'origin' || key === 'location') return '[Object]';
    return value;
  }, 2));

  if (personaje.data?.episode) {
    console.log(`Abriendo el enlace del episodio: ${personaje.data.episode}`);
    await open(personaje.data.episode);
  }
  if (personaje.data?.url) {
    console.log(`Abriendo el enlace del personaje: ${personaje.data.url}`);
    await open(personaje.data.url);
  }

  console.log("Lista de personajes:");
  console.log(JSON.stringify(listaPersonajes.data, (key, value) => {
    if (key === 'origin' || key === 'location') return '[Object]';
    return value;
  }, 2));
}

ejecutarApp();