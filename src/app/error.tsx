'use client'; // Error boundaries must be Client Components

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="m-0 flex h-full items-center justify-center bg-green-100 font-sans text-green-800">
      <div className="rounded-lg bg-white p-6 text-center shadow-lg">
        <h2 className="mb-4 text-3xl font-bold">Oops! Something went wrong</h2>
        <p className="mb-6 text-lg">We encountered an unexpected error. Please try again.</p>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-green-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-green-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
