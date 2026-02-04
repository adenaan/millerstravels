export const defaultConfig = {
  brandName: "Miller's Travel & Tours",
  tagline: "Umrah packages, tours & hassle-free travel planning",
  heroTitle: "Your journey, handled with care.",
  heroSubtitle: "Explore our latest Umrah packages and multi-country tours. Book with confidence — we’ll guide you from start to finish.",
  contact: {
    address: "200 Wetton Rd, Wetton, Cape Town, 7780",
    email: "abubaker@millerstravels.co.za",
    phonePrimary: "076 799 2661",
    phoneAlt: "064 523 2961",
    instagram: "https://www.instagram.com/millerstravelandtours?utmsource=igwebbuttonshare_sheet&igsh=ZDNlZDc0MzIxNw==",
    facebook: "https://www.facebook.com/Millerstravels?mibextid=ZbWKwL"
  },
  brochureImages: [
    "/assets/brochure-muharram.jpg",
    "/assets/brochure-march.jpg",
    "/assets/brochure-june.jpg"
  ],
  logo: "/assets/logo.jpg"
}

export const defaultPackages = [
  {
    id: "muharram-june-2026",
    type: "Umrah",
    title: "Muharram / June 2026 Holiday Umrah Package",
    departureDate: "2026-06-26",
    returnDate: "2026-07-11",
    heroImage: "/assets/brochure-june.jpg",
    highlights: [
      "7 nights Province Al Sham (B&B)",
      "7 nights in Makkah (B&B)",
      "Multiple hotel options & room types"
    ],
    options: [
      {
        name: "Package 1",
        itinerary: [
          "7 Nights Province Al Sham (B&B)",
          "7 Nights Voco Makka (B&B)"
        ],
        prices: { quad: 29990, triple: 32990, double: 35990 }
      },
      {
        name: "Package 2",
        itinerary: [
          "7 Nights Province Al Sham (B&B)",
          "7 Nights Anjum Makka (B&B)"
        ],
        prices: { quad: 33990, triple: 34990, double: 39990 }
      },
      {
        name: "Package 3",
        itinerary: [
          "7 Nights Province Al Sham (B&B)",
          "7 Nights Hyatt Regency"
        ],
        prices: { quad: 36990, triple: 39990, double: 45990 }
      }
    ]
  },
  {
    id: "march-2026-three-haram",
    type: "Tour",
    title: "March 2026 — Three Haram Tour",
    departureDate: "2026-03-22",
    returnDate: "2026-04-12",
    heroImage: "/assets/brochure-march.jpg",
    highlights: [
      "Amman + Jerusalem + Makkah + Madinah",
      "Breakfast & dinner included in Jordan + Holy Land",
      "Great value packages"
    ],
    options: [
      {
        name: "Package One",
        itinerary: [
          "2 Nights Lijam Amman (Breakfast & Dinner)",
          "5 Nights Holy Land Jerusalem (Breakfast & Dinner)",
          "6 Nights Voco Makka (B&B)",
          "7 Nights Province Al Sham (B&B)"
        ],
        prices: { quad: 44990, triple: 46990, double: 50990 }
      },
      {
        name: "Package Two",
        itinerary: [
          "2 Nights Lijam Amman (Breakfast & Dinner)",
          "5 Nights Holy Land Jerusalem (Breakfast & Dinner)",
          "6 Nights Hyatt Regency (B&B)",
          "7 Nights Province Al Sham (B&B)"
        ],
        prices: { quad: 49990, triple: 52990, double: 56990 }
      }
    ]
  }
]
