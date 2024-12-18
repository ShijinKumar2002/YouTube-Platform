
import React from 'react';

export default function VideoSection() {
    const videos = [
        "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        "https://www.youtube.com/embed/6v2L2UGZJAM",
        "https://www.youtube.com/embed/L_jWHffIx5E",
        "https://www.youtube.com/embed/tgbNymZ7vqY",
        "https://www.youtube.com/embed/eVTXPUF4Oz4",
        "https://www.youtube.com/embed/2Vv-BfVoq4g",
        "https://www.youtube.com/embed/L_jWHffIx5E",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/kJQP7kiw5Fk",
        "https://www.youtube.com/embed/eVTXPUF4Oz4",
        "https://www.youtube.com/embed/tgbNymZ7vqY",
        "https://www.youtube.com/embed/rYEDA3JcQqw",
        "https://www.youtube.com/embed/Z1R5al7yBGY",
        "https://www.youtube.com/embed/kJQP7kiw5Fk",
        "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        "https://www.youtube.com/embed/2Vv-BfVoq4g",
        "https://www.youtube.com/embed/rYEDA3JcQqw",
    ];

    return (
        <div className="bg-black w-full min-h-screen overflow-y-scroll scroll-smooth ml-20 lg:ml-64"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                {videos.map((video, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <iframe
                            src={video}
                            title={`video-${index}`}
                            className="w-full h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg shadow-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
}



