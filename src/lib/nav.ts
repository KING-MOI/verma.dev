export function isActive(path: string, href: string): boolean {
  return href === "/" ? path === "/" : path.startsWith(href);
}
