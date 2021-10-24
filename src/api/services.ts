const ENV = process.env.API;
const BASEURL = 'https://api.themoviedb.org/3/';
const BASEURL2 = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
const BASEURL3 = 'https://www.themoviedb.org/';
const BASEURL4 = 'https://www.themoviedb.org/t/p/w1920_and_h800_face/';


async function callApi(url: string) {
  const newUrl = `${BASEURL}${url}?api_key=${ENV}`;

  const response = await fetch(newUrl);
  return response.json();
}

async function getMovies() {
  const response = await callApi('movie/550');
  console.log('resposta', response);
  return response;
}

async function getTrending(): Promise<tredingType> {
  const response = await callApi('trending/all/day');
  console.log('resposta', response);
  return response as tredingType
}

function getImage(urlBroked: string): string {
  return `${BASEURL2}${urlBroked}`
}
function getUrl(urlBroked: string): string {
  return `${BASEURL3}${urlBroked}`
}

function getImageHightDPI(urlBroked: string): string {
  return `${BASEURL4}${urlBroked}`
}


export { getImage, getImageHightDPI, getMovies, getTrending, getUrl };

export type FilmType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  urlFinal: string,
  media_type: string;
  original_language: string;
  original_title: string;
  image: string,
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  name: string,
  vote_count: number;
};

export type tredingType = {
    page: number,
    results: FilmType[],
    total_pages: number,
    total_results: number
}