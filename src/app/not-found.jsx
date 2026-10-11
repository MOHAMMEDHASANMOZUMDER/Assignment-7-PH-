import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        BazaarDor
      </p>
      <h1 className="mt-6 text-8xl font-extrabold text-primary sm:text-9xl">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
        Page not found
      </h2>
      <p className="mt-3 max-w-md text-default-500">
      The page may have been broken or not found. Crickets over here.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" color="primary" className="bg-green-700 text-white hover:bg-green-800 font-bold rounded-2xl px-4 py-2" size="lg">
          Back to Home
        </Link>
      </div>
    </main>
  );
}