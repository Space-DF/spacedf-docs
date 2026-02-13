import Link from "next/link"
import path from "path"
import fs from "fs"
import matter from "gray-matter"

const getBlogs = async () => {
  const DOCS_DIR = path.join(process.cwd(), "src/app/blog/(post)")

  const results = []

  const files = fs.readdirSync(DOCS_DIR)

  for (const file of files) {
    const fullPath = path.join(DOCS_DIR, file, "page.mdx")
    const raw = fs.readFileSync(fullPath, "utf-8")

    if (!raw) continue

    const { data } = matter(raw)

    results.push({
      ...data,
      slug: `/blog/${file}`,
    })
  }

  return results.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        SpaceDF Blog
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {blogs.map((post) => (
          <article
            key={post.slug}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "1.5rem",
              backgroundColor: "var(--nextra-bg)",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <Link
                href={`${post.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#B7A1F7",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >
                {post.title}
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
                fontSize: "0.875rem",
                color: "#64748b",
              }}
            >
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{post.type}</span>
              <span>•</span>
              <span>by {post.author}</span>
            </div>

            <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
              {post.description}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              style={{
                color: "#B7A1F7",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
