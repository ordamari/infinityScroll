import axios from "axios";

export const peopleService = {
    get,
}

async function get(page) {
    const res = await axios.get(`https://randomuser.me/api/?results=5&page=${page}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return res.data.results
}