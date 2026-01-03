export function PricingCard({ plan, price }: { plan: string; price: string }) {
  return (
    <div className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition">
      <h4 className="text-xl font-bold mb-2">{plan}</h4>
      <p className="text-gray-600 mb-4">Perfect for growing teams</p>
      <div className="text-2xl font-bold text-blue-600">{price}</div>
    </div>
  )
}
