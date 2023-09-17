function stringArrayAsList(array) {
    return array.map((item) => `${item}`).join(", ");
}

function convertSecondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

export { stringArrayAsList, convertSecondsToMinutesAndSeconds };