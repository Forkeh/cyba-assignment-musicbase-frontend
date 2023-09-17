"use strict";

import { getAll } from "./assets/modules/api.js";
import { showArtists } from "./assets/modules/show-artists.js";

document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded');
    const artistsArr = await getAll('artists');
    console.log(artistsArr);
    await showArtists(artistsArr);

    const albumsArr = await getAll('albums');
    console.log(albumsArr);
    const tracksArr = await getAll('tracks');
    console.log(tracksArr);

});