const url = 'http://localhost:3000/';
async function getAll(path) {
    const response = await fetch(`${url}${path}`);
    return await response.json();
}
async function getOne(path, id) {
    const response = await fetch(`${url}${path}/${id}`);
    return await response.json();
}

export { getAll, getOne };