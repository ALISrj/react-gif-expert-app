export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=07Ho74zO0RU4IJhT1Yb7Jgwv276zCHNe&q=${category}&limit=5`
    const resp = await fetch(url);
    const { data } = await resp.json();

    // console.log(data); // de la data desestructuraré el id, el url

    const gifs = data.map(img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))

    return gifs;
}