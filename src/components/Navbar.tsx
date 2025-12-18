import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[60]">
                <div className="flex justify-between h-16 items-center">
                    {/* Brand / Logo (Optional) */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-800">MyBrand</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/news" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">News</Link>
                        <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">Login</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 p-2"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Sidebar (Slide from Left) */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden z-[60] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                        <span className="text-lg font-bold text-gray-800">Menu</span>
                        <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col p-4 space-y-4">
                        <Link to="/news" onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 font-medium text-lg">News</Link>
                        <Link to="/login" onClick={toggleMenu} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center font-medium">Login</Link>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    )
}

