export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-4 border-t text-sm">
      <div>
        <button className="mr-4 text-blue-600 hover:underline">Prev</button>
        <button className="text-blue-600 hover:underline">Next</button>
      </div>
      <div className="space-x-4">
        <a href="#" className="text-blue-600 hover:underline">
          Facebook
        </a>
        <a href="#" className="text-red-600 hover:underline">
          YouTube
        </a>
      </div>
    </footer>
  )
}
