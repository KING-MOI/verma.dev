export function byNewest<T extends { data: { date: Date } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function isPublished(
  post: { data: { draft: boolean } },
  dev: boolean = import.meta.env.DEV,
): boolean {
  return dev || !post.data.draft;
}

export function neighbors<T extends { id: string }>(posts: T[], id: string) {
  const i = posts.findIndex((p) => p.id === id);
  return {
    newer: i > 0 ? posts[i - 1] : undefined,
    older: i >= 0 && i < posts.length - 1 ? posts[i + 1] : undefined,
  };
}
