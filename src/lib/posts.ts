export function byNewest<T extends { data: { date: Date } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
