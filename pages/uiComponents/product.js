export default function Product(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-200 p-6 rounded-lg">
      <div className="w-32 h-32 bg-gray-400 mb-4 rounded-lg"></div>
      <h3 className="text-lg font-semibold mb-2">Product 1</h3>
      <p className="text-gray-700">
        High-quality product description.
      </p>
    </div>
  </div> 
    )
}