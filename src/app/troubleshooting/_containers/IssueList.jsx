import Link from "next/link"

export const IssueList = ({ list = [], isLoading }) => {
  return (
    <div className="mt-0 md:mt-10">
      {!list.length && (
        <div className="flex justify-center mt-7">No issues found</div>
      )}

      {!!list.length &&
        list.map((issue, index) => (
          <div key={index}>
            <div className="w-full flex md:flex-row flex-col gap-3 pt-6">
              <div className="flex-1">
                <Link
                  className="font-semibold text-lg hover:underline"
                  href={issue.href}
                >
                  {issue.title}
                </Link>
                <p className="mt-4 text-sm opacity-80">
                  {(issue.errorCode || []).join(", ")}
                </p>
              </div>

              <div className="flex justify-start flex-wrap w-full md:max-w-34 gap-1 pb-2">
                {[...issue.source, ...issue.tags].map((t, index) => (
                  <div
                    key={index}
                    className="border font-medium border-zinc-200 dark:border-zinc-700 rounded-full px-2 text-xs flex items-center justify-center"
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div className="text-xs max-w-12.5 hidden md:block">
                {issue.dateTime}
              </div>
            </div>

            <hr />
          </div>
        ))}
    </div>
  )
}
