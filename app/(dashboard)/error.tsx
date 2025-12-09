"use client";

export default function Error({
    error,
    reset
}:{
    error:Error;
    reset: ()=>void;
}){
    return(
        <div className="min-h-screen p-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-2">Something went wrong 😬</h2>
            <p className="text-gray-600 mb-4">{error.message}</p>
            <button
            onClick={reset}
            className="rounded bg-black text-white px-4 py-z"
            >
                Try again
            </button>
        </div>
    )
}