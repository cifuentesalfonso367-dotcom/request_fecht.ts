import { ApiService } from "./services/apiServices.js";
import { data } from "./models/Data.js";

const characterService = new ApiService<data>("https://rickandmortyapi.com/api/character");

async function ejecutarApp() {
  const personaje = await characterService.getOne(1);
  const listaPersonajes = await characterService.getAll();

  console.log(personaje);
  console.log(listaPersonajes);
}

ejecutarApp();