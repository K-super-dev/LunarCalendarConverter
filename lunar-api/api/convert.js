import { getHolidays } from "holiday-kr";

/**
 * /api/convert?year=2025
 */
export default async function handler(req, res) {
  const { year } = req.query;

  if (!year) {
    return res.status(400).json({ error: "year 파라미터가 필요합니다" });
  }

  try {
    const holidays = getHolidays(Number(year));
    res.status(200).json({ year, holidays });
  } catch (err) {
    res.status(500).json({ error: "변환 중 오류 발생", detail: err.message });
  }
}