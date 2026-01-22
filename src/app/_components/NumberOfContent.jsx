import Link from "next/link"

export const NumberOfContent = ({
  number,
  title = "",
  href = "",
  description,
  className,
  isDescLink = false,
}) => {
  return (
    <div className={`flex gap-3 items-start mb-2 ${className}`}>
      <div className="size-5 text-sm border border-gray-400 rounded-sm text-gray-500 flex items-center justify-center">
        {number}
      </div>

      <div className="-translate-y-1 flex flex-col">
        <Link href={href} className={!!href ? "hover:underline" : ""}>
          {title}
        </Link>

        {!isDescLink && <div className="text-xs opacity-70">{description}</div>}
        {isDescLink && (
          <Link
            className="text-sm opacity-70 hover:underline"
            href={description}
            target="_blank"
          >
            {description}
          </Link>
        )}
      </div>
    </div>
  )
}

export const NumberWithMdx = ({ number, children, className }) => {
  return (
    <div className={`flex gap-3 items-start mb-2 ${className}`}>
      <div className="size-5 text-sm border border-gray-400 rounded-sm text-gray-500 flex items-center justify-center">
        {number}
      </div>

      <div className="-translate-y-1">{children}</div>
    </div>
  )
}
