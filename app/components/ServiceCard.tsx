export function ServiceCard({
  title,
  icon,
  color,
}: {
  title: string
  icon: string
  color: string
}) {
  return (
    <div className={`rounded-xl p-6 shadow-md ${color} text-center`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  )
}
