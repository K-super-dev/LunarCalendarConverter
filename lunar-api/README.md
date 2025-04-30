npm install
npx vercel

GET https://your-vercel-project.vercel.app/api/convert?year=2025

{
  "year": "2025",
  "holidays": [
    {
      "name": "신정",
      "date": "2025-01-01",
      "type": "National"
    },
    {
      "name": "설날",
      "date": "2025-01-28",
      "type": "Lunar"
    }
    // ...
  ]
}