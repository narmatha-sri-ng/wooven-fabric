// Data configuration for the Boutique & Fashion Studio Website Template
// Designed for ease of customization and commercial reuse.

export const siteThemes = [
  { id: 'theme-a', name: 'Luxury Boutique', desc: 'Classic Gold & Dark Slate', colors: ['#111111', '#C9A86A', '#FFFFFF'] },
  { id: 'theme-b', name: 'Modern Fashion', desc: 'Warm Mauve & Soft Blush', colors: ['#9b42a7ff', '#F5E6E8', '#FFFFFF'] },
  { id: 'theme-c', name: 'Elegant Boutique', desc: 'Rich Espresso & Warm Almond', colors: ['#5C4033', '#EADBC8', '#FFFFFF'] },
  { id: 'theme-d', name: 'Minimal Fashion', desc: 'Clean Charcoal & Amber Gold', colors: ['#1E1E1E', '#F7F7F7', '#D4AF37'] },
];

export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Collections', path: '/collections' },
  { name: 'Lookbook', path: '/lookbook' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Appointment', path: '/appointment' },
  { name: 'Contact', path: '/contact' }
];

export const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop',
    title: 'Fashion Designed Around Your Style',
    subtitle: 'Explore timeless collections crafted to celebrate confidence, elegance, and individuality.',
    tagline: 'HAUTE COUTURE 2026',
    imageName: 'hero-fashion-01.jpg'
  },
  {
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop',
    title: 'Curated Elegance for Every Occasion',
    subtitle: 'Step into bespoke styles tailormade for life’s most celebrated moments.',
    tagline: 'PREMIUM DESIGNER WEAR',
    imageName: 'hero-fashion-02.jpg'
  }
];

export const featuredCollections = [
  {
    id: 'bridal',
    title: 'Bridal Collection',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800&auto=format&fit=crop',
    tag: 'Bespoke Bridal',
    desc: 'Luxurious silhouettes and intricate details crafted for your unforgettable day.',
    imageName: 'collection-01.jpg'
  },
  {
    id: 'festive',
    title: 'Festive Wear',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    tag: 'Vibrant Celebrations',
    desc: 'Celebrate traditions with contemporary grace and rich, elegant color palettes.',
    imageName: 'collection-02.jpg'
  },
  {
    id: 'saree',
    title: 'Designer Sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    tag: 'Timeless Heritage',
    desc: 'Exquisite handwoven fabrics paired with modern embroidery designs.',
    imageName: 'collection-03.jpg'
  },
  {
    id: 'casual',
    title: 'Casual Wear',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop',
    tag: 'Daily Luxe',
    desc: 'Effortless styles combining absolute comfort with minimal modern aesthetics.',
    imageName: 'collection-04.jpg'
  },
  {
    id: 'kids',
    title: 'Kids Collection',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop',
    tag: 'Young Fashionistas',
    desc: 'Delightful styles and soft, organic premium fabrics for little ones.',
    imageName: 'collection-05.jpg'
  },
  {
    id: 'exclusive',
    title: 'Exclusive Arrivals',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    tag: 'Limited Edition',
    desc: 'Handpicked premium designs released in extremely limited quantities.',
    imageName: 'collection-06.jpg'
  }
];

export const newArrivals = [
  {
    id: 1,
    title: 'Asymmetrical Silk Draped Gown',
    category: 'Bridal Wear',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    tag: 'New'
  },
  {
    id: 2,
    title: 'Metallic Thread Brocade Lehenga',
    category: 'Festive Wear',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=600&auto=format&fit=crop',
    tag: 'Trending'
  },
  {
    id: 3,
    title: 'Organza Saree with Pearl Borders',
    category: 'Designer Sarees',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=600&auto=format&fit=crop',
    tag: 'Bestseller'
  },
  {
    id: 4,
    title: 'Linen Blend Oversized Utility Blazer',
    category: 'Casual Wear',
    price: '$210',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop',
    tag: 'Minimal'
  },
  {
    id: 5,
    title: 'Classic Ivory Lace Ceremony Dress',
    category: 'Kids Collection',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=600&auto=format&fit=crop',
    tag: 'New'
  },
  {
    id: 6,
    title: 'Monochromatic Structured Corset Suit',
    category: 'Exclusive Arrivals',
    price: '$680',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
    tag: 'Exclusive'
  }
];

export const whyChooseUs = [
  {
    title: 'Personal Styling',
    desc: 'Enjoy individual sessions with our fashion consultants to craft your signature look.'
  },
  {
    title: 'Custom Designs',
    desc: 'From initial sketches to final stitches, bring your specific fashion ideas to life.'
  },
  {
    title: 'Premium Fabrics',
    desc: 'We source only the finest silks, linens, organzas, and organic cottons worldwide.'
  },
  {
    title: 'Exclusive Collections',
    desc: 'Gain first access to micro-runs and capsule designs not available anywhere else.'
  },
  {
    title: 'Fashion Expertise',
    desc: 'Over a decade of industry expertise guiding pattern cuts, drapes, and tailoring.'
  },
  {
    title: 'Attention To Detail',
    desc: 'Hand-finished hems, custom buttons, and carefully inspected embroidery work.'
  }
];

export const trendingEditorial = {
  subtitle: 'Season Edit',
  title: 'The Contemporary Nomad',
  desc: 'A gorgeous juxtaposition of structured modern tailoring and lightweight floating drapery. Engineered for the modern tastemaker who values both form and function.',
  quote: 'Fashion is not something that exists in dresses only. Fashion is in the sky, in the street.',
  imageLeft: 'https://images.unsplash.com/photo-1496449903678-c8dd735014ba?q=80&w=800&auto=format&fit=crop',
  imageRight: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=800&auto=format&fit=crop'
};

export const fashionProcessSteps = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Meet our lead designers to share your vision, preferences, measurements, and stylistic goals.'
  },
  {
    step: '02',
    title: 'Design Selection',
    desc: 'Review custom sketches, reference fabrics, color swatches, and choose the direction you love.'
  },
  {
    step: '03',
    title: 'Customization',
    desc: 'Our master tailors draft unique paper patterns tailored specifically to your body measurements.'
  },
  {
    step: '04',
    title: 'Finishing',
    desc: 'Hand-sewn detailing, lining fits, button installations, and rigorous quality checkovers.'
  },
  {
    step: '05',
    title: 'Delivery',
    desc: 'A final custom fitting, secure premium packaging, and delivery directly to your wardrobe.'
  }
];

export const statisticsData = [
  { count: 10, label: 'Years Experience', suffix: '+' },
  { count: 5000, label: 'Happy Customers', suffix: '+' },
  { count: 1000, label: 'Design Collections', suffix: '+' },
  { count: 50, label: 'Fashion Events', suffix: '+' }
];

export const testimonialsList = [
  {
    id: 1,
    name: 'Alexandra K.',
    role: 'Bridal Client',
    rating: 5,
    comment: 'The bridal customization process was absolutely dreamlike. They listened to every tiny request and delivered a masterwork gown.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    imageName: 'testimonial-01.jpg'
  },
  {
    id: 2,
    name: 'Marcus V.',
    role: 'Bespoke Suit Client',
    rating: 5,
    comment: 'Supreme fabric quality and unparalleled tailoring accuracy. Easily outperforms luxury department store brands on every level.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    imageName: 'testimonial-02.jpg'
  },
  {
    id: 3,
    name: 'Priya M.',
    role: 'Ethnic Wear Enthusiast',
    rating: 5,
    comment: 'The designer sarees are timeless pieces of art. The blend of silk and organza feels incredibly premium and drapes like a dream.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    imageName: 'testimonial-03.jpg'
  }
];

export const galleryItems = [
  {
    id: 1,
    category: 'Bridal',
    title: 'The Silk Ceremony',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800&auto=format&fit=crop',
    imageName: 'gallery-01.jpg'
  },
  {
    id: 2,
    category: 'Festive',
    title: 'Jeweled Tones Gala',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    imageName: 'gallery-02.jpg'
  },
  {
    id: 3,
    category: 'Editorial',
    title: 'Structured Shadows',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    imageName: 'gallery-03.jpg'
  },
  {
    id: 4,
    category: 'Minimal',
    title: 'Urban Comfort Edit',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop',
    imageName: 'gallery-04.jpg'
  },
  {
    id: 5,
    category: 'Bridal',
    title: 'Floral Applique Detail',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop',
    imageName: 'gallery-05.jpg'
  },
  {
    id: 6,
    category: 'Editorial',
    title: 'Crimson Velvet Silhouette',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    imageName: 'gallery-06.jpg'
  }
];

export const lookbookLooks = [
  {
    season: 'Autumn / Winter 2026',
    title: 'Chiaroscuro Silhouette',
    subtitle: 'Look 01',
    desc: 'Heavy structured wool coat accompanied by cascading georgette skirts and metallic details.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
  },
  {
    season: 'Autumn / Winter 2026',
    title: 'Gilded Amber Drapes',
    subtitle: 'Look 02',
    desc: 'Rich amber-colored pleated organza shirt layered over structured linen-blend trousers.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    season: 'Spring / Summer 2026',
    title: 'Ethereal Monochromatic',
    subtitle: 'Look 03',
    desc: 'Feather-light mulberry silk gown with hand-sewn glass bead details along the neckline.',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800&auto=format&fit=crop'
  },
  {
    season: 'Spring / Summer 2026',
    title: 'Earthbound Linen Suit',
    subtitle: 'Look 04',
    desc: 'Warm beige double-breasted jacket paired with raw silk trousers for a laid-back corporate vibe.',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop'
  }
];

export const aboutContent = {
  mission: 'To create bespoke fashion experiences that honor tradition while championing sustainable modern craftsmanship.',
  vision: 'To become the premier platform for capsule styles and customizable designer wardrobes globally.',
  philosophy: 'We believe that clothing is a medium of silent self-expression. Every garment we construct is engineered to build confidence and celebrate the unique posture of its wearer.',
  story: 'Founded with a dedication to fine fabrics and slow production lines, our studio has expanded from a local atelier into a modern digital label. Yet, our focus remains unchanged: delivering unparalleled quality for clients who refuse to settle for the average.',
  team: [
    { name: 'Elena Rostova', role: 'Head Designer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop' },
    { name: 'Hiroshi Tanaka', role: 'Master Tailor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop' },
    { name: 'Siddharth Roy', role: 'Embroidery Specialist', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop' }
  ],
  achievements: [
    { year: '2018', title: 'Atelier Founded', desc: 'Opened our doors with just a single tailors bench and five rolls of Italian linen.' },
    { year: '2021', title: 'Sustainable Label Award', desc: 'Honored for our circular supply chain and Zero Waste pattern cutting process.' },
    { year: '2024', title: 'Global Showcase Debut', desc: 'Featured in our first independent runway show focusing on luxury custom wear.' }
  ]
};

export const faqItems = [
  {
    question: 'How do custom measurements work?',
    answer: 'You can book an appointment online, and during the consultation, we take comprehensive measurements. If you are ordering remotely, our stylists will guide you through a video call to capture precise metrics.'
  },
  {
    question: 'What is the average timeline for custom designs?',
    answer: 'Standard custom-tailored apparel requires 3 to 6 weeks, which includes fitting sessions, hand-finishing, and final quality checks.'
  },
  {
    question: 'Can I choose my own fabrics?',
    answer: 'Absolutely. We hold a curated library of premium silks, linens, wools, and organic cottons. You are welcome to browse and select your favorite texture and color during design selection.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we securely package and ship our custom and collection orders worldwide with tracked express carriers.'
  }
];

export const contactInfo = {
  phone: '+1 (800) 456-7890',
  email: 'concierge@fashionstudio.com',
  address: '402 Designer Avenue, Fashion District, NY 10018',
  businessHours: [
    { days: 'Monday - Friday', hours: '10:00 AM - 7:00 PM' },
    { days: 'Saturday', hours: '11:00 AM - 6:00 PM' },
    { days: 'Sunday', hours: 'By Appointment Only' }
  ],
  socials: [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Pinterest', url: 'https://pinterest.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Twitter', url: 'https://twitter.com' }
  ]
};
