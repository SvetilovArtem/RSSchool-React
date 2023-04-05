const baseUrl = "https://rickandmortyapi.com/api";
const character = "/character";

export const fetchData = async (name?: string) => {
  //   const pageCurr = `page=${page}`;
  const searchByName = `name=${name}`;

  try {
    const resp = await fetch(baseUrl + character + "/?" + searchByName);
    const data = resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
