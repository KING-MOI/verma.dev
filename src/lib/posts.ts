export function byNewest<T extends { data: { date: Date } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function isPublished(
  post: { data: { draft: boolean } },
  dev: boolean = import.meta.env.DEV,
): boolean {
  return dev || !post.data.draft;
}
