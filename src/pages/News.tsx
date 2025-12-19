import { GetNewsdata } from '../api/Newsapi';
import { Navbar } from '../components/Navbar';
import { useEffect, useState, useRef, useCallback } from 'react';
import { type NewsArticle } from '../types/news';
import { CircularProgress, Box, Typography, Container } from '@mui/material';

function News() {
    const [newsData, setNewsData] = useState<NewsArticle[]>([]);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loaderRef = useRef<HTMLDivElement | null>(null);
    const loadingRef = useRef(false);

    // ✅ Fetch Function with 200ms artificial delay
    const fetchNews = useCallback(async (page?: string) => {
        if (loadingRef.current) return;

        loadingRef.current = true;
        setLoading(true);
        setError(null);

        // Artificial delay for UI feedback for 200ms to see that loading mui progress //

        await new Promise(resolve => setTimeout(resolve, 200));

        try {
            const data = await GetNewsdata(page);

            if (!data || !Array.isArray(data.results)) {
                if (newsData.length === 0) setError('No news found');
                return;
            }

            setNewsData(prev => [...prev, ...data.results]);
            setNextPage(data.nextPage ?? null);

        } catch (err) {
            console.error('Failed to fetch news:', err);
            setError('Failed to load news. Please try again.');
        } finally {
            setLoading(false);
            loadingRef.current = false;
        }
    }, [newsData.length]);

    // Initial Load api data
    useEffect(() => {
        fetchNews();
    }, []);

    // IntersectionObserver (Optimized Infinite Scroll) ------>
    useEffect(() => {
        const currentLoader = loaderRef.current;
        if (!currentLoader || !nextPage) return;

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && nextPage && !loadingRef.current) {
                    fetchNews(nextPage);
                }
            },
            {
                root: null,
                rootMargin: '100px',
                threshold: 0.1,
            }
        );

        observer.observe(currentLoader);

        return () => {
            if (currentLoader) observer.unobserve(currentLoader);
        };
    }, [nextPage, fetchNews]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <Container maxWidth="lg" sx={{ py: 6, flexGrow: 1 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mb: 4, color: '#111827' }}>
                    Latest News
                </Typography>

                {error && (
                    <Typography color="error" align="center" sx={{ my: 4 }}>
                        {error}
                    </Typography>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((article, index) => (
                        <div key={`${article.article_id}-${index}`} className="group h-full">
                            <article className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={article.image_url ?? 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop'}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex gap-2 mb-3">
                                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                            {article.category?.[0] || 'General'}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {article.description || 'No description available for this breaking news item. Click read more to view the full details.'}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                                        <span className="text-xs font-semibold text-gray-400">
                                            {new Date(article.pubDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <a
                                            href={article.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            Read Full
                                            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                {/* Loader */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
                    {loading ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                            <CircularProgress size={40} thickness={5} sx={{ color: '#2563eb' }} />
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#6b7280' }}>
                                Gathering the latest stories...
                            </Typography>
                        </Box>
                    ) : (
                        nextPage && <div ref={loaderRef} className="h-10 w-full" />
                    )}
                </Box>

                {/* End State */}
                {!nextPage && newsData.length > 0 && (
                    <Typography align="center" sx={{ color: '#9ca3af', fontWeight: 600, py: 4 }}>
                        You've reached the end of the news feed
                    </Typography>
                )}
            </Container>
        </div>
    );
}

export default News;
