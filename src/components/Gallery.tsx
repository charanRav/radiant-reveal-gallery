
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { galleryImages, galleryCategories, generateMoreImages, GalleryImage } from '@/data/galleryConfig';
import { Loader2 } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [allImages, setAllImages] = useState<GalleryImage[]>(galleryImages);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(allImages);
    } else {
      setFilteredImages(allImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory, allImages]);

  const openLightbox = (index: number) => {
    const actualIndex = allImages.findIndex(img => img.id === filteredImages[index].id);
    setSelectedImageIndex(actualIndex);
    setLightboxOpen(true);
  };

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
    setFailedImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageId);
      return newSet;
    });
  };

  const handleImageError = (imageId: string) => {
    setFailedImages(prev => new Set(prev).add(imageId));
    console.log(`Failed to load image: ${imageId}`);
  };

  const loadMoreImages = async () => {
    setIsLoadingMore(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newImages = generateMoreImages(allImages.length, selectedCategory);
      setAllImages(prev => [...prev, ...newImages]);
    } catch (error) {
      console.error('Error loading more images:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <>
      <section id="gallery" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Visual <span className="text-gradient">Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my collection of visual stories, each capturing a unique moment in time
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'hover:bg-foreground/5'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Loading placeholder */}
                  {!loadedImages.has(image.id) && !failedImages.has(image.id) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-2xl flex items-center justify-center">
                      <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                    </div>
                  )}
                  
                  {/* Error placeholder */}
                  {failedImages.has(image.id) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="w-8 h-8 mx-auto mb-2 bg-gray-300 rounded"></div>
                        <p className="text-xs">Image unavailable</p>
                      </div>
                    </div>
                  )}
                  
                  <img
                    src={image.url}
                    alt={image.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${
                      !loadedImages.has(image.id) || failedImages.has(image.id) ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  {loadedImages.has(image.id) && !failedImages.has(image.id) && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                      <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                        <p className="text-sm opacity-90 capitalize">{image.category}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <Button
              onClick={loadMoreImages}
              disabled={isLoadingMore}
              className="px-8 py-3 text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                'Load More Images'
              )}
            </Button>
          </div>

          {filteredImages.length === 0 && !isLoadingMore && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={allImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={selectedImageIndex}
        onIndexChange={setSelectedImageIndex}
      />
    </>
  );
};

export default Gallery;
