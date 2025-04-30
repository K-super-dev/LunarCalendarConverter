import holidayKr from 'holiday-kr';

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // CORS 헤더 추가
    const { lunarDate, untilYear } = req.query; // 예: "20250430"

    if (!lunarDate || !/^\d{8}$/.test(lunarDate) || !untilYear || !/^\d{4}$/.test(untilYear)) {
      return res.status(400).json({ error: "날짜 형식이 잘못되었습니다." });
    }
    
    const year = lunarDate.slice(0, 4);
    const month = lunarDate.slice(4, 6);
    const day = lunarDate.slice(6, 8);

  try {
    const startYear = parseInt(year);
    const endYear = parseInt(untilYear);
    const results = [];

    for (let y = startYear; y <= endYear; y++) {
      const solarDate = holidayKr.getSolar(String(y), month, day);
      results.push({ year: y , solarDate });
    }

    res.status(200).json({ lunarDate: lunarDate.slice(4, 8), range: `${startYear}-${endYear}`, results });
  } catch (err) {
    res.status(500).json({ error: "변환 중 오류 발생", detail: err.message });
  }
}