export function ServiceDetail({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <img
        src={image}
        alt={title}
        className="rounded-xl border border-gray-300"
      />
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
