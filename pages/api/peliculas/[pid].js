let peliculas = require("../../../Assets/Peliculas/Movies.json");

export default async function handler(req, res) {
  const { pid } = req.query;
  await res.end(JSON.stringify(peliculas));
}
