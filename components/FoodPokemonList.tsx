'use client';

import { useEffect, useState } from 'react';
import { fetchFoodPokemonList } from '@/lib/api';
import { FoodPokemonCard } from '@/components/FoodPokemonCard';
import { Pagination } from '@/components/Pagination';
import {Loading} from "@/components/Loading";

type FoodPokemon = {
  id: number;
  name: string;
  image: string;
};

export function FoodPokemonList() {
  const [pokemonList, setPokemonList] = useState<FoodPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPokemon = async () => {
      const data = await fetchFoodPokemonList();
      setPokemonList(data);
      setLoading(false);
    };
    loadPokemon();
  }, []);

  const pokemonPerPage: number = 8;
  const totalPages = Math.ceil(pokemonList.length / pokemonPerPage);
  const startIndex = (page - 1) * pokemonPerPage;
  const visiblePokemon = pokemonList.slice(startIndex, startIndex + pokemonPerPage);

  if (loading) return <Loading />

  return (
    <div className="w-full px-4 space-y-12">
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {visiblePokemon.map((p) => (
            <FoodPokemonCard key={p.name} name={p.name} image={p.image} />
          ))}
        </ul>
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
