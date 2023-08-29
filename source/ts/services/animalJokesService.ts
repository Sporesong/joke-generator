import axios from "axios";

export interface IAnimalJoke {
  value: string;
}

const getAnimalJoke = async (): Promise<string> => {
  console.log('running');
  
  const response = await axios
  .get<IAnimalJoke>("https://api.animal.io/jokes/random");
  const joke = response.data.value;
  console.log(response);
  
  return joke;
}

export default getAnimalJoke;