import { getRequest } from "./api";
import { POKEAPI_URL } from "./constants";

export interface Generations {
  count: number;
  results: Generation[];
}

export interface Generation {
  name: string;
  url: string;
}

export interface PokemonDetail {
  name: string;
  url: string;
}

export interface GenerationDetail {
  pokemon_species: any[];
  // url: string;
}

export interface Pokemon {
  sprites: any;
  // url: string;
}

export const getPokemonGenerations = async () => {
  const generations = await getRequest<Generations>("/generation");
  return generations;
};

export const getPokemonGeneration = async (name: string) => {
  const generations = await getRequest<GenerationDetail>(`/generation/${name}`);
  return generations;
};

export const getPokemon = async (id: string) => {
  const pokemon = await getRequest<Pokemon>(`/pokemon/1`);
  return pokemon;
};

export function getAllGenerationIds() {
  return [
    {
      params: {
        id: "generation-i",
      },
    },
    {
      params: {
        id: "generation-ii",
      },
    },
    {
      params: {
        id: "generation-iii",
      },
    },
    {
      params: {
        id: "generation-iv",
      },
    },
    {
      params: {
        id: "generation-v",
      },
    },
    {
      params: {
        id: "generation-vi",
      },
    },
    {
      params: {
        id: "generation-vii",
      },
    },
    {
      params: {
        id: "generation-viii",
      },
    },
  ];
}
