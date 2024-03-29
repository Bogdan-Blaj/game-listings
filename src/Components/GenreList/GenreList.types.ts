// GenreList.types.ts
export interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: Game[];
}

export interface GenreResponse {
  results: Genre[];
}
