export const CardInfo = ({
  classNames = {
    container: "",
    title: "",
    description: "",
  },
  title,
  children,
}) => {
  return (
    <div
      className={`mt-10 p-6 bg-gray-100 dark:bg-zinc-900 dark:border-zinc-800 border border-gray-200 shadow rounded-lg ${classNames.container}`}
    >
      {title && (
        <p className={`font-semibold text-xl ${classNames.title}`}>{title}</p>
      )}
      <ul className={`list-disc ${classNames.description}`}>{children}</ul>
    </div>
  )
}
