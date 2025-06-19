
export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'nature', label: 'Nature' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'portrait', label: 'Portrait' },
  { id: 'travel', label: 'Travel' },
  { id: 'art', label: 'Art' },
];

// Sample images - replace with your Amazon S3 URLs
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
    title: 'Mountain Landscape',
    category: 'nature',
    description: 'Beautiful mountain scenery during golden hour'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=800&fit=crop',
    title: 'Modern Architecture',
    category: 'architecture',
    description: 'Contemporary building design with glass facade'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
    title: 'Portrait Photography',
    category: 'portrait',
    description: 'Professional portrait with natural lighting'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop',
    title: 'City Streets',
    category: 'travel',
    description: 'Urban exploration and street photography'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop',
    title: 'Abstract Art',
    category: 'art',
    description: 'Digital art composition with vibrant colors'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop',
    title: 'Ocean Waves',
    category: 'nature',
    description: 'Dramatic seascape with powerful waves'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop',
    title: 'Urban Architecture',
    category: 'architecture',
    description: 'Geometric patterns in modern buildings'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=800&fit=crop',
    title: 'Adventure Travel',
    category: 'travel',
    description: 'Mountain hiking and outdoor adventure'
  },
];

// Extended pool of 50+ different image templates
const imagePool = [
  // Nature images
  { title: 'Forest Path', category: 'nature', id: 'photo-1441974231531-c6227db76b6e' },
  { title: 'Sunset Beach', category: 'nature', id: 'photo-1507525428034-b723cf961d3e' },
  { title: 'Mountain Peak', category: 'nature', id: 'photo-1464822759844-d150b88fadc1' },
  { title: 'Wild Flowers', category: 'nature', id: 'photo-1490750967868-88aa4486c946' },
  { title: 'Desert Landscape', category: 'nature', id: 'photo-1547036967-23d11aacaee0' },
  { title: 'Autumn Forest', category: 'nature', id: 'photo-1441974231531-c6227db76b6e' },
  { title: 'Rocky Coast', category: 'nature', id: 'photo-1439066615861-d1af74d74000' },
  { title: 'Lake Reflection', category: 'nature', id: 'photo-1506905925346-21bda4d32df4' },
  { title: 'Starry Night', category: 'nature', id: 'photo-1419242902214-272b3f66ee7a' },
  { title: 'Tropical Paradise', category: 'nature', id: 'photo-1449824913935-59a10b8d2000' },
  { title: 'Winter Wonderland', category: 'nature', id: 'photo-1578662996442-48f60103fc96' },
  { title: 'Canyon Views', category: 'nature', id: 'photo-1506905925346-21bda4d32df4' },
  
  // Architecture images
  { title: 'Glass Building', category: 'architecture', id: 'photo-1449824913935-59a10b8d2000' },
  { title: 'Bridge Design', category: 'architecture', id: 'photo-1520637836862-4d197d17c11a' },
  { title: 'Modern Skyscraper', category: 'architecture', id: 'photo-1486406146926-c627a92ad1ab' },
  { title: 'Historic Castle', category: 'architecture', id: 'photo-1520637836862-4d197d17c11a' },
  { title: 'Art Museum', category: 'architecture', id: 'photo-1477959858617-67f85cf4f1df' },
  { title: 'Cathedral Interior', category: 'architecture', id: 'photo-1520637836862-4d197d17c11a' },
  { title: 'Spiral Staircase', category: 'architecture', id: 'photo-1486406146926-c627a92ad1ab' },
  { title: 'Library Architecture', category: 'architecture', id: 'photo-1481277542470-605612bd2d61' },
  { title: 'Opera House', category: 'architecture', id: 'photo-1449824913935-59a10b8d2000' },
  { title: 'Minimalist Home', category: 'architecture', id: 'photo-1477959858617-67f85cf4f1df' },
  { title: 'Industrial Design', category: 'architecture', id: 'photo-1486406146926-c627a92ad1ab' },
  { title: 'Gothic Cathedral', category: 'architecture', id: 'photo-1520637836862-4d197d17c11a' },
  
  // Portrait images
  { title: 'Street Portrait', category: 'portrait', id: 'photo-1507003211169-0a1dd7228f2d' },
  { title: 'Business Portrait', category: 'portrait', id: 'photo-1472099645785-5658abf4ff4e' },
  { title: 'Artist Portrait', category: 'portrait', id: 'photo-1507003211169-0a1dd7228f2d' },
  { title: 'Fashion Model', category: 'portrait', id: 'photo-1544005313-94ddf0286df2' },
  { title: 'Senior Portrait', category: 'portrait', id: 'photo-1507003211169-0a1dd7228f2d' },
  { title: 'Child Portrait', category: 'portrait', id: 'photo-1472099645785-5658abf4ff4e' },
  { title: 'Couple Portrait', category: 'portrait', id: 'photo-1507003211169-0a1dd7228f2d' },
  { title: 'Headshot Studio', category: 'portrait', id: 'photo-1472099645785-5658abf4ff4e' },
  { title: 'Musician Portrait', category: 'portrait', id: 'photo-1507003211169-0a1dd7228f2d' },
  { title: 'Graduate Portrait', category: 'portrait', id: 'photo-1472099645785-5658abf4ff4e' },
  
  // Travel images
  { title: 'City Night', category: 'travel', id: 'photo-1477959858617-67f85cf4f1df' },
  { title: 'Local Market', category: 'travel', id: 'photo-1488646953014-85cb44e25828' },
  { title: 'Ancient Ruins', category: 'travel', id: 'photo-1464207687429-7505649dae38' },
  { title: 'Street Food', category: 'travel', id: 'photo-1488646953014-85cb44e25828' },
  { title: 'Temple Architecture', category: 'travel', id: 'photo-1464207687429-7505649dae38' },
  { title: 'City Skyline', category: 'travel', id: 'photo-1477959858617-67f85cf4f1df' },
  { title: 'Beach Resort', category: 'travel', id: 'photo-1488646953014-85cb44e25828' },
  { title: 'Mountain Village', category: 'travel', id: 'photo-1464207687429-7505649dae38' },
  { title: 'Cultural Festival', category: 'travel', id: 'photo-1488646953014-85cb44e25828' },
  { title: 'Historic District', category: 'travel', id: 'photo-1464207687429-7505649dae38' },
  
  // Art images
  { title: 'Digital Creation', category: 'art', id: 'photo-1541961017774-22349e4a1262' },
  { title: 'Paint Splash', category: 'art', id: 'photo-1562887284-0c12b09aa580' },
  { title: 'Sculpture Gallery', category: 'art', id: 'photo-1541961017774-22349e4a1262' },
  { title: 'Street Art', category: 'art', id: 'photo-1562887284-0c12b09aa580' },
  { title: 'Abstract Painting', category: 'art', id: 'photo-1541961017774-22349e4a1262' },
  { title: 'Mixed Media', category: 'art', id: 'photo-1562887284-0c12b09aa580' },
  { title: 'Installation Art', category: 'art', id: 'photo-1541961017774-22349e4a1262' },
  { title: 'Digital Art', category: 'art', id: 'photo-1562887284-0c12b09aa580' },
  { title: 'Contemporary Art', category: 'art', id: 'photo-1541961017774-22349e4a1262' },
  { title: 'Graphic Design', category: 'art', id: 'photo-1562887284-0c12b09aa580' },
];

let usedImages = new Set<string>();

// Function to generate more images with truly different content
export const generateMoreImages = (currentCount: number, category: string = 'all'): GalleryImage[] => {
  const newImages: GalleryImage[] = [];
  const availableImages = category === 'all' ? imagePool : imagePool.filter(img => img.category === category);
  
  // Reset used images if we've used them all
  if (usedImages.size >= availableImages.length) {
    usedImages.clear();
  }
  
  let attempts = 0;
  while (newImages.length < 6 && attempts < 20) {
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const template = availableImages[randomIndex];
    const uniqueKey = `${template.id}_${template.category}`;
    
    if (!usedImages.has(uniqueKey)) {
      usedImages.add(uniqueKey);
      
      const imageId = `generated_${currentCount + newImages.length + 1}`;
      const randomParam = Math.floor(Math.random() * 1000);
      
      newImages.push({
        id: imageId,
        url: `https://images.unsplash.com/${template.id}?w=800&h=800&fit=crop&q=80&auto=format&ixlib=rb-4.0.3&sig=${randomParam}`,
        title: `${template.title} ${currentCount + newImages.length + 1}`,
        category: template.category,
        description: `Professional ${template.category} photography showcasing ${template.title.toLowerCase()}`
      });
    }
    attempts++;
  }
  
  return newImages;
};
