"use client"

import { useEffect, useMemo, useState, useTransition } from "react"
import { Filters } from "./Filters"
import { IssueList } from "./IssueList"

const TroubleshootingContainer = ({ issues }) => {
  const [issuesDisplay, setIssuesDisplay] = useState(issues)

  const [filters, setFilters] = useState({
    source: [],
    tags: [],
    errorCode: [],
    q: "",
  })

  const { tagOptions, sourceOptions, errorCodeOptions } = useMemo(() => {
    const tags = new Map()
    const sources = new Map()
    const errorCodes = new Map()

    issues.forEach((issue) => {
      issue.tags.forEach((tag) => {
        tags.set(tag, tag)
      })

      issue.source.forEach((source) => {
        sources.set(source, source)
      })

      issue.errorCode.forEach((errorCode) => {
        errorCodes.set(errorCode, errorCode)
      })
    })

    return {
      tagOptions: Array.from(tags.keys()),
      sourceOptions: Array.from(sources.keys()),
      errorCodeOptions: Array.from(errorCodes.keys()),
    }
  }, [])

  useEffect(() => {
    const filterEntries = Object.entries(filters).filter(
      ([key, value]) => value.length > 0,
    )

    if (!filterEntries.length) {
      setIssuesDisplay(issues)
    } else {
      const issuesFiltered = issues.filter((issue) => {
        return filterEntries.every(([key, value]) => {
          if (typeof value !== "string")
            return value.some((item) => issue[key].includes(item))

          return issue.title.toLowerCase().includes(value.toLowerCase())
        })
      })

      setIssuesDisplay(issuesFiltered)
    }
  }, [filters])

  return (
    <div className="mt-10">
      <hr />
      <Filters
        filterValues={filters}
        setFilters={setFilters}
        tagOptions={tagOptions}
        errorCodeOptions={errorCodeOptions}
        sourceOptions={sourceOptions}
      />
      <IssueList list={issuesDisplay} />
    </div>
  )
}

export default TroubleshootingContainer
