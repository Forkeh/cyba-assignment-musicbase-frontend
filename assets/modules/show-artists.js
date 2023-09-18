async function showArtists(artists) {
    const artistsGrid = document.querySelector('.artists-grid');
    if (!artistsGrid) {
        console.error('Artists grid HTML element is missing.');
        return;
    }
    artistsGrid.innerHTML = '';

    for (const artist of artists) {
        const html = `
        <article class="artist-card">
        <div class="artist-card-image">
            <img src="${artist.image}" alt="${artist.name}">
        </div>
        <div class="artist-card-content">
            <h4>${artist.name}</h4>
        </div>
        </article>
        `;
        artistsGrid.insertAdjacentHTML('beforeend', html);
    }
}

export { showArtists };