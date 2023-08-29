import axios from "axios";

export interface INerdyJoke {
  value: string;
}

const getNerdyJoke = async (): Promise<string> => {
  console.log('running');
  
  const response = await axios
  .get<INerdyJoke>("https://api.nerdy.io/jokes/random");
  const joke = response.data.value;
  console.log(response);
  
  return joke;
}

export default getNerdyJoke;