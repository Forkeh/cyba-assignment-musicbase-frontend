import {showArtists} from "./show-artists.js";
import {showAlbums} from "./show-albums.js";
import {showTracks} from "./show-tracks.js";
import {albumsArr, artistsArr, tracksArr} from "../../app.js";
import {searchAlbums, searchArtists, searchTracks} from "./api.js";


async function search(searchValue) {
    if (searchValue.length === 0) {
        await showAll(); // Show all results when the search bar is empty
        return;
    }

    const artistsFound = await searchArtists(searchValue);
    await showArtists(artistsFound);

    const albumsFound = await searchAlbums(searchValue);
    await showAlbums(albumsFound);

    const tracksFound = await searchTracks(searchValue);
    await showTracks(tracksFound);
}

async function showAll() {
    await showArtists(artistsArr);
    await showAlbums(albumsArr);
    await showTracks(tracksArr);
}

export { search };
