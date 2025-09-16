import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CardComic = ({ title, creators, image }: { title: string, creators: string, image: string }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        // Navigate to comic detail page with encoded title
        const encodedTitle = encodeURIComponent(title);
        navigate(`/comic/${encodedTitle}`);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
        }
    };
    
    return (
        <div 
            className="flex flex-col items-start rounded-xl border border-gray-200 shadow-lg m-4 w-fit cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300" 
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${title} by ${creators}`}
        >
            <div className="relative overflow-hidden rounded-xl">
                <img 
                    className="rounded-xl w-48 h-72 object-cover" 
                    src={image} 
                    alt={`Cover image for ${title}`}
                    loading="lazy"
                />
                <div className="flex flex-col absolute w-full rounded-xl items-start bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-bold mb-1 line-clamp-2 leading-tight">
                        {title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium">
                        {creators || "Unknown Creator"}
                    </p>
                </div>
            </div>
        </div>
    );
};
