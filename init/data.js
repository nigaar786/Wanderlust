const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
    category: "Pool",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] },
    category: "Cities",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8370, 39.1911] },
    category: "Mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
    category: "Castles",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
    category: "Farms",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
    category: "Pool",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
    category: "Camping",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
    category: "Cities",
  },

  // ---------------- remaining 22 added same way ----------------

  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski chalet in the Swiss Alps.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2167, 46.0962] },
    category: "Mountains",
  },

  {
    title: "Safari Lodge in Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
    category: "Camping",
  },

  {
    title: "Historic Canal House",
    description:
      "Stay in a preserved canal house in Amsterdam.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
    category: "Cities",
  },

  {
    title: "Private Island Retreat",
    description:
      "Exclusive private island vacation experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60" },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [178.0650, -17.7134] },
    category: "Boats",
  },

  {
    title: "Charming Cottage in Cotswolds",
    description:
      "Quaint countryside cottage with thatched roof.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.8433, 51.8330] },
    category: "Rooms",
  },

  {
    title: "Historic Brownstone Boston",
    description:
      "Elegant historic brownstone in Boston city.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60" },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.0589, 42.3601] },
    category: "Cities",
  },

  {
    title: "Beachfront Bungalow Bali",
    description:
      "Relax in a beachfront bungalow with private pool.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
    category: "Pool",
  },

  {
    title: "Mountain View Cabin Banff",
    description:
      "Cabin with stunning Canadian Rockies view.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] },
    category: "Mountains",
  },

  {
    title: "Art Deco Apartment Miami",
    description:
      "Stylish Art Deco apartment in South Beach.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60" },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] },
    category: "Cities",
  },

  {
    title: "Tropical Villa Phuket",
    description:
      "Luxury villa with private infinity pool.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] },
    category: "Pool",
  },

  {
    title: "Historic Castle Scotland",
    description:
      "Royal castle stay in Scottish Highlands.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60" },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2026, 57.1200] },
    category: "Castles",
  },

  {
    title: "Desert Oasis Dubai",
    description:
      "Luxury desert villa with private pool.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60" },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
    category: "Pool",
  },

  {
    title: "Rustic Log Cabin Montana",
    description:
      "Peaceful cabin in Montana wilderness.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60" },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: { type: "Point", coordinates: [-110.3626, 46.8797] },
    category: "Camping",
  },

  {
    title: "Beachfront Villa Greece",
    description:
      "Mediterranean beachfront villa.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60" },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3289, 37.4467] },
    category: "Pool",
  },

  {
    title: "Eco Treehouse Costa Rica",
    description:
      "Eco-friendly treehouse in forest.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60" },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-83.7534, 9.7489] },
    category: "Farms",
  },
  {
  title: "Historic Cottage in Charleston",
  description:
    "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Charleston",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-79.9311, 32.7765],
  },
  category: "Rooms",
},

{
  title: "Modern Apartment in Tokyo",
  description:
    "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Tokyo",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [139.6917, 35.6895],
  },
  category: "Cities",
},

{
  title: "Lakefront Cabin in New Hampshire",
  description:
    "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "New Hampshire",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-71.5724, 43.1939],
  },
  category: "Camping",
},

{
  title: "Luxury Villa in the Maldives",
  description:
    "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
  },
  price: 6000,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [73.2207, 3.2028],
  },
  category: "Pool",
},

{
  title: "Ski Chalet in Aspen",
  description:
    "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Aspen",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-106.8370, 39.1911],
  },
  category: "Mountains",
},

{
  title: "Secluded Beach House in Costa Rica",
  description:
    "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Costa Rica",
  country: "Costa Rica",
  geometry: {
    type: "Point",
    coordinates: [-83.7534, 9.7489],
  },
  category: "Pool",
},
];

module.exports = { data: sampleListings };