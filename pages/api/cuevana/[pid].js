const cuevana3 = require('cuevana3');

export default async function handler(req, res) {
  const { pid } = req.query;
  const response = await cuevana3.getMovies(Number(pid));
  console.log(pid);
  await res.end(JSON.stringify(response))
}
