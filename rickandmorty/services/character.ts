export const charactersWithPagination = async (
  page: number,
  name: string,
  species: string,
  gender: string,
  status: string
) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Hubo un error: ", error);
  }
};

export const charactersById = async (id: string) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    const data = await response.json();
    console.log(data.results);
    return data;
  } catch (error) {
    console.error("Hubo un error: ", error);
  }
};

export const characterEpisode = async (url: string) => {
  try {
    if (url === "") return null;
    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un error: ", error);
  }
};
