'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="h-full m-0 flex justify-center items-center bg-green-100 text-green-800 font-sans">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-3xl font-bold">Oops! Something went wrong</h2>
      <p className="mb-6 text-lg">We encountered an unexpected error. Please try again.</p>
      <button 
        onClick={() => reset()} 
        className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
      >
        Try Again
      </button>
      </div>
    </div>
  )
}