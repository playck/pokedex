import styled from "@emotion/styled/macro";
import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import About from "../compoents/About";
import Evolution from "../compoents/Evolution";
import PoketmonInfo from "../compoents/PoketmonInfo";
import Stats from "../compoents/Stats";
import Tabs from "../compoents/Tabs";
import usePokemon from "../hooks/usePokemon";
import useSpecies from "../hooks/useSpecies";
import { PokemonResponse } from "../types";

type Params = {
  id: string;
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

type Tab = "about" | "status" | "evolution";

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<Tab>("about");

  const pokemonQueryResult = usePokemon<PokemonResponse>(id);
  const speciesQueryResult = useSpecies(id!);

  const { name, types, height, weight, abilities, baseExp, stats } = useMemo(
    () => ({
      name: pokemonQueryResult.data?.data.name,
      types: pokemonQueryResult.data?.data.types,
      height: pokemonQueryResult.data?.data.height,
      weight: pokemonQueryResult.data?.data.weight,
      abilities: pokemonQueryResult.data?.data.abilities,
      baseExp: pokemonQueryResult.data?.data.base_experience,
      stats: pokemonQueryResult.data?.data.stats,
    }),
    [pokemonQueryResult]
  );

  const {
    color,
    growthRate,
    flavorText,
    genderRate,
    isLegendary,
    isMythical,
    evolutionChainUrl,
  } = useMemo(
    () => ({
      color: speciesQueryResult.data?.data.color,
      growthRate: speciesQueryResult.data?.data.growth_rate.name,
      flavorText:
        speciesQueryResult.data?.data.flavor_text_entries[0].flavor_text,
      genderRate: speciesQueryResult.data?.data.gender_rate,
      isLegendary: speciesQueryResult.data?.data.is_legendary,
      isMythical: speciesQueryResult.data?.data.is_mythical,
      evolutionChainUrl: speciesQueryResult.data?.data.evolution_chain.url,
    }),
    [speciesQueryResult]
  );

  const handleClick = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <Container>
      {/* <PoketmonInfo id={id || ""} name={name} types={types} color={color} /> */}
      <Tabs
        tab={selectedTab}
        onClick={handleClick}
        color={{ name: "red", url: "" }}
      />
      {selectedTab === "about" && (
        <About
          isLoading={
            pokemonQueryResult.isLoading || speciesQueryResult.isLoading
          }
          color={color}
          growthRate={growthRate}
          flavorText={flavorText}
          genderRate={genderRate}
          isLegendary={isLegendary}
          isMythical={isMythical}
          types={types}
          weight={weight}
          height={height}
          baseExp={baseExp}
          abilities={abilities}
        />
      )}
      {selectedTab === "status" && (
        <Stats
          isLoading={
            pokemonQueryResult.isLoading || speciesQueryResult.isLoading
          }
          color={color}
          stats={stats}
        />
      )}
      {selectedTab === "evolution" && (
        <Evolution
          id={id}
          isLoading={speciesQueryResult.isLoading}
          color={color}
          url={evolutionChainUrl}
        />
      )}
    </Container>
  );
};

export default DetailPage;
