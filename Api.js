const URL_API = 'https://api-json-fs9q.onrender.com';

export const getAllProducts = async () => {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data
};
