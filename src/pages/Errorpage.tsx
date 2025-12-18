import { Link } from 'react-router-dom'

function Errorpage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 text-gray-800 font-sans text-center">
            <h1 className="text-9xl font-black text-red-500 leading-none drop-shadow-md">404</h1>
            <h2 className="text-4xl font-bold mt-4 mb-2">Page Not Found</h2>
            <p className="text-lg text-gray-500 max-w-lg mb-8 leading-relaxed">
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link to="/" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200">
                Go Back Home
            </Link>
        </div>
    )
}

export default Errorpage
