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
      className={`mt-10 p-6 bg-gray-100 dark:bg-zinc-800 dark:border-zinc-600 border border-gray-200 shadow rounded-lg ${classNames.container}`}
    >
      {title && (
        <p className={`font-semibold text-xl ${classNames.title}`}>{title}</p>
      )}
      <ul className={`list-disc ${classNames.description}`}>{children}</ul>
    </div>
  )
}
