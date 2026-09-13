export function getDaysDifference(current: Date, target: Date): number {
  const diffMs = target.getTime() - current.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}
