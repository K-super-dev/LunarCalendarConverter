## setup
npm install

npx vercel

## use
curl "http://localhost:3000/api/convert?lunarDate=20250501&untilYear=2026"

{"lunarDate":"0501","range":"2025-2026","results":[{"year":2025,"solarDate":{"year":2025,"month":5,"day":27,"leapMonth":false,"dayOfWeek":"화"}},{"year":2026,"solarDate":{"year":2026,"month":6,"day":15,"leapMonth":false,"dayOfWeek":"월"}}]}%