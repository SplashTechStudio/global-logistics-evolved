import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const galleryItems = [
  { id: 1, src: gallery1, alt: "Air freight cargo handling" },
  { id: 2, src: gallery2, alt: "Construction logistics" },
  { id: 3, src: gallery3, alt: "Vehicle transportation service" },
  { id: 4, src: gallery4, alt: "Motorcycle fleet delivery" },
  { id: 5, src: gallery5, alt: "Warehouse management" },
  { id: 6, src: gallery6, alt: "Medical emergency transport" },
  { id: 7, src: gallery7, alt: "Temporary shelter setup" },
  { id: 8, src: gallery8, alt: "Marine logistics services" },
  { id: 9, src: gallery9, alt: "Humanitarian aid distribution" },
  { id: 10, src: gallery10, alt: "Airport cargo operations" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Seeing Us in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Real projects, real results, real impact across West Africa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-up hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={galleryItems.find((item) => item.id === selectedImage)?.src}
              alt={galleryItems.find((item) => item.id === selectedImage)?.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
