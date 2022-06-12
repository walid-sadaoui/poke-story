import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import {
  GenerationDetail,
  getAllGenerationIds,
  getPokemon,
  getPokemonGeneration,
  PokemonDetail,
} from "../../lib/pokemons";

const PokemonGeneration = ({ generation }) => {
  const { error, data } = useQuery("generation", () =>
    getPokemonGeneration(generation.name)
  );
  return (
    <ul className="flex items-start flex-wrap">
      {data &&
        data.pokemon_species.map((pokemonSpecie, index) => {
          return (
            <PokemonPreviewCard
              key={pokemonSpecie.name}
              pokemon={pokemonSpecie}
            />
          );
        })}
    </ul>
  );
};

export const PokemonPreviewCard: React.FC<{ pokemon: PokemonDetail }> = ({
  pokemon,
}) => {
  //   const { error, data } = useQuery(`pokemon-preview-${name}`, () =>
  //     getPokemon(name)
  //   );
  const pokemonId = pokemon.url
    .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
    .replace("/", "");
  const pokemonIconURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  return (
    <li className="rounded-xl shadow-lg flex flex-col items-center uppercase p-4 justify-around">
      <Image
        src={pokemonIconURL}
        alt={pokemon.name}
        width={"150px"}
        height={"150px"}
        layout="fixed"
      />
      <span>{pokemon.name}</span>
    </li>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllGenerationIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const generation = await getPokemonGeneration(params.id as string);
  return {
    props: {
      generation,
    },
  };
};

export default PokemonGeneration;
