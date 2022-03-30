


const searchShows = async (searchTerm) => {
    try {
        const config = { params: { q: searchTerm } };
        const res = await axios.get("https://api.tvmaze.com/search/shows", config);
        return res.data;
    } catch (e) {
        return "Sorry! No TV show was found matching that title!";
    }
};

const displayImages = shows => {
    const results = document.querySelector("#results");
    results.innerHTML = "";

    for (let item of shows) {
        if (item.show.image) {
            const img = document.createElement("IMG");
            img.src = item.show.image.medium;
            results.append(img);
        }
    }
};

const form = document.querySelector("#search-form");

form.addEventListener("submit", async e => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const data = await searchShows(searchTerm);
    displayImages(data);
    form.elements.query.value = "";
});