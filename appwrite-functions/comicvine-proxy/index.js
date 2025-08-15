import fetch from "node-fetch";

export default async ({ req, res, env }) => {
    const { q } = req.payload ? JSON.parse(req.payload) : {};
    const search = q || "batman";
    const API_KEY = env.VITE_COMIC_API_KEY;

    const url = `https://comicvine.gamespot.com/api/search/?api_key=${API_KEY}&format=json&query=${encodeURIComponent(search)}&resources=volume`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return res.json(data);
    } catch (err) {
        return res.json({ error: err.message }, 500);
    }
};