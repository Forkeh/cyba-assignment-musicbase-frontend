"use strict";

import { getAll } from "./assets/modules/api.js";
import { search, showAll } from "./assets/modules/searchbar.js";

let artistsArr = [], albumsArr =[], tracksArr =[];

window.addEventListener("load", async () => {
    console.log("DOM loaded");
    // Get all artists, albums and tracks
    artistsArr = await getAll("artists");
    albumsArr = await getAll("albums");
    tracksArr = await getAll("tracks");
    // Show all artists, albums and tracks
    await showAll()
    // add event listener for search
    const searchInput = document.querySelector("#searchbar");

    searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value;
        search(searchValue);
    });
});

export { artistsArr, albumsArr, tracksArr };
