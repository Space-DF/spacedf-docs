import TroubleshootingContainer from "./_containers"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

export const metadata = {
  title: "Troubleshooting",
  description:
    "Search or browse our troubleshooting guides for solutions to common SpaceDF issues.",
}

const getTroubleshootingFiles = async () => {
  const DOCS_DIR = path.join(process.cwd(), "src/app/troubleshooting/issues")
  const results = []

  const walk = (dir) => {
    const files = fs.readdirSync(dir)
    for (const file of files) {
      const fullPath = path.join(dir, file, "page.mdx")

      const raw = fs.readFileSync(fullPath, "utf-8")
      const stats = fs.statSync(fullPath)

      const timeUnix = stats.mtimeMs
      const dateTime = dayjs.utc(timeUnix).format("MMM DD, YYYY")

      if (!raw) continue

      const { data } = matter(raw)

      results.push({
        title: data?.title || "",
        source: data?.source || [],
        errorCode: data.errorCode || [],
        tags: data?.tags || [],
        href: `/troubleshooting/issues/${file}`,
        dateTime,
        timeUnix,
      })
    }

    return results.sort((a, b) => b.timeUnix - a.timeUnix)
  }

  return {
    issues: walk(DOCS_DIR),
  }
}

export default async function TroubleshootingPage() {
  const troubleshootingFiles = await getTroubleshootingFiles()

  return (
    <div className="text-base pt-10">
      <h1 className="font-semibold text-3xl md:text-4xl md:text-left text-center">
        Troubleshooting
      </h1>
      <p className="mt-4 text-base md:text-lg text-center md:text-left">
        Search or browse our troubleshooting guides for solutions to common
        SpaceDF issues.
      </p>

      <TroubleshootingContainer issues={troubleshootingFiles.issues || []} />
    </div>
  )
}
