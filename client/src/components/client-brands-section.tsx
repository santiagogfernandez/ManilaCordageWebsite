import { useEffect, useState } from "react";

export default function ClientBrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Client brand logos - using placeholder brand names and SVG logos
  const clientBrands = [
    {
      name: "Cameron Balloons",
      logo: (
        <div className="flex items-center justify-center h-12 text-gray-600 font-semibold">
          <div className="border border-gray-400 px-3 py-1 text-sm">
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
          <div className="ml-2 text-xs">YACHTS</div>
        </div>
      )
    },
    {
      name: "Sunseeker",
      logo: (
        <div className="flex items-center justify-center h-12">
          <div className="text-gray-600 font-light text-xl relative">
            <div className="absolute -top-2 left-0 right-0 border-t border-gray-400"></div>
            sunseeker
            <div className="absolute -bottom-2 left-0 right-0 border-b border-gray-400"></div>
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
          <div className="bg-gray-600 text-white px-3 py-1 font-bold text-lg">
            MSA
          </div>
          <div className="ml-2 text-gray-600 text-xs">
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

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= clientBrands.length - 5 ? 0 : prevIndex + 1
      );
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [clientBrands.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-dark mb-4">
            Brands We Work With
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 5)}%)`,
              width: `${(clientBrands.length / 5) * 100}%`
            }}
          >
            {clientBrands.map((brand, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-8 flex items-center justify-center"
                style={{ width: `${100 / clientBrands.length}%` }}
              >
                <div className="h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                  {brand.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(clientBrands.length / 5) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 5) === index 
                  ? 'bg-navy-dark' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index * 5)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}