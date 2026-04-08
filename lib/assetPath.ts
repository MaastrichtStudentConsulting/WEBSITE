// No-op now that we're hosting on Vercel (served at root, no basePath).
// Left in place so existing imports keep working without touching every file.
export function asset(path: string): string {
  return path;
}
