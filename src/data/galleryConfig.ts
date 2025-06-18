
export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
  tags?: string[];
}

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'nature', label: 'Nature' },
  { id: 'technology', label: 'Technology' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'people', label: 'People' },
  { id: 'abstract', label: 'Abstract' }
];

// Sample gallery images using Unsplash URLs as S3 equivalents
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    title: 'Misty Mountain Peak',
    category: 'nature',
    description: 'A breathtaking view of fog-covered mountain summit at dawn',
    tags: ['landscape', 'mountain', 'fog', 'peaceful']
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80',
    title: 'Ocean Wave',
    category: 'nature',
    description: 'Powerful ocean wave captured at the perfect moment',
    tags: ['ocean', 'wave', 'blue', 'dynamic']
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    title: 'Circuit Board Macro',
    category: 'technology',
    description: 'Detailed macro photography of electronic circuit board',
    tags: ['electronics', 'macro', 'technology', 'green']
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    title: 'Code on Monitor',
    category: 'technology',
    description: 'Java programming code displayed on a monitor screen',
    tags: ['programming', 'code', 'monitor', 'development']
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&q=80',
    title: 'Modern Building',
    category: 'architecture',
    description: 'Low angle view of contemporary gray building architecture',
    tags: ['building', 'architecture', 'modern', 'geometric']
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    title: 'White Concrete Structure',
    category: 'architecture',
    description: 'Minimalist white concrete building with clean lines',
    tags: ['concrete', 'minimalist', 'white', 'clean']
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&q=80',
    title: 'Remote Work',
    category: 'people',
    description: 'Woman working on laptop in comfortable home setting',
    tags: ['work', 'laptop', 'home', 'productivity']
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    title: 'Focused Developer',
    category: 'people',
    description: 'Woman in white shirt concentrating on coding work',
    tags: ['developer', 'coding', 'focus', 'workspace']
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    title: 'Matrix Code',
    category: 'abstract',
    description: 'Digital matrix-style code visualization',
    tags: ['matrix', 'digital', 'code', 'green']
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    title: 'Mountain Vista',
    category: 'nature',
    description: 'Bird\'s eye view of lush green mountain landscape',
    tags: ['mountains', 'aerial', 'green', 'vista']
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80',
    title: 'Colorful Code',
    category: 'technology',
    description: 'Vibrant web development code on computer monitor',
    tags: ['web', 'development', 'colorful', 'programming']
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&q=80',
    title: 'Rocky Mountain Landscape',
    category: 'nature',
    description: 'Dramatic rocky mountain terrain during golden hour',
    tags: ['rocks', 'mountain', 'landscape', 'dramatic']
  }
];

// Easy configuration for updating S3 URLs
export const s3Config = {
  bucketUrl: 'https://your-s3-bucket.s3.amazonaws.com',
  // When you have real S3 URLs, update the galleryImages array above
  // or create a function to fetch from your S3 bucket
};
