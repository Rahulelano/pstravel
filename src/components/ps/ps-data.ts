import chennaiImg from "../../assets/chennai.jpg";
import maduraiImg from "../../assets/madurai.jpg";
import trichyImg from "../../assets/trichy.jpg";
import coimbatoreImg from "../../assets/coimbatore.jpg";
import salemImg from "../../assets/salem.jpg";
import erodeImg from "../../assets/erode.jpg";
import thanjavurImg from "../../assets/thanjavur.jpg";
import kumbakonamImg from "../../assets/kumbakonam.jpg";
import rameswaramImg from "../../assets/rameshwara.jpg";
import ootyImg from "../../assets/ooty.jpg";
import kodaikanalImg from "../../assets/kodaikanal.jpg";
import kanyakumariImg from "../../assets/kanyakumari.jpg";

import urbbImg from "../../assets/urbb.jpg";
import fortunerImg from "../../assets/fortune.png";
import hycrossImg from "../../assets/hycross.png";
import suvImg from "../../assets/suv.jpg";
import sedanImg from "../../assets/seaden.jpg";
import tempoImg from "../../assets/tempo.jpg";
import busImg from "../../assets/bus.jpg";

export const phone = "6380886330";
export const alternatePhone = "9176561829";
export const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent("Hello PS Taxi Service, I would like to book a taxi.")}`;
export const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Fleet", "/fleet"],
  ["Tour Packages", "/tours"],
  ["Chennai Outstation", "/chennai-outstation"],
  ["Destinations", "/destinations"],
  ["Contact", "/contact"],
] as const;

export const destinations = [
  {
    slug: "chennai",
    name: "Chennai",
    type: "HQ · 24/7",
    intro:
      "Dependable Chennai taxi service for airport, railway station, local and outstation travel.",
    image: chennaiImg,
    rating: "4.8",
    reviews: "1,230",
  },
  {
    slug: "madurai",
    name: "Madurai",
    type: "Temple city",
    intro:
      "Comfortable Madurai taxi bookings for temple visits, airport transfers and family travel.",
    image: maduraiImg,
    rating: "4.9",
    reviews: "2,150",
  },
  {
    slug: "trichy",
    name: "Trichy",
    type: "Temple & airport",
    intro:
      "Reliable Trichy cab service connecting the airport, railway station and nearby temple towns.",
    image: trichyImg,
    rating: "4.7",
    reviews: "980",
  },
  {
    slug: "coimbatore",
    name: "Coimbatore",
    type: "Airport travel",
    intro: "Book a Coimbatore taxi for business trips, hill station travel and airport transfers.",
    image: coimbatoreImg,
    rating: "4.8",
    reviews: "1,450",
  },
  {
    slug: "salem",
    name: "Salem",
    type: "Outstation",
    intro: "Salem outstation taxi service for comfortable one-way and round-trip journeys.",
    image: salemImg,
    rating: "4.7",
    reviews: "890",
  },
  {
    slug: "erode",
    name: "Erode",
    type: "City & highway",
    intro: "Safe Erode taxi rides for local errands, family visits and Tamil Nadu road trips.",
    image: erodeImg,
    rating: "4.8",
    reviews: "750",
  },
  {
    slug: "thanjavur",
    name: "Thanjavur",
    type: "Heritage travel",
    intro: "Explore Thanjavur heritage and temple routes with an experienced local driver.",
    image: thanjavurImg,
    rating: "4.9",
    reviews: "1,110",
  },
  {
    slug: "kumbakonam",
    name: "Kumbakonam",
    type: "Temple circuit",
    intro: "Plan a Kumbakonam taxi tour across the famous temple circuit at your own pace.",
    image: kumbakonamImg,
    rating: "4.8",
    reviews: "920",
  },
  {
    slug: "rameswaram",
    name: "Rameswaram",
    type: "Pilgrimage tour",
    intro: "Book a Rameswaram cab for a calm, well-planned pilgrimage and coastal journey.",
    image: rameswaramImg,
    rating: "4.9",
    reviews: "2,340",
  },
  {
    slug: "ooty",
    name: "Ooty",
    type: "Hill station",
    intro: "Comfortable Ooty taxi trips with clean vehicles and drivers who know the hill roads.",
    image: ootyImg,
    rating: "4.9",
    reviews: "3,120",
  },
  {
    slug: "kodaikanal",
    name: "Kodaikanal",
    type: "Hill station",
    intro: "Enjoy a flexible Kodaikanal family trip with a spacious cab and thoughtful stops.",
    image: kodaikanalImg,
    rating: "4.8",
    reviews: "1,980",
  },
  {
    slug: "kanyakumari",
    name: "Kanyakumari",
    type: "Coastal travel",
    intro: "Travel to Kanyakumari in comfort with a trusted driver and transparent quote.",
    image: kanyakumariImg,
    rating: "4.8",
    reviews: "1,650",
  },
] as const;

export const services = [
  {
    name: "Airport Pickup & Drop",
    eyebrow: "Airport",
    description:
      "Flight-aware pickups and terminal drop-offs with luggage space and a driver ready when you land.",
    price: "From ₹900",
    icon: "✈",
  },
  {
    name: "Railway Station Pickup",
    eyebrow: "Rail",
    description:
      "A punctual cab for Chennai Central, Egmore and stations across Tamil Nadu, day or night.",
    price: "From ₹500",
    icon: "▣",
  },
  {
    name: "Local Taxi Service",
    eyebrow: "City",
    description:
      "Run errands, attend meetings or cross the city with a clean car and a dependable local driver.",
    price: "From ₹500",
    icon: "⌖",
  },
  {
    name: "Outstation Taxi",
    eyebrow: "Highway",
    description:
      "One-way and round-trip travel across Tamil Nadu with clear pricing before your journey begins.",
    price: "From ₹8/km",
    icon: "↗",
  },
  {
    name: "Temple Tour Packages",
    eyebrow: "Temples",
    description:
      "Thoughtfully planned temple circuits across Madurai, Rameswaram, Kumbakonam and Palani.",
    price: "From ₹4,800",
    icon: "✦",
  },
  {
    name: "Family Tour Packages",
    eyebrow: "Family",
    description:
      "Spacious vehicles, flexible stops and comfortable hill-station journeys for the whole family.",
    price: "Custom quote",
    icon: "⌂",
  },
  {
    name: "Corporate Travel",
    eyebrow: "Business",
    description: "Professional city and airport travel for teams, guests, meetings and events.",
    price: "Custom quote",
    icon: "+",
  },
  {
    name: "Wedding Travel",
    eyebrow: "Events",
    description:
      "Coordinated guest transport and premium vehicles for wedding days that run on time.",
    price: "Custom quote",
    icon: "◇",
  },
  {
    name: "24/7 Emergency Cab",
    eyebrow: "Always on",
    description:
      "When the journey cannot wait, call PS Taxi Service for a real person and a fast response.",
    price: "Call for quote",
    icon: "!",
  },
] as const;

export const anyVehicleMessage = "Looking for something else? We can arrange any vehicle you need for your journey. Just ask!";

export const fleet = [
  {
    name: "Urban Cruiser",
    model: "Comfortable Compact SUV",
    seats: "4 seats",
    bags: "3 bags",
    price: "From ₹10/km",
    image: urbbImg,
  },
  {
    name: "Toyota Fortuner",
    model: "Premium SUV",
    seats: "6 seats",
    bags: "4 bags",
    price: "From ₹18/km",
    image: fortunerImg,
  },
  {
    name: "Innova Hycross",
    model: "Luxury Family Travel",
    seats: "7 seats",
    bags: "4 bags",
    price: "From ₹15/km",
    image: hycrossImg,
  },
  {
    name: "SUV",
    model: "Comfortable Highway Ride",
    seats: "6 seats",
    bags: "4 bags",
    price: "From ₹14/km",
    image: suvImg,
  },
  {
    name: "Sedan",
    model: "Etios / Dzire",
    seats: "4 seats",
    bags: "2 bags",
    price: "From ₹8/km",
    image: sedanImg,
  },
  {
    name: "Tempo Traveller",
    model: "Group Tours",
    seats: "12-14 seats",
    bags: "Group luggage",
    price: "From ₹18/km",
    image: tempoImg,
  },
  {
    name: "Mini Bus / Tourist Bus",
    model: "Large Group Tours",
    seats: "21-35 seats",
    bags: "Maximum luggage",
    price: "Custom Quote",
    image: busImg,
  },
];

export const tours = [
  {
    name: "Rameswaram Tour",
    meta: "2 days · Temple & coast",
    copy: "Ramanathaswamy Temple, Dhanushkodi and the Pamban bridge with a calm itinerary.",
    from: "From ₹9,800",
  },
  {
    name: "Madurai Heritage",
    meta: "1 day · Temple city",
    copy: "Meenakshi Amman Temple, Thirumalai Nayak Palace and a driver-led city route.",
    from: "From ₹4,800",
  },
  {
    name: "Navagraha Circuit",
    meta: "3 days · Temple circuit",
    copy: "A flexible Kumbakonam circuit across the nine planetary temples and local highlights.",
    from: "Custom quote",
  },
  {
    name: "Ooty Escape",
    meta: "3 days · Hill station",
    copy: "Misty viewpoints, tea country and spacious travel for families and small groups.",
    from: "From ₹10,500",
  },
  {
    name: "Kodaikanal Family Trip",
    meta: "3 days · Hills & lakes",
    copy: "A relaxed family itinerary with comfortable drives, flexible stops and local guidance.",
    from: "From ₹11,500",
  },
  {
    name: "Kanyakumari Coast",
    meta: "2 days · Coastal",
    copy: "Sunrise, Vivekananda Rock and the southern coastline in one memorable road trip.",
    from: "From ₹9,500",
  },
] as const;

export const blogPosts = [
  {
    category: "Guide",
    title: "How to choose the best taxi service in Tamil Nadu",
    date: "Travel planning",
    copy: "A practical checklist for comparing safety, vehicle comfort, pricing and response time.",
  },
  {
    category: "Airport",
    title: "Your airport taxi booking guide for Chennai",
    date: "Airport travel",
    copy: "What to share, when to book and how to make the trip from terminal to destination simple.",
  },
  {
    category: "Temple travel",
    title: "Temple tour travel tips for Tamil Nadu",
    date: "Slow travel",
    copy: "Plan darshan timings, temple circuits and comfortable road legs without rushing the journey.",
  },
  {
    category: "Outstation",
    title: "The outstation travel checklist",
    date: "Road trips",
    copy: "Everything to check before setting off on a one-way or round-trip cab journey.",
  },
  {
    category: "Family",
    title: "A calmer family travel guide for the hills",
    date: "Family travel",
    copy: "Vehicle choices, stop planning and small details that make a hill trip easier for everyone.",
  },
  {
    category: "Taxi tips",
    title: "The benefits of hiring a taxi for local travel",
    date: "City travel",
    copy: "Why a dedicated cab can be the simplest choice for errands, meetings and busy days.",
  },
] as const;

export const faqs = [
  [
    "How do I book a taxi with PS Taxi Service?",
    "Use the instant quote form, call 6380886330 or message us on WhatsApp. A team member will confirm the route, vehicle and pickup time.",
  ],
  [
    "Do you provide one-way taxi service in Tamil Nadu?",
    "Yes. We provide one-way and round-trip outstation taxi service from Chennai and across Tamil Nadu, subject to vehicle availability.",
  ],
  [
    "How is the taxi fare calculated?",
    "The final quote depends on route, vehicle type, trip style and timing. We share a clear estimate before you confirm.",
  ],
  [
    "Are taxi services available 24/7?",
    "Yes. PS Taxi Service is available 24/7 for airport transfers, emergency cabs, local rides and planned outstation trips.",
  ],
  [
    "Which vehicles can I book?",
    "Our fleet includes sedans such as Etios and Dzire, SUVs, Innova Crysta and Tempo Traveller for group travel.",
  ],
  [
    "Can I book a temple or family tour package?",
    "Yes. Share your dates, places and group size and we will shape a comfortable itinerary with suitable vehicle options.",
  ],
] as const;
