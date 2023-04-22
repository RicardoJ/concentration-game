export const searchAnimals = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_FE_URL_ENDPOINT);
    const data = await response.json();
    const animals = data.entries.map((item) => ({
      title: item.fields.image.title,
      imageUrl: item.fields.image.url,
    }));

    return animals;
  } catch (e) {
    throw new Error('Error searching animals');
  }
};
