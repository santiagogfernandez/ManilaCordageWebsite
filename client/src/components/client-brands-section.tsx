import { useEffect, useState, useRef } from "react";

export default function ClientBrandsSection() {
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Client brand logos - using placeholder brand names and SVG logos
  const clientBrands = [
    {
      name: "Cameron Balloons",
      logo: (
        <div className="flex items-center justify-center h-12 text-gray-600 font-semibold text-center">
          <div className="border border-gray-400 px-4 py-2 text-sm leading-tight">
            CAMERON<br />BALLOONS
          </div>
        </div>
      )
    },
    {
      name: "Fairline Yachts",
      logo: (
        <div className="flex items-center justify-center h-12 text-gray-600 font-light text-xl">
          FAIRLINE
          <div className="ml-2 text-xs self-end mb-1">YACHTS</div>
        </div>
      )
    },
    {
      name: "Sunseeker",
      logo: (
        <div className="flex items-center justify-center h-12">
          <div className="text-gray-600 font-light text-xl relative px-4">
            <div className="absolute -top-1 left-0 right-0 border-t border-gray-400"></div>
            sunseeker
            <div className="absolute -bottom-1 left-0 right-0 border-b border-gray-400"></div>
          </div>
        </div>
      )
    },
    {
      name: "Babcock",
      logo: (
        <div className="flex items-center justify-center h-12 text-gray-600 font-light text-2xl">
          babcock
        </div>
      )
    },
    {
      name: "MSA Safety",
      logo: (
        <div className="flex items-center justify-center h-12">
          <div className="bg-gray-600 text-white px-4 py-2 font-bold text-lg">
            MSA
          </div>
          <div className="ml-3 text-gray-600 text-xs leading-tight">
            The Safety Company
          </div>
        </div>
      )
    },
    {
      name: "Princess Yachts",
      logo: (
        <div className="flex items-center justify-center h-12 text-gray-600 font-serif text-xl">
          Princess
        </div>
      )
    },
    {
      name: "Rolls Royce",
      logo: (
        <div className="flex items-center justify-center h-12 text-gray-600 font-serif text-lg">
          ROLLS-ROYCE
        </div>
      )
    },
    {
      name: "BAE Systems",
      logo: (
        <div className="flex items-center justify-center h-12 text-gray-600 font-bold text-lg">
          BAE SYSTEMS
        </div>
      )
    }
  ];

  const itemWidth = 240; // Fixed width per item in pixels
  const visibleItems = 5;

  // Auto-scroll functionality with seamless infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => prev - itemWidth);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset position when reaching the end for seamless loop
  useEffect(() => {
    if (Math.abs(translateX) >= itemWidth * clientBrands.length) {
      setIsTransitioning(false);
      setTranslateX(0);
      
      // Re-enable transition after reset
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [translateX, clientBrands.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-dark mb-4">
            Brands We Work With
          </h2>
        </div>

        <div className="relative overflow-hidden" style={{ width: `${visibleItems * itemWidth}px`, margin: '0 auto' }}>
          <div 
            ref={containerRef}
            className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{ 
              transform: `translateX(${translateX}px)`,
              width: `${(clientBrands.length * 2) * itemWidth}px`
            }}
          >
            {/* Duplicate brands for seamless infinite loop */}
            {[...clientBrands, ...clientBrands].map((brand, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 px-6">
                  {brand.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}