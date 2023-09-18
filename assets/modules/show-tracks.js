import {convertSecondsToMinutesAndSeconds} from "./utils.js";

async function showTracks (tracks) {
    const tracksTable = document.querySelector('.tracks-table tbody');
    if (!tracksTable) {
        console.error('Tracks table HTML element is missing.');
        return;
    }
    tracksTable.innerHTML = '';

    for (const track of tracks) {
        const html = `
        <tr>
            <td>${track.title}</td>
            <td>${convertSecondsToMinutesAndSeconds(track.duration)}</td>
            <td>${track.artists}</td>
<!--            <td>${track.album}</td>-->
        </tr>
        `;
        tracksTable.insertAdjacentHTML('beforeend', html);
    }
}

export { showTracks };