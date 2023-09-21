const url = 'https://cyba-music-base-node-app.azurewebsites.net/';
async function getAll(path) {
    const response = await fetch(`${url}${path}`);
    return await response.json();
}

async function searchArtists(searchValue) {
    const response = await fetch(`${url}artists/search/${searchValue}`);
    if (response.status === 404) {
        return [];
    }
    return await response.json();
}

async function searchAlbums(searchValue) {
    const response = await fetch(`${url}albums/search/${searchValue}`);
    if (response.status === 404) {
        return [];
    }
    return await response.json();
}

async function searchTracks(searchValue) {
    const response = await fetch(`${url}tracks/search/${searchValue}`);
    if (response.status === 404) {
        return [];
    }
    return await response.json();
}

export { getAll, searchArtists, searchAlbums, searchTracks };