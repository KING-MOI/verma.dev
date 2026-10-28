export function isActive(path: string, href: string): boolean {
  if (href === "/") return path === "/";
  const section = href.replace(/\/$/, "");
  return path === section || path.startsWith(`${section}/`);
}
