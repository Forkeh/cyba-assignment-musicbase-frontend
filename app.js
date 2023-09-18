"use strict";

import { getAll } from "./assets/modules/api.js";
import { showArtists } from "./assets/modules/show-artists.js";
import { showAlbums } from "./assets/modules/show-albums.js";
import { showTracks } from "./assets/modules/show-tracks.js";
import { search } from "./assets/modules/searchbar.js";

let { artistsArr, albumsArr, tracksArr } = {
    artistsArr: [],
    albumsArr: [],
    tracksArr: [],
};

document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM loaded");
    // Get all artists, albums and tracks
    artistsArr = await getAll("artists");
    albumsArr = await getAll("albums");
    tracksArr = await getAll("tracks");
    // Show all artists, albums and tracks
    await showArtists(artistsArr);
    await showAlbums(albumsArr);
    await showTracks(tracksArr);
    // add event listener for search
    const searchInput = document.querySelector("#searchbar");
    if (!searchInput) {
        console.error("Search HTML element is missing.");
        return;
    }
    searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value;
        search(searchValue);
    });
});

export { artistsArr, albumsArr, tracksArr };
