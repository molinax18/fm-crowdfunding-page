const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

export default function getDaysDifference(
  startDate: Date,
  endDate: Date,
): number {
  return Math.ceil(
    (endDate.getTime() - startDate.getTime()) / MILLISECONDS_IN_DAY,
  );
}
