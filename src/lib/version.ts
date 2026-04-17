import fs from "fs"
import path from "path"
import matter from "gray-matter"

type LatestVersion = {
  slug: string
  version: string
  date?: string
  title?: string
  type?: string
  author?: string
  description?: string
}

export const getLatestVersion = async (): Promise<LatestVersion | null> => {
  const POSTS_DIR = path.join(process.cwd(), "src/app/blog/(post)")

  if (!fs.existsSync(POSTS_DIR)) return null

  const results: LatestVersion[] = []
  const folders = fs.readdirSync(POSTS_DIR)

  for (const folder of folders) {
    const fullPath = path.join(POSTS_DIR, folder, "page.mdx")
    if (!fs.existsSync(fullPath)) continue

    const raw = fs.readFileSync(fullPath, "utf-8")
    if (!raw) continue

    const { data } = matter(raw)

    results.push({
      ...(data as Omit<LatestVersion, "slug" | "version">),
      version: folder,
      slug: `/blog/${folder}`,
    })
  }

  const latest =
    results.sort(
      (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
    )[0] ?? null

  return latest
}
