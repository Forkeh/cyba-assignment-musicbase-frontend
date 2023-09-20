async function showTracks (tracks) {
    const tracksTable = document.querySelector('.tracks-table tbody');
    if (!tracksTable) {
        console.error('Tracks table HTML element is missing.');
        return;
    }
    tracksTable.innerHTML = '';

    if (tracks.length === 0 || !tracks) {
        console.log('ShowTracks: No tracks found')
        const html = /*html*/ `
        <tr>
            <td colspan="4">No tracks found</td>
        </tr>
        `;
        tracksTable.insertAdjacentHTML('beforeend', html);
        return;
    }

    for (const track of tracks) {
        const html = /*html*/ `
        <tr>
            <td>${track.title}</td>
            <td>${convertSecondsToMinutesAndSeconds(track.duration)}</td>
            <td>${track.artists}</td>
            <td>${track.albums}</td>
        </tr>
        `;
        tracksTable.insertAdjacentHTML('beforeend', html);
    }
}

function convertSecondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

export { showTracks };