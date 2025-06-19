
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

// Curated collection of 24 high-quality, reliable images
export const galleryImages: GalleryImage[] = [
  // Nature (6 images)
  {
    id: 'nature_1',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop&q=80',
    title: 'Mountain Vista',
    category: 'nature',
    description: 'Majestic mountain landscape at sunrise'
  },
  {
    id: 'nature_2',
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=600&fit=crop&q=80',
    title: 'Ocean Waves',
    category: 'nature',
    description: 'Powerful ocean waves crashing on shore'
  },
  {
    id: 'nature_3',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop&q=80',
    title: 'Forest Trail',
    category: 'nature',
    description: 'Peaceful forest path through tall trees'
  },
  {
    id: 'nature_4',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop&q=80',
    title: 'Sunset Beach',
    category: 'nature',
    description: 'Golden sunset over pristine beach'
  },
  {
    id: 'nature_5',
    url: 'https://images.unsplash.com/photo-1464822759844-d150b88fadc1?w=600&h=600&fit=crop&q=80',
    title: 'Alpine Peak',
    category: 'nature',
    description: 'Snow-capped mountain peak'
  },
  {
    id: 'nature_6',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&q=80',
    title: 'Lake Reflection',
    category: 'nature',
    description: 'Perfect mountain reflection in calm lake'
  },

  // Architecture (5 images)
  {
    id: 'arch_1',
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=600&fit=crop&q=80',
    title: 'Modern Facade',
    category: 'architecture',
    description: 'Contemporary glass building exterior'
  },
  {
    id: 'arch_2',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop&q=80',
    title: 'Urban Geometry',
    category: 'architecture',
    description: 'Geometric patterns in city buildings'
  },
  {
    id: 'arch_3',
    url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=600&fit=crop&q=80',
    title: 'Industrial Design',
    category: 'architecture',
    description: 'Modern industrial architecture'
  },
  {
    id: 'arch_4',
    url: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=600&h=600&fit=crop&q=80',
    title: 'Opera House',
    category: 'architecture',
    description: 'Iconic architectural landmark'
  },
  {
    id: 'arch_5',
    url: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&h=600&fit=crop&q=80',
    title: 'Gothic Cathedral',
    category: 'architecture',
    description: 'Historic gothic architecture details'
  },

  // Portrait (4 images)
  {
    id: 'port_1',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&q=80',
    title: 'Professional Portrait',
    category: 'portrait',
    description: 'Studio portrait with natural lighting'
  },
  {
    id: 'port_2',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&q=80',
    title: 'Fashion Portrait',
    category: 'portrait',
    description: 'Editorial fashion photography'
  },
  {
    id: 'port_3',
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&q=80',
    title: 'Natural Portrait',
    category: 'portrait',
    description: 'Candid outdoor portrait session'
  },
  {
    id: 'port_4',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop&q=80',
    title: 'Business Headshot',
    category: 'portrait',
    description: 'Professional business photography'
  },

  // Travel (5 images)
  {
    id: 'travel_1',
    url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop&q=80',
    title: 'City Streets',
    category: 'travel',
    description: 'Urban street photography adventure'
  },
  {
    id: 'travel_2',
    url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=600&fit=crop&q=80',
    title: 'Mountain Adventure',
    category: 'travel',
    description: 'Hiking and outdoor exploration'
  },
  {
    id: 'travel_3',
    url: 'https://images.unsplash.com/photo-1539650116574-75c0c6d05be9?w=600&h=600&fit=crop&q=80',
    title: 'Ancient Ruins',
    category: 'travel',
    description: 'Historical site exploration'
  },
  {
    id: 'travel_4',
    url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop&q=80',
    title: 'Coastal Town',
    category: 'travel',
    description: 'Charming seaside destination'
  },
  {
    id: 'travel_5',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop&q=80',
    title: 'Desert Landscape',
    category: 'travel',
    description: 'Epic desert adventure journey'
  },

  // Art (4 images)
  {
    id: 'art_1',
    url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop&q=80',
    title: 'Abstract Expression',
    category: 'art',
    description: 'Vibrant abstract digital artwork'
  },
  {
    id: 'art_2',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&q=80',
    title: 'Watercolor Art',
    category: 'art',
    description: 'Delicate watercolor painting technique'
  },
  {
    id: 'art_3',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&q=80',
    title: 'Sculpture Detail',
    category: 'art',
    description: 'Contemporary sculpture artwork'
  },
  {
    id: 'art_4',
    url: 'https://images.unsplash.com/photo-1594736797933-d0101ba64fb7?w=600&h=600&fit=crop&q=80',
    title: 'Modern Canvas',
    category: 'art',
    description: 'Contemporary mixed media artwork'
  }
];

// High-quality backup images for load more functionality
const reliableImagePool = [
  // Additional nature images
  { category: 'nature', unsplashId: 'photo-1419242902214-272b3f66ee7a', title: 'Starry Night Sky' },
  { category: 'nature', unsplashId: 'photo-1449824913935-59a10b8d2000', title: 'Tropical Paradise' },
  { category: 'nature', unsplashId: 'photo-1502134249126-9f3755a50d78', title: 'Grand Canyon' },
  
  // Additional architecture images
  { category: 'architecture', unsplashId: 'photo-1503387762-592deb58ef4e', title: 'Modern Museum' },
  { category: 'architecture', unsplashId: 'photo-1473177104440-ffee2f376098', title: 'Spiral Staircase' },
  
  // Additional portrait images
  { category: 'portrait', unsplashId: 'photo-1463453091185-61582044d556', title: 'Child Portrait' },
  { category: 'portrait', unsplashId: 'photo-1507591064344-4c6ce005b128', title: 'Couple Portrait' },
  
  // Additional travel images
  { category: 'travel', unsplashId: 'photo-1476514525535-07fb3b4ae5f1', title: 'Lake Adventure' },
  { category: 'travel', unsplashId: 'photo-1500534314209-a25ddb2bd429', title: 'City Skyline' },
  
  // Additional art images
  { category: 'art', unsplashId: 'photo-1562887284-0c12b09aa581', title: 'Paint Splash' },
  { category: 'art', unsplashId: 'photo-1551732351-6e4a64149817', title: 'Gallery Wall' }
];

let imageCounter = 100;
let usedPoolIndices = new Set<number>();

export const generateMoreImages = (currentCount: number, category: string = 'all'): GalleryImage[] => {
  const newImages: GalleryImage[] = [];
  const availableImages = category === 'all' 
    ? reliableImagePool 
    : reliableImagePool.filter(img => img.category === category);
  
  // Reset used indices if we've used most of them
  if (usedPoolIndices.size >= availableImages.length - 2) {
    usedPoolIndices.clear();
  }
  
  // Get unused images
  const unusedImages = availableImages.filter((_, index) => !usedPoolIndices.has(index));
  const imagesToGenerate = Math.min(6, unusedImages.length);
  
  for (let i = 0; i < imagesToGenerate; i++) {
    const randomIndex = Math.floor(Math.random() * unusedImages.length);
    const template = unusedImages[randomIndex];
    const poolIndex = availableImages.indexOf(template);
    
    usedPoolIndices.add(poolIndex);
    imageCounter++;
    
    newImages.push({
      id: `load_more_${imageCounter}_${Date.now()}_${i}`,
      url: `https://images.unsplash.com/${template.unsplashId}?w=600&h=600&fit=crop&q=80`,
      title: `${template.title} ${imageCounter}`,
      category: template.category,
      description: `Professional ${template.category} photography showcasing ${template.title.toLowerCase()}`
    });
    
    // Remove used image from available pool for this generation
    unusedImages.splice(randomIndex, 1);
  }
  
  return newImages;
};
