"use client";

import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre");
  if (genre !== null){
  }
  return <>{genre}</>;
}
