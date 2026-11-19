export interface SocialLinkItem {
  id: 'spotify' | 'instagram' | 'youtube' | 'facebook' | 'gmail';
  label: string;
  handle: string;
  url: string;
  actionLabel: string;
}

export interface MusicRelease {
  id: string;
  title: string;
  genre: 'Future Bass' | 'Atmospheric' | 'Hardstyle' | 'Cinematic EDM';
  year: string;
  duration: string;
  platformSummary: string;
  spotifyUrl: string;
  youtubeUrl: string;
  artworkUrl: string;
  notes: string;
}

export interface YouTubeHighlight {
  id: string;
  title: string;
  format: string;
  duration: string;
  summary: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface DevelopedAppSlot {
  id: string;
  slotNumber: string;
  appName: string;
  websiteUrl: string;
  description: string;
  category: string;
  isPopulated: boolean;
  tagline?: string;
  about?: string[];
  highlights?: Array<{title: string; detail: string}>;
  appInfo?: Array<{label: string; value: string}>;
  designNote?: string;
  installationSteps?: string[];
  updatesNote?: string;
  projectStatus?: string;
  disclaimer?: string;
  features?: Array<{title: string; summary: string; points: string[]}>;
  privacyNote?: string;
  privacyExcluded?: string[];
}

export interface ArtistPortfolioData {
  name: string;
  roleLine: string;
  headline: string;
  subheadline: string;
  visionQuote: string;
  heroImageUrl: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  bioParagraphs: string[];
  genres: string[];
  influences: string[];
  socialLinks: SocialLinkItem[];
  releases: MusicRelease[];
  youtubeChannel: {
    channelName: string;
    handle: string;
    featuredUrl: string;
    channelUrl: string;
    bannerUrl: string;
    description: string;
    highlights: YouTubeHighlight[];
  };
  developedApps: DevelopedAppSlot[];
}

export const PORTFOLIO_DATA: ArtistPortfolioData = {
  name: 'Videsh Karmakar',
  roleLine: 'Bedroom Producer · Futuristic EDM',
  headline: 'Beyond The Music — A Vision of the Future',
  subheadline:
    'Creating emotionally driven, high-energy electronic music and independent software from a focused bedroom studio.',
  visionQuote: '“Beyond The Music” — A Vision of the Future',
  heroImageUrl: 'https://cdn.phototourl.com/member/2026-11-17-5a49e987-e682-44a4-be07-82fb958b4929.png',
  metrics: [
    {value: '8+ Years', label: 'Electronic Production'},
    {value: '6 Genres', label: 'Future Bass to Hardstyle'},
    {value: 'Global', label: 'Spotify & Major Platforms'},
    {value: 'Independent', label: 'Sound Design & Apps'},
  ],
  bioParagraphs: [
    'Videsh Karmakar is a bedroom electronic music producer creating emotionally driven, high-energy electronic music for the future. With over 8 years of experience, he blends cinematic atmospheres, uplifting melodies, heavy drops, and modern sound design to craft music that connects emotion with energy.',
    'Inspired by global artists like Marshmello, San Holo, Illenium, Hardwell, Martin Garrix, Alan Walker, David Guetta, and Nicky Romero, his sound spans Future Bass, Progressive House, Festival EDM, Hardstyle, Dubstep, and Lo-Fi, delivering a dynamic and futuristic listening experience.',
    'Driven by passion, consistency, and innovation, Videsh aims to push boundaries and create Next-Generation Electronic Music that feels immersive, hopeful, and ahead of its time. Available on YouTube, Spotify, and all major streaming platforms.',
  ],
  genres: [
    'Future Bass',
    'Progressive House',
    'Festival EDM',
    'Hardstyle',
    'Dubstep',
    'Lo-Fi',
  ],
  influences: [
    'Marshmello',
    'San Holo',
    'Illenium',
    'Hardwell',
    'Martin Garrix',
    'Alan Walker',
    'David Guetta',
    'Nicky Romero',
  ],
  socialLinks: [
    {
      id: 'spotify',
      label: 'Spotify',
      handle: 'Videsh Karmakar',
      url: 'https://open.spotify.com/artist/2eJEzi0mzJB60zVJf0OjWP',
      actionLabel: 'Open Artist Profile',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      handle: '@videshkarmakar2000',
      url: 'https://www.youtube.com/@videshkarmakar2000',
      actionLabel: 'Visit Channel',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@code.red_videsh',
      url: 'https://www.instagram.com/code.red_videsh/',
      actionLabel: 'Follow Updates',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'gfx.videsh',
      url: 'https://www.facebook.com/gfx.videsh',
      actionLabel: 'Connect Page',
    },
    {
      id: 'gmail',
      label: 'Gmail',
      handle: 'videshkarmakar@gmail.com',
      url: 'mailto:videshkarmakar@gmail.com',
      actionLabel: 'Send Email',
    },
  ],
  releases: [
    {
      id: 'chok-vanga',
      title: 'Chok Vanga',
      genre: 'Future Bass',
      year: '2024',
      duration: '03:28',
      platformSummary: 'Spotify · YouTube · Streaming',
      spotifyUrl: 'https://open.spotify.com/artist/2eJEzi0mzJB60zVJf0OjWP',
      youtubeUrl: 'https://www.youtube.com/@videshkarmakar2000',
      artworkUrl: '/src/assets/images/release_chok_vanga_1794801498867.jpg',
      notes:
        'Emotionally layered synth chords paired with wide future bass textures and crisp modern percussion.',
    },
    {
      id: 'mayabono-biharini',
      title: 'Mayabono Biharini',
      genre: 'Atmospheric',
      year: '2024',
      duration: '03:45',
      platformSummary: 'Spotify · Apple Music · Streaming',
      spotifyUrl: 'https://open.spotify.com/artist/2eJEzi0mzJB60zVJf0OjWP',
      youtubeUrl: 'https://www.youtube.com/@videshkarmakar2000',
      artworkUrl: '/src/assets/images/release_mayabono_biharini_1794801498792.jpg',
      notes:
        'A serene melodic reinterpretation bridging nostalgic phrasing with cinematic atmospheric pads.',
    },
    {
      id: 'hardstyle-nation',
      title: 'Hardstyle Nation',
      genre: 'Hardstyle',
      year: '2025',
      duration: '03:16',
      platformSummary: 'YouTube · Spotify · Festival EDM',
      spotifyUrl: 'https://open.spotify.com/artist/2eJEzi0mzJB60zVJf0OjWP',
      youtubeUrl: 'https://www.youtube.com/@videshkarmakar2000/featured',
      artworkUrl: '/src/assets/images/release_hardstyle_nation_1794801498867.jpg',
      notes:
        'High-energy festival drive anchored by punchy reverse basslines, euphoric lead stacks, and intense risers.',
    },
    {
      id: 'chupi-yaadein',
      title: 'Chupi Yaadein',
      genre: 'Future Bass',
      year: '2024',
      duration: '03:12',
      platformSummary: 'Spotify · JioSaavn · Streaming',
      spotifyUrl: 'https://open.spotify.com/artist/2eJEzi0mzJB60zVJf0OjWP',
      youtubeUrl: 'https://www.youtube.com/@videshkarmakar2000',
      artworkUrl: '/src/assets/images/release_mayabono_biharini_1794801498792.jpg',
      notes:
        'Warm harmonic progressions and intimate Lo-Fi ambient motifs building into an uplifting drop.',
    },
    {
      id: 'shiv-tandav-stotram',
      title: 'Shiv Tandav Stotram (Electronic Production)',
      genre: 'Cinematic EDM',
      year: '2025',
      duration: '04:04',
      platformSummary: 'YouTube Featured · Sound Design',
      spotifyUrl: 'https://open.spotify.com/artist/2eJEzi0mzJB60zVJf0OjWP',
      youtubeUrl: 'https://www.youtube.com/@videshkarmakar2000/featured',
      artworkUrl: '/src/assets/images/release_chok_vanga_1794801498867.jpg',
      notes:
        'Orchestral brass, cinematic sub-impacts, and modern festival sound design arranged around timeless rhythmic intensity.',
    },
  ],
  youtubeChannel: {
    channelName: 'Videsh Karmakar',
    handle: '@videshkarmakar2000',
    featuredUrl: 'https://www.youtube.com/@videshkarmakar2000/featured',
    channelUrl: 'https://www.youtube.com/@videshkarmakar2000',
    bannerUrl: 'https://cdn.phototourl.com/member/2026-10-01-d12854f8-ed32-4b58-b930-25a10f591762.jpg',
    description:
      'Official YouTube channel featuring original electronic tracks, festival-energy productions, remixes, and modern sound design showcases.',
    highlights: [
      {
        id: 'yt-featured-channel',
        title: 'Featured Channel Showcase',
        format: 'Official Channel Home',
        duration: 'Updated Regularly',
        summary:
          'Explore the complete featured collection of original electronic releases, visualizers, and sound design projects on @videshkarmakar2000.',
        videoUrl: 'https://www.youtube.com/@videshkarmakar2000/featured',
        thumbnailUrl: 'https://cdn.phototourl.com/member/2026-10-01-d12854f8-ed32-4b58-b930-25a10f591762.jpg',
      },
      {
        id: 'yt-hardstyle',
        title: 'Hardstyle Nation — Electronic Production',
        format: 'Music Video & Visualizer',
        duration: '03:16',
        summary:
          'Festival-grade hardstyle production blending euphoric lead melodies with heavy modern percussion.',
        videoUrl: 'https://www.youtube.com/@videshkarmakar2000/videos',
        thumbnailUrl: '/src/assets/images/release_hardstyle_nation_1794801498867.jpg',
      },
      {
        id: 'yt-shiv-tandav',
        title: 'Shiv Tandav Stotram — Futuristic Remix',
        format: 'Cinematic Electronic',
        duration: '04:04',
        summary:
          'Deep atmospheric synthesis paired with high-impact electronic drops and cinematic staging.',
        videoUrl: 'https://www.youtube.com/@videshkarmakar2000/videos',
        thumbnailUrl: '/src/assets/images/release_chok_vanga_1794801498867.jpg',
      },
    ],
  },
  developedApps: [
    {
      id: 'app-slot-01',
      slotNumber: '01',
      appName: 'DOOM Music',
      websiteUrl: 'https://doom-music.vercel.app/',
      tagline: 'Music Without Limits',
      description:
        'DOOM is a lightweight, modern music streaming application designed to deliver a premium music-listening experience without demanding powerful hardware. An excellent alternative to Spotify Premium and YouTube Music Premium, DOOM focuses on performance, simplicity, and accessibility — making music streaming enjoyable even on low-end devices.',
      category: 'Web · Music Streaming',
      isPopulated: true,
      about: [
        'DOOM is a lightweight, modern music streaming application designed to deliver a premium music-listening experience without demanding powerful hardware.',
        'An excellent alternative to Spotify Premium and YouTube Music Premium, DOOM focuses on performance, simplicity, and accessibility — making music streaming enjoyable even on low-end devices.',
        "Our mission is simple: Make premium music streaming accessible to everyone, regardless of their device's hardware capabilities. DOOM isn't just another music player — it's an attempt to redefine lightweight music streaming with a focus on speed, simplicity, and user experience.",
        '"Premium music experience. Minimal resource consumption. No hardware limitations."',
        'DOOM — Feel the Music. Not the Hardware.',
      ],
      highlights: [
        {title: 'Premium Music Experience', detail: 'Enjoy a smooth and immersive music-listening experience.'},
        {title: 'Lightweight & Fast', detail: 'Optimized for low-end devices with limited hardware resources.'},
        {title: 'Low-End Device Friendly', detail: 'Designed to run smoothly without consuming excessive system resources.'},
        {title: 'Modern UI', detail: 'Clean, intuitive, and visually appealing interface.'},
        {title: 'Performance Optimized', detail: 'Focused on efficient resource usage and responsive navigation.'},
        {title: 'Music Discovery', detail: 'Explore and enjoy your favorite music in one place.'},
        {title: 'Accessible Experience', detail: 'Aiming to make premium-style music streaming accessible to everyone.'},
      ],
      appInfo: [
        {label: 'Application', value: 'DOOM Music'},
        {label: 'Platform', value: 'Web'},
        {label: 'Developer', value: 'Videsh Karmakar'},
        {label: 'UI/UX Design', value: 'Figma & Stitch'},
      ],
      designNote:
        'DOOM is built around the idea of combining thoughtful product design with lightweight performance to deliver a premium music experience to everyone.',
      projectStatus:
        'DOOM is an evolving project. More improvements, refinements, and updates may arrive in future releases.',
    },
    {
      id: 'app-slot-02',
      slotNumber: '02',
      appName: 'Loop',
      websiteUrl: 'https://loopfile.ai.studio/',
      tagline: 'Download Everything. From Everywhere.',
      description:
        'Loop is an all-in-one, multi-platform content downloader designed to make downloading media from popular social and entertainment platforms simple and convenient.',
      category: 'Android · Media Utility',
      isPopulated: true,
      about: [
        'Download content from platforms like Facebook, Instagram, YouTube, and many more — all through one unified application. Built to bring multiple platforms together in a clean, simple, and user-friendly downloading experience.',
        'Instead of switching between different downloader websites or applications, Loop brings multi-platform downloading capabilities together in one convenient place. Simple. Universal. Convenient.',
      ],
      highlights: [
        {
          title: 'Multi-Platform Support',
          detail:
            'Download supported content from Facebook, Instagram, YouTube, and many more platforms.',
        },
        {
          title: 'All-in-One Downloader',
          detail:
            'Access multiple platform download capabilities in one application.',
        },
        {
          title: 'Video Downloading',
          detail: 'Save supported online videos to your device.',
        },
        {
          title: 'Audio Downloading',
          detail: 'Download audio where supported.',
        },
        {
          title: 'Simple Experience',
          detail: 'An intuitive interface designed for easy navigation.',
        },
        {
          title: 'Fast & Convenient',
          detail: 'A streamlined downloading process with minimal steps.',
        },
        {
          title: 'Modern Design',
          detail: 'A clean interface focused on usability and accessibility.',
        },
        {
          title: 'Growing Platform Support',
          detail:
            'More supported platforms and improvements may arrive in future releases.',
        },
      ],
      appInfo: [
        {label: 'Application', value: 'Loop'},
        {label: 'Version', value: '1.0.0.0'},
        {label: 'Build', value: '100'},
        {label: 'Platform', value: 'Android'},
        {label: 'iOS', value: 'Coming Soon'},
        {label: 'Developer', value: 'Videsh Karmakar'},
        {label: 'UI/UX Design', value: 'Figma & Stitch'},
      ],
      designNote:
        'Loop is built around the idea of bringing multiple content platforms into one convenient downloading experience, combining thoughtful product design, accessibility, and simplicity.',
      installationSteps: [
        "Visit the project's GitHub repository.",
        'Open the Releases section.',
        'Download the latest available Android release.',
        'Install the APK on your compatible Android device.',
      ],
      updatesNote:
        "Visit the repository's Releases section to discover new versions, feature improvements, bug fixes, and other updates.",
      projectStatus:
        'Loop is an evolving project. New features, platform integrations, performance improvements, and refinements may arrive in future releases.',
      disclaimer:
        'Loop is an independent third-party application and is not affiliated with, endorsed by, or officially connected to Facebook, Instagram, YouTube, or any other supported platform. Users are responsible for respecting the copyright, terms of service, and applicable policies of the platforms and content owners. Download only content you own or have permission to download.',
    },
    {
      id: 'app-slot-03',
      slotNumber: '03',
      appName: 'Naihati Nights',
      websiteUrl: 'https://naihatinights.pages.dev/',
      tagline: 'Explore the Lights. Discover the Pandals. Experience Naihati.',
      description:
        'Naihati Nights is a dedicated travel and navigation guide designed to make exploring Naihati Kali Puja pandals easier, smarter, and more enjoyable.',
      category: 'Android · Travel & Navigation',
      isPopulated: true,
      about: [
        'The app helps visitors discover popular Kali Puja pandals, explore different locations, and navigate between destinations with convenient route and map guidance. Built to make your Naihati Kali Puja experience more organized, accessible, and memorable.',
        "Whether you're a local resident or visiting Naihati to experience its famous Kali Puja celebrations, the app helps you discover pandals and plan your journey with ease. Discover. Navigate. Celebrate.",
      ],
      highlights: [
        {
          title: 'Pandal Discovery',
          detail:
            'Explore popular Naihati Kali Puja pandals and discover festive destinations.',
        },
        {
          title: 'Route Navigation',
          detail: 'Find convenient routes to reach your selected pandal.',
        },
        {
          title: 'Google Maps Integration',
          detail: 'Navigate to destinations with Google Maps guidance.',
        },
        {
          title: 'Travel Planning',
          detail:
            'Make your pandal-hopping journey easier with location-based guidance.',
        },
        {
          title: 'Explore Naihati',
          detail:
            "Discover different areas and experience the city's Kali Puja celebrations.",
        },
        {
          title: 'User-Friendly Design',
          detail: 'A clean and simple interface for a smooth experience.',
        },
        {
          title: 'Convenient Exploration',
          detail: 'Spend less time searching and more time celebrating.',
        },
      ],
      appInfo: [
        {label: 'Application', value: 'Naihati Nights'},
        {label: 'Version', value: '1.0.0'},
        {label: 'Build', value: '100'},
        {label: 'Platform', value: 'Android'},
        {label: 'iOS', value: 'Coming Soon'},
        {label: 'Developer', value: 'Videsh Karmakar'},
        {label: 'UI/UX Design', value: 'Figma & Stitch'},
      ],
      designNote:
        'Naihati Nights is built around the idea of combining convenient navigation, thoughtful design, and location-based discovery to create a better Kali Puja travelling experience.',
      installationSteps: [
        "Visit the project's GitHub repository.",
        'Open the Releases section.',
        'Download the latest available Android release.',
        'Install the APK on your compatible Android device.',
      ],
      updatesNote:
        'Check the GitHub Releases section for the latest versions, new features, improvements, and bug fixes.',
      projectStatus:
        'Naihati Nights is an evolving project dedicated to making Naihati Kali Puja exploration easier and more accessible. More features, improvements, and refinements may arrive in future releases.',
    },
    {
      id: 'app-slot-04',
      slotNumber: '04',
      appName: 'শারদ ভ্রমণ',
      websiteUrl: 'https://pujavromon.vercel.app/',
      tagline: 'Explore More. Plan Better. Celebrate Sharad.',
      description:
        "শারদ ভ্রমণ is a dedicated Kolkata Durga Puja Pandal Hopping & Navigation Guide, designed to make exploring the city's Durga Puja pandals easier, smarter, and more organized.",
      category: 'Android · Travel & Navigation',
      isPopulated: true,
      about: [
        'Discover Puja pandals, explore Metro and Railway Station-based destinations, plan North & South Kolkata routes, find nearby essential facilities, and navigate your selected locations with Google Maps. From traditional Bonedi Bari Puja to creative Theme Puja and destinations in Kalyani, everything comes together in one convenient guide.',
        'Instead of searching for individual pandal locations, the app organizes destinations into dedicated sections, helping you discover places and plan your pandal-hopping journey more conveniently. Simple. Organized. Location-Focused.',
      ],
      highlights: [
        {
          title: 'Metro Station-Wise Guide',
          detail: 'Discover pandals based on nearby Metro Stations.',
        },
        {
          title: 'Train Station-Wise Guide',
          detail: 'Explore Puja destinations around Railway Stations.',
        },
        {
          title: 'North & South Kolkata',
          detail: 'Dedicated pandal collections across North and South Kolkata.',
        },
        {
          title: 'Google Maps Integration',
          detail: 'Open destinations and get navigation through Google Maps.',
        },
        {
          title: 'Nearby Facilities',
          detail:
            'Find nearby toilets and restaurants around supported pandal areas.',
        },
        {
          title: 'Bonedi Bari, Theme & Kalyani Puja',
          detail:
            "Explore traditional household celebrations, creative themed pandals, and Kalyani destinations.",
        },
        {
          title: 'Privacy Friendly',
          detail: 'No unnecessary phone permissions required.',
        },
      ],
      features: [
        {
          title: 'Metro Station-Wise Pandal Guide',
          summary: 'Explore Durga Puja pandals organized by nearby Metro Stations.',
          points: [
            'Browse pandals based on selected Metro Stations',
            'Plan convenient Metro-based pandal-hopping routes',
            'Open individual destinations in Google Maps',
          ],
        },
        {
          title: 'Train Station-Wise Pandal Guide',
          summary: 'Find Puja destinations based on nearby Railway Stations.',
          points: [
            'Discover destinations based on your arrival station',
            'Navigate to selected locations using Google Maps',
            'Built for visitors travelling by train',
          ],
        },
        {
          title: 'North & South Kolkata Guides',
          summary: 'Dedicated regional collections for streamlined route planning.',
          points: [
            'Organized North and South Kolkata pandal listings',
            'Individual destination details with Maps guidance',
          ],
        },
        {
          title: 'Nearby Toilets & Restaurants',
          summary: 'Locate essential facilities around supported pandal areas.',
          points: [
            'Identify nearby toilet facilities and dining spots',
            'Open selected facilities directly for navigation',
          ],
        },
        {
          title: 'Bonedi Bari, Theme & Kalyani Puja',
          summary: 'Curated cultural and artistic Puja collections.',
          points: [
            'Traditional Bonedi Bari heritage celebrations',
            'Distinctive Theme Puja presentations',
            'Dedicated Kalyani Puja listings with Maps support',
          ],
        },
        {
          title: 'Google Maps Integration',
          summary: 'Seamless destination discovery paired with turn-by-turn navigation.',
          points: [
            'View selected locations and open directly in Google Maps',
            'Plan multi-stop journeys across pandals and facilities',
          ],
        },
      ],
      privacyNote:
        'Designed with privacy and simplicity in mind. Users can open supported destinations through Google Maps without granting unnecessary device permissions.',
      privacyExcluded: [
        'Contacts',
        'Phone Calls',
        'SMS',
        'Camera',
        'Microphone',
        'Photos or Media',
        'Device Files',
        'Device Sensors',
      ],
      appInfo: [
        {label: 'Application', value: 'শারদ ভ্রমণ'},
        {label: 'Category', value: 'Travel & Navigation'},
        {label: 'Platform', value: 'Android'},
        {label: 'Navigation', value: 'Google Maps'},
        {label: 'Developer', value: 'Videsh Karmakar'},
        {label: 'UI/UX Design', value: 'Figma & Stitch'},
      ],
      designNote:
        'শারদ ভ্রমণ is built around the idea of combining organized destination discovery, practical travel planning, and map-based navigation to create a better Durga Puja exploration experience.',
      installationSteps: [
        "Visit the project's GitHub repository.",
        'Open the Releases section.',
        'Download the latest available Android release.',
        'Install the APK on your compatible Android device.',
      ],
      updatesNote:
        'Visit the GitHub Releases section for new app versions, updated Puja destination listings, improved navigation, and bug fixes.',
      projectStatus:
        'শারদ ভ্রমণ is an evolving project. Features, destination information, and improvements may be introduced in future releases.',
    },
    {
      id: 'app-slot-05',
      slotNumber: '05',
      appName: 'V-Tune 3.0',
      websiteUrl: 'https://vtune3.ai.studio/',
      tagline: 'Music Without Limits. Built for Everyone.',
      description:
        'V-Tune 3.0 is a lightweight music streaming alternative to Spotify and YouTube Music, specially designed for low-end devices. It focuses on simplicity, performance, and an effortless listening experience without unnecessary complexity.',
      category: 'Android · Music Streaming',
      isPopulated: true,
      about: [
        'V-Tune 3.0 aims to deliver a modern music experience while keeping performance and accessibility at its core.',
        "Whether you're using a high-end smartphone or a budget device, V-Tune focuses on providing a clean, lightweight, and responsive experience. Simple. Lightweight. Smooth.",
      ],
      highlights: [
        {
          title: 'Music Experience',
          detail: 'An alternative to Spotify and YouTube Music.',
        },
        {
          title: 'Lightweight Performance',
          detail: 'Specially designed for low-end devices.',
        },
        {
          title: 'Device Friendly',
          detail: 'Focused on smooth performance across Android devices.',
        },
        {
          title: 'Modern Design',
          detail: 'Clean interface with a user-friendly experience.',
        },
        {
          title: 'Accessible Experience',
          detail: 'Designed to make music listening simple and convenient.',
        },
      ],
      appInfo: [
        {label: 'Application', value: 'V-Tune 3.0'},
        {label: 'Version', value: '1.0.0'},
        {label: 'Build', value: '100'},
        {label: 'Platform', value: 'Android'},
        {label: 'iOS', value: 'Coming Soon'},
        {label: 'Developer', value: 'Videsh Karmakar'},
        {label: 'UI/UX Design', value: 'Figma & Stitch'},
      ],
      designNote:
        'V-Tune is built around the idea of combining thoughtful product design with lightweight performance to create a better music experience.',
      installationSteps: [
        "Visit the project's GitHub repository.",
        'Open the Releases section.',
        'Download the latest available Android release.',
        'Install the APK on your compatible Android device.',
      ],
      updatesNote:
        'Check the GitHub Releases section for new versions, improvements, and updates.',
      projectStatus:
        'V-Tune 3.0 is an evolving project. More improvements, refinements, and updates may arrive in future releases.',
    }
  ]
};
