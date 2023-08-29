import axios from 'axios';

export interface Joke {
  id: number;
  joke: string;
}

interface HumorResponse {
  jokes: Joke[];
  available: number;
}

const API_KEY = '0058a55abfe34ce1a77287594316a3c5';
const API_URL = 'https://api.humorapi.com/jokes/search';

const humorService = async (category) => {
  const response = await axios.get<HumorResponse>(API_URL, {
    params: { 'api-key': API_KEY, number: 10, 'include-tags': category },
  });

  let randomNumber: number = Math.floor((Math.random() * 10) + 1);

  const { jokes } = response.data;

  return jokes[randomNumber].joke
};

export default humorService;
