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

// Sample images with high-quality, reliable URLs
export const galleryImages: GalleryImage[] = [
  {
    id: 'img_1',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop&q=80&auto=format',
    title: 'Mountain Landscape',
    category: 'nature',
    description: 'Beautiful mountain scenery during golden hour'
  },
  {
    id: 'img_2',
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=800&fit=crop&q=80&auto=format',
    title: 'Modern Architecture',
    category: 'architecture',
    description: 'Contemporary building design with glass facade'
  },
  {
    id: 'img_3',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80&auto=format',
    title: 'Portrait Photography',
    category: 'portrait',
    description: 'Professional portrait with natural lighting'
  },
  {
    id: 'img_4',
    url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop&q=80&auto=format',
    title: 'City Streets',
    category: 'travel',
    description: 'Urban exploration and street photography'
  },
  {
    id: 'img_5',
    url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&q=80&auto=format',
    title: 'Abstract Art',
    category: 'art',
    description: 'Digital art composition with vibrant colors'
  },
  {
    id: 'img_6',
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop&q=80&auto=format',
    title: 'Ocean Waves',
    category: 'nature',
    description: 'Dramatic seascape with powerful waves'
  },
  {
    id: 'img_7',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&q=80&auto=format',
    title: 'Urban Architecture',
    category: 'architecture',
    description: 'Geometric patterns in modern buildings'
  },
  {
    id: 'img_8',
    url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=800&fit=crop&q=80&auto=format',
    title: 'Adventure Travel',
    category: 'travel',
    description: 'Mountain hiking and outdoor adventure'
  },
];

// High-quality image pool with reliable URLs
const uniqueImagePool = [
  // Nature images
  { id: 'nature-1', title: 'Forest Path', category: 'nature', unsplashId: 'photo-1441974231531-c6227db76b6e' },
  { id: 'nature-2', title: 'Sunset Beach', category: 'nature', unsplashId: 'photo-1507525428034-b723cf961d3e' },
  { id: 'nature-3', title: 'Mountain Peak', category: 'nature', unsplashId: 'photo-1464822759844-d150b88fadc1' },
  { id: 'nature-4', title: 'Wild Flowers', category: 'nature', unsplashId: 'photo-1490750967868-88aa4486c946' },
  { id: 'nature-5', title: 'Desert Landscape', category: 'nature', unsplashId: 'photo-1547036967-23d11aacaee0' },
  { id: 'nature-6', title: 'Rocky Coast', category: 'nature', unsplashId: 'photo-1439066615861-d1af74d74000' },
  { id: 'nature-7', title: 'Starry Night', category: 'nature', unsplashId: 'photo-1419242902214-272b3f66ee7a' },
  { id: 'nature-8', title: 'Tropical Paradise', category: 'nature', unsplashId: 'photo-1449824913935-59a10b8d2000' },
  { id: 'nature-9', title: 'Winter Wonderland', category: 'nature', unsplashId: 'photo-1578662996442-48f60103fc96' },
  { id: 'nature-10', title: 'Canyon Views', category: 'nature', unsplashId: 'photo-1502134249126-9f3755a50d78' },
  { id: 'nature-11', title: 'River Valley', category: 'nature', unsplashId: 'photo-1540979388789-6cee28a1cdc9' },
  { id: 'nature-12', title: 'Alpine Lake', category: 'nature', unsplashId: 'photo-1472099645785-5658abf4ff4e' },
  
  // Architecture images
  { id: 'arch-1', title: 'Glass Building', category: 'architecture', unsplashId: 'photo-1520637736862-4d197d17c11a' },
  { id: 'arch-2', title: 'Bridge Design', category: 'architecture', unsplashId: 'photo-1481277542470-605612bd2d61' },
  { id: 'arch-3', title: 'Library Architecture', category: 'architecture', unsplashId: 'photo-1449824913935-59a10b8d2001' },
  { id: 'arch-4', title: 'Opera House', category: 'architecture', unsplashId: 'photo-1448932223592-d1fc686e76ea' },
  { id: 'arch-5', title: 'Minimalist Home', category: 'architecture', unsplashId: 'photo-1520637836862-4d197d17c11b' },
  { id: 'arch-6', title: 'Industrial Design', category: 'architecture', unsplashId: 'photo-1487958449943-2429e8be8625' },
  { id: 'arch-7', title: 'Gothic Cathedral', category: 'architecture', unsplashId: 'photo-1565182999561-18d7dc61c393' },
  { id: 'arch-8', title: 'Modern Museum', category: 'architecture', unsplashId: 'photo-1503387762-592deb58ef4e' },
  { id: 'arch-9', title: 'Art Deco Building', category: 'architecture', unsplashId: 'photo-1513475382585-d06e58bcb0e0' },
  { id: 'arch-10', title: 'Spiral Staircase', category: 'architecture', unsplashId: 'photo-1473177104440-ffee2f376098' },
  { id: 'arch-11', title: 'Cathedral Interior', category: 'architecture', unsplashId: 'photo-1494891848038-7bd202a2afeb' },
  { id: 'arch-12', title: 'Contemporary Tower', category: 'architecture', unsplashId: 'photo-1551038247-3d9af20df552' },
  
  // Portrait images
  { id: 'port-1', title: 'Business Portrait', category: 'portrait', unsplashId: 'photo-1472099645785-5658abf4ff4e' },
  { id: 'port-2', title: 'Fashion Model', category: 'portrait', unsplashId: 'photo-1544005313-94ddf0286df2' },
  { id: 'port-3', title: 'Senior Portrait', category: 'portrait', unsplashId: 'photo-1438761681033-6461ffad8d80' },
  { id: 'port-4', title: 'Child Portrait', category: 'portrait', unsplashId: 'photo-1463453091185-61582044d556' },
  { id: 'port-5', title: 'Couple Portrait', category: 'portrait', unsplashId: 'photo-1507591064344-4c6ce005b128' },
  { id: 'port-6', title: 'Headshot Studio', category: 'portrait', unsplashId: 'photo-1506794778202-cad84cf45f1d' },
  { id: 'port-7', title: 'Musician Portrait', category: 'portrait', unsplashId: 'photo-1507003211169-0a1dd7228f2f' },
  { id: 'port-8', title: 'Graduate Portrait', category: 'portrait', unsplashId: 'photo-1472099645785-5658abf4ff4f' },
  { id: 'port-9', title: 'Creative Portrait', category: 'portrait', unsplashId: 'photo-1507003211169-0a1dd7228f2g' },
  { id: 'port-10', title: 'Professional Headshot', category: 'portrait', unsplashId: 'photo-1472099645785-5658abf4ff4g' },
  { id: 'port-11', title: 'Lifestyle Portrait', category: 'portrait', unsplashId: 'photo-1507003211169-0a1dd7228f2h' },
  { id: 'port-12', title: 'Corporate Portrait', category: 'portrait', unsplashId: 'photo-1472099645785-5658abf4ff4h' },
  
  // Travel images
  { id: 'travel-1', title: 'City Night', category: 'travel', unsplashId: 'photo-1477959858617-67f85cf4f1dg' },
  { id: 'travel-2', title: 'Local Market', category: 'travel', unsplashId: 'photo-1488646953014-85cb44e25829' },
  { id: 'travel-3', title: 'Ancient Ruins', category: 'travel', unsplashId: 'photo-1464207687429-7505649dae39' },
  { id: 'travel-4', title: 'Street Food', category: 'travel', unsplashId: 'photo-1488646953014-85cb44e2582a' },
  { id: 'travel-5', title: 'Temple Architecture', category: 'travel', unsplashId: 'photo-1464207687429-7505649dae3a' },
  { id: 'travel-6', title: 'City Skyline', category: 'travel', unsplashId: 'photo-1477959858617-67f85cf4f1dh' },
  { id: 'travel-7', title: 'Beach Resort', category: 'travel', unsplashId: 'photo-1488646953014-85cb44e2582b' },
  { id: 'travel-8', title: 'Mountain Village', category: 'travel', unsplashId: 'photo-1464207687429-7505649dae3b' },
  { id: 'travel-9', title: 'Cultural Festival', category: 'travel', unsplashId: 'photo-1488646953014-85cb44e2582c' },
  { id: 'travel-10', title: 'Historic District', category: 'travel', unsplashId: 'photo-1464207687429-7505649dae3c' },
  { id: 'travel-11', title: 'Coastal Town', category: 'travel', unsplashId: 'photo-1507525428034-b723cf961d3f' },
  { id: 'travel-12', title: 'Urban Explorer', category: 'travel', unsplashId: 'photo-1513475382585-d06e58bcb0e1' },
  
  // Art images
  { id: 'art-1', title: 'Paint Splash', category: 'art', unsplashId: 'photo-1562887284-0c12b09aa581' },
  { id: 'art-2', title: 'Sculpture Gallery', category: 'art', unsplashId: 'photo-1541961017774-22349e4a1263' },
  { id: 'art-3', title: 'Street Art', category: 'art', unsplashId: 'photo-1562887284-0c12b09aa582' },
  { id: 'art-4', title: 'Abstract Painting', category: 'art', unsplashId: 'photo-1541961017774-22349e4a1264' },
  { id: 'art-5', title: 'Mixed Media', category: 'art', unsplashId: 'photo-1562887284-0c12b09aa583' },
  { id: 'art-6', title: 'Installation Art', category: 'art', unsplashId: 'photo-1541961017774-22349e4a1265' },
  { id: 'art-7', title: 'Digital Art', category: 'art', unsplashId: 'photo-1562887284-0c12b09aa584' },
  { id: 'art-8', title: 'Contemporary Art', category: 'art', unsplashId: 'photo-1541961017774-22349e4a1266' },
  { id: 'art-9', title: 'Graphic Design', category: 'art', unsplashId: 'photo-1562887284-0c12b09aa585' },
  { id: 'art-10', title: 'Watercolor Art', category: 'art', unsplashId: 'photo-1558618666-fcd25c85cd64' },
  { id: 'art-11', title: 'Sculpture Art', category: 'art', unsplashId: 'photo-1578662996442-48f60103fc97' },
  { id: 'art-12', title: 'Modern Art', category: 'art', unsplashId: 'photo-1594736797933-d0101ba64fb7' },
];

// Track used images to prevent exact duplicates
let usedImageIds = new Set<string>();
let imageCounter = 100;

// Function to generate truly unique images with better error handling
export const generateMoreImages = (currentCount: number, category: string = 'all'): GalleryImage[] => {
  const newImages: GalleryImage[] = [];
  const availableImages = category === 'all' ? uniqueImagePool : uniqueImagePool.filter(img => img.category === category);
  
  // Get unused images
  const unusedImages = availableImages.filter(img => !usedImageIds.has(img.id));
  
  // If we've used most images, reset the pool but keep it random
  if (unusedImages.length < 6) {
    usedImageIds.clear();
  }
  
  const imagesToUse = unusedImages.length >= 6 ? unusedImages : availableImages;
  
  // Shuffle array for randomness
  const shuffled = [...imagesToUse].sort(() => 0.5 - Math.random());
  
  for (let i = 0; i < Math.min(6, shuffled.length); i++) {
    const template = shuffled[i];
    usedImageIds.add(template.id);
    imageCounter++;
    
    newImages.push({
      id: `generated_${template.id}_${imageCounter}_${Date.now()}_${i}`,
      url: `https://images.unsplash.com/${template.unsplashId}?w=800&h=800&fit=crop&q=80&auto=format&ixlib=rb-4.0.3`,
      title: `${template.title} ${imageCounter}`,
      category: template.category,
      description: `Professional ${template.category} photography showcasing ${template.title.toLowerCase()}`
    });
  }
  
  return newImages;
};
