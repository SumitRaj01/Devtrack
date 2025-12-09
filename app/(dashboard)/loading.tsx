export default function Loading(){
    return (
        <div className="min-h-screen p-6 animate-pulse">
      <h1 className="text-2xl font-semibold mb-4">Loading dashboard...</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="h-20 rounded bg-gray-200" />
        <div className="h-20 rounded bg-gray-200" />
        <div className="h-20 rounded bg-gray-200" />
      </div>

      <div className="space-y-3">
        <div className="h-12 rounded bg-gray-200" />
        <div className="h-12 rounded bg-gray-200" />
        <div className="h-12 rounded bg-gray-200" />
      </div>
    </div>
    )
}