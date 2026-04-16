/**
 * Frames documentation screenshots/GIFs in a rounded “app window” shell for clearer hierarchy.
 */
export function DocImageFrame({children, className = ""}) {
  return (
    <div
      className={`doc-image-frame my-5 overflow-hidden rounded-xl border border-zinc-200/90 bg-zinc-50 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_-4px_rgba(0,0,0,0.08)] ring-1 ring-black/4 dark:border-zinc-700/90 dark:bg-zinc-950/50 dark:shadow-[0_1px_3px_rgba(0,0,0,0.35),0_12px_32px_-8px_rgba(0,0,0,0.45)] dark:ring-white/6 ${className}`}
    >
      <div
        className="flex items-center border-b border-zinc-200/95 bg-zinc-100/95 px-3 py-2.5 dark:border-zinc-700/95 dark:bg-zinc-900/80"
        aria-hidden
      >
        <div className="flex gap-1.5">
          <span className="size-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 shrink-0 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 shrink-0 rounded-full bg-[#28c840]" />
        </div>
      </div>
      <div className="p-1.5 sm:p-2">
        <div className="overflow-hidden rounded-lg bg-white ring-1 ring-zinc-200/80 dark:bg-zinc-900/60 dark:ring-zinc-700/80 [&_img]:block [&_img]:h-auto [&_img]:w-full [&_img]:align-middle">
          {children}
        </div>
      </div>
    </div>
  )
}
