import holidayKr from 'holiday-kr';

export default async function handler(req, res) {
    const { solarDate, untilYear } = req.query; // 예: "20250430"

    if (!solarDate || !/^\d{8}$/.test(solarDate) || !untilYear || !/^\d{4}$/.test(untilYear)) {
      return res.status(400).json({ error: "날짜 형식이 잘못되었습니다." });
    }
    
    const year = solarDate.slice(0, 4);
    const month = solarDate.slice(4, 6);
    const day = solarDate.slice(6, 8);

  try {
    const startYear = parseInt(year);
    const endYear = parseInt(untilYear);
    const results = [];

    for (let y = startYear; y <= endYear; y++) {
      const lunarDay = holidayKr.getLunar(String(y), month, day);
      results.push({ year: y , lunarDay });
    }

    res.status(200).json({ solarDate: solarDate, range: `${startYear}-${endYear}`, results });
  } catch (err) {
    res.status(500).json({ error: "변환 중 오류 발생", detail: err.message });
  }
}