
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

// Function to generate more images (simulating API call)
export const generateMoreImages = (currentCount: number, category: string = 'all'): GalleryImage[] => {
  const imageTemplates = [
    { title: 'Forest Path', category: 'nature', base: 'photo-1441974231531-c6227db76b6e' },
    { title: 'Sunset Beach', category: 'nature', base: 'photo-1507525428034-b723cf961d3e' },
    { title: 'Glass Building', category: 'architecture', base: 'photo-1449824913935-59a10b8d2000' },
    { title: 'Bridge Design', category: 'architecture', base: 'photo-1449824913935-59a10b8d2000' },
    { title: 'Street Portrait', category: 'portrait', base: 'photo-1507003211169-0a1dd7228f2d' },
    { title: 'Business Portrait', category: 'portrait', base: 'photo-1472099645785-5658abf4ff4e' },
    { title: 'City Night', category: 'travel', base: 'photo-1477959858617-67f85cf4f1df' },
    { title: 'Local Market', category: 'travel', base: 'photo-1488646953014-85cb44e25828' },
    { title: 'Digital Creation', category: 'art', base: 'photo-1541961017774-22349e4a1262' },
    { title: 'Paint Splash', category: 'art', base: 'photo-1562887284-0c12b09aa580' },
  ];

  const newImages: GalleryImage[] = [];
  
  for (let i = 0; i < 6; i++) {
    const template = imageTemplates[i % imageTemplates.length];
    const imageId = `generated_${currentCount + i + 1}`;
    
    // Skip if filtering by category and doesn't match
    if (category !== 'all' && template.category !== category) {
      continue;
    }
    
    newImages.push({
      id: imageId,
      url: `https://images.unsplash.com/${template.base}?w=800&h=800&fit=crop&q=80&auto=format&ixlib=rb-4.0.3&random=${Date.now()}_${i}`,
      title: `${template.title} ${currentCount + i + 1}`,
      category: template.category,
      description: `Generated image for ${template.category} category`
    });
  }
  
  return newImages;
};
