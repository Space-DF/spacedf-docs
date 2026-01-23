"use client"

import Link from "next/link"

export const RichCardOptions = ({ children, className = "" }) => {
  return (
    <div className={`mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 ${className}`}>
      {children}
    </div>
  )
}

export const RichCardOption = ({ icon, title, description, badge, href }) => {
  return (
    <Link
      href={href}
      className="
        group block rounded-xl border border-gray-300
        bg-white p-4 transition
        hover:-translate-y-0.5 hover:shadow-md
        dark:border-gray-700 dark:bg-zinc-900
        hover:border-[#818cf8]
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg border border-gray-200 bg-gray-50
            dark:border-gray-700 dark:bg-gray-800
          "
        >
          {icon}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </span>

          {badge && (
            <span
              className="
                rounded-full border border-emerald-500
                bg-emerald-50 px-2 py-0.5
                text-[10px] font-semibold uppercase tracking-wide
                text-emerald-600
                dark:bg-emerald-500/10 dark:text-emerald-400
              "
            >
              {badge}
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </Link>
  )
}
