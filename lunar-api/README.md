npm install
npx vercel

curl "http://localhost:3000/api/convert?solarDate=20250501&untilYear=2027"          ✔ 
{"solarDate":"20250501","range":"2025-2027","results":[{"year":2025,"lunarDay":{"year":2025,"month":4,"day":4,"leapMonth":false,"dayOfWeek":"목"}},{"year":2026,"lunarDay":{"year":2026,"month":3,"day":15,"leapMonth":false,"dayOfWeek":"금"}},{"year":2027,"lunarDay":{"year":2027,"month":3,"day":25,"leapMonth":false,"dayOfWeek":"토"}}]}%          