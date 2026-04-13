export default async function handler(req, res) {

  const slug = req.query.slug;

  const API_KEY = process.env.CURSEFORGE_API_KEY;

  const response = await fetch(
    `https://api.curseforge.com/v1/mods/search?gameId=432&slug=${slug}`,
    {
      headers: {
        "x-api-key": API_KEY
      }
    }
  );

  const data = await response.json();

  const mod = data.data[0];

  res.json({
    downloads: mod.downloadCount
  });
}