
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

// Sample images with unique IDs and proper URLs
export const galleryImages: GalleryImage[] = [
  {
    id: 'img_1',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop&q=80',
    title: 'Mountain Landscape',
    category: 'nature',
    description: 'Beautiful mountain scenery during golden hour'
  },
  {
    id: 'img_2',
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=800&fit=crop&q=80',
    title: 'Modern Architecture',
    category: 'architecture',
    description: 'Contemporary building design with glass facade'
  },
  {
    id: 'img_3',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80',
    title: 'Portrait Photography',
    category: 'portrait',
    description: 'Professional portrait with natural lighting'
  },
  {
    id: 'img_4',
    url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop&q=80',
    title: 'City Streets',
    category: 'travel',
    description: 'Urban exploration and street photography'
  },
  {
    id: 'img_5',
    url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&q=80',
    title: 'Abstract Art',
    category: 'art',
    description: 'Digital art composition with vibrant colors'
  },
  {
    id: 'img_6',
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop&q=80',
    title: 'Ocean Waves',
    category: 'nature',
    description: 'Dramatic seascape with powerful waves'
  },
  {
    id: 'img_7',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&q=80',
    title: 'Urban Architecture',
    category: 'architecture',
    description: 'Geometric patterns in modern buildings'
  },
  {
    id: 'img_8',
    url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=800&fit=crop&q=80',
    title: 'Adventure Travel',
    category: 'travel',
    description: 'Mountain hiking and outdoor adventure'
  },
];

// Unique image pool with 50+ distinct images
const uniqueImagePool = [
  // Nature images
  { id: 'photo-1441974231531-c6227db76b6e', title: 'Forest Path', category: 'nature' },
  { id: 'photo-1507525428034-b723cf961d3e', title: 'Sunset Beach', category: 'nature' },
  { id: 'photo-1464822759844-d150b88fadc1', title: 'Mountain Peak', category: 'nature' },
  { id: 'photo-1490750967868-88aa4486c946', title: 'Wild Flowers', category: 'nature' },
  { id: 'photo-1547036967-23d11aacaee0', title: 'Desert Landscape', category: 'nature' },
  { id: 'photo-1439066615861-d1af74d74000', title: 'Rocky Coast', category: 'nature' },
  { id: 'photo-1419242902214-272b3f66ee7a', title: 'Starry Night', category: 'nature' },
  { id: 'photo-1449824913935-59a10b8d2000', title: 'Tropical Paradise', category: 'nature' },
  { id: 'photo-1578662996442-48f60103fc96', title: 'Winter Wonderland', category: 'nature' },
  { id: 'photo-1502134249126-9f3755a50d78', title: 'Canyon Views', category: 'nature' },
  { id: 'photo-1540979388789-6cee28a1cdc9', title: 'River Valley', category: 'nature' },
  { id: 'photo-1506905925346-21bda4d32df4', title: 'Alpine Lake', category: 'nature' },
  
  // Architecture images
  { id: 'photo-1520637736862-4d197d17c11a', title: 'Glass Building', category: 'architecture' },
  { id: 'photo-1520637876862-4d197d17c11a', title: 'Bridge Design', category: 'architecture' },
  { id: 'photo-1481277542470-605612bd2d61', title: 'Library Architecture', category: 'architecture' },
  { id: 'photo-1449824913935-59a10b8d2001', title: 'Opera House', category: 'architecture' },
  { id: 'photo-1448932223592-d1fc686e76ea', title: 'Minimalist Home', category: 'architecture' },
  { id: 'photo-1486406146926-c627a92ad1ab', title: 'Industrial Design', category: 'architecture' },
  { id: 'photo-1520637836862-4d197d17c11b', title: 'Gothic Cathedral', category: 'architecture' },
  { id: 'photo-1487958449943-2429e8be8625', title: 'Modern Museum', category: 'architecture' },
  { id: 'photo-1565182999561-18d7dc61c393', title: 'Art Deco Building', category: 'architecture' },
  { id: 'photo-1507003211169-0a1dd7228f2e', title: 'Spiral Staircase', category: 'architecture' },
  { id: 'photo-1503387762-592deb58ef4e', title: 'Cathedral Interior', category: 'architecture' },
  { id: 'photo-1513475382585-d06e58bcb0e0', title: 'Contemporary Tower', category: 'architecture' },
  
  // Portrait images
  { id: 'photo-1472099645785-5658abf4ff4e', title: 'Business Portrait', category: 'portrait' },
  { id: 'photo-1544005313-94ddf0286df2', title: 'Fashion Model', category: 'portrait' },
  { id: 'photo-1507003211169-0a1dd7228f2f', title: 'Senior Portrait', category: 'portrait' },
  { id: 'photo-1472099645785-5658abf4ff4f', title: 'Child Portrait', category: 'portrait' },
  { id: 'photo-1507003211169-0a1dd7228f2g', title: 'Couple Portrait', category: 'portrait' },
  { id: 'photo-1472099645785-5658abf4ff4g', title: 'Headshot Studio', category: 'portrait' },
  { id: 'photo-1507003211169-0a1dd7228f2h', title: 'Musician Portrait', category: 'portrait' },
  { id: 'photo-1472099645785-5658abf4ff4h', title: 'Graduate Portrait', category: 'portrait' },
  { id: 'photo-1438761681033-6461ffad8d80', title: 'Creative Portrait', category: 'portrait' },
  { id: 'photo-1463453091185-61582044d556', title: 'Professional Headshot', category: 'portrait' },
  { id: 'photo-1507591064344-4c6ce005b128', title: 'Lifestyle Portrait', category: 'portrait' },
  { id: 'photo-1506794778202-cad84cf45f1d', title: 'Corporate Portrait', category: 'portrait' },
  
  // Travel images
  { id: 'photo-1477959858617-67f85cf4f1dg', title: 'City Night', category: 'travel' },
  { id: 'photo-1488646953014-85cb44e25829', title: 'Local Market', category: 'travel' },
  { id: 'photo-1464207687429-7505649dae39', title: 'Ancient Ruins', category: 'travel' },
  { id: 'photo-1488646953014-85cb44e2582a', title: 'Street Food', category: 'travel' },
  { id: 'photo-1464207687429-7505649dae3a', title: 'Temple Architecture', category: 'travel' },
  { id: 'photo-1477959858617-67f85cf4f1dh', title: 'City Skyline', category: 'travel' },
  { id: 'photo-1488646953014-85cb44e2582b', title: 'Beach Resort', category: 'travel' },
  { id: 'photo-1464207687429-7505649dae3b', title: 'Mountain Village', category: 'travel' },
  { id: 'photo-1488646953014-85cb44e2582c', title: 'Cultural Festival', category: 'travel' },
  { id: 'photo-1464207687429-7505649dae3c', title: 'Historic District', category: 'travel' },
  { id: 'photo-1507525428034-b723cf961d3f', title: 'Coastal Town', category: 'travel' },
  { id: 'photo-1513475382585-d06e58bcb0e1', title: 'Urban Explorer', category: 'travel' },
  
  // Art images
  { id: 'photo-1562887284-0c12b09aa581', title: 'Paint Splash', category: 'art' },
  { id: 'photo-1541961017774-22349e4a1263', title: 'Sculpture Gallery', category: 'art' },
  { id: 'photo-1562887284-0c12b09aa582', title: 'Street Art', category: 'art' },
  { id: 'photo-1541961017774-22349e4a1264', title: 'Abstract Painting', category: 'art' },
  { id: 'photo-1562887284-0c12b09aa583', title: 'Mixed Media', category: 'art' },
  { id: 'photo-1541961017774-22349e4a1265', title: 'Installation Art', category: 'art' },
  { id: 'photo-1562887284-0c12b09aa584', title: 'Digital Art', category: 'art' },
  { id: 'photo-1541961017774-22349e4a1266', title: 'Contemporary Art', category: 'art' },
  { id: 'photo-1562887284-0c12b09aa585', title: 'Graphic Design', category: 'art' },
  { id: 'photo-1558618666-fcd25c85cd64', title: 'Watercolor Art', category: 'art' },
  { id: 'photo-1578662996442-48f60103fc97', title: 'Sculpture Art', category: 'art' },
  { id: 'photo-1594736797933-d0101ba64fb7', title: 'Modern Art', category: 'art' },
];

// Track used images to prevent duplicates
let usedImageIds = new Set<string>();
let imageCounter = 100; // Start counter higher to avoid conflicts

// Function to generate truly unique images
export const generateMoreImages = (currentCount: number, category: string = 'all'): GalleryImage[] => {
  const newImages: GalleryImage[] = [];
  const availableImages = category === 'all' ? uniqueImagePool : uniqueImagePool.filter(img => img.category === category);
  
  // Reset used images if we've exhausted the pool
  const unusedImages = availableImages.filter(img => !usedImageIds.has(img.id));
  if (unusedImages.length < 6) {
    usedImageIds.clear();
  }
  
  const imagesToUse = unusedImages.length >= 6 ? unusedImages : availableImages;
  
  // Shuffle array to get random selection
  const shuffled = [...imagesToUse].sort(() => 0.5 - Math.random());
  
  for (let i = 0; i < Math.min(6, shuffled.length); i++) {
    const template = shuffled[i];
    usedImageIds.add(template.id);
    imageCounter++;
    
    newImages.push({
      id: `generated_${imageCounter}_${Date.now()}_${i}`,
      url: `https://images.unsplash.com/${template.id}?w=800&h=800&fit=crop&q=80&auto=format&ixlib=rb-4.0.3`,
      title: `${template.title} ${imageCounter}`,
      category: template.category,
      description: `Professional ${template.category} photography showcasing ${template.title.toLowerCase()}`
    });
  }
  
  return newImages;
};
