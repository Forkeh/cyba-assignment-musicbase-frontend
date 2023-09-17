async function showAlbums(albums) {
    const albumsGrid = document.querySelector('.albums-grid');
    if (!albumsGrid) {
        console.error('Artists grid HTML element is missing.');
        return;
    }
    albumsGrid.innerHTML = '';

    for (const album of albums) {
        const html = `
        <article class="album-card">
        <div class="album-card-image">
            <img src="${album.image}" alt="${album.title}">
        </div>
        <div class="album-card-content">
            <h3>${album.title}</h3>
            <p>${album.year}</p>
        </div>
        </article>
        `;
        albumsGrid.insertAdjacentHTML('beforeend', html);
    }
}

export { showAlbums };