const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN

export const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: 'Bearer '+accessToken}
};

export const OPENAI_KEY = import.meta.env.OPENAI_KEY