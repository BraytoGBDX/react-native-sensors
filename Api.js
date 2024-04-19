const URL_API = 'https://api-sensors-9n0h.onrender.com/';

export const getAllSensors = async () => {
    const sensors = await fetch(URL_API);
    return await sensors.json();
};

export const insertData = async (sensor) => {
    const response = await fetch(URL_API, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',

        },
        body: JSON.stringify(sensor)
    })
    return await res.json();
}

export const deleteData = async () => {
    const res = await fetch(URL_API, {
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        }
    });
    return await res.json();
};
