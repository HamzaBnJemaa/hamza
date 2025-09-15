import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-16 w-16 animate-spin text-blue-500 mx-auto mb-4" />
        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}
