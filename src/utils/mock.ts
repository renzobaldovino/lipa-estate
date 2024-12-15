import house1 from "../assets/house1.png";
import house2 from "../assets/house2.png";
import house3 from "../assets/house3.png";
import house4 from "../assets/house4.png";
import house5 from "../assets/house5.png";
import house6 from "../assets/house6.png";
import house7 from "../assets/house7.png";
import house8 from "../assets/house8.png";
import house9 from "../assets/house9.png";

interface IPROPERTIES {
  id: number;
  name: string;
  address: string;
  image: string;
  propertyType: string;
  floorArea: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  latitude: number;
  longitude: number;
}

export const PROPERTIES: IPROPERTIES[] = [
  {
    id: 1,
    name: "Town House",
    address: "Lipa City",
    image: house1,
    propertyType: "House",
    floorArea: "90 m²",
    bedrooms: 3,
    bathrooms: 3,
    price: "1 Million",
    latitude: 13.958652962906834,
    longitude: 121.14931523883995,
  },
  {
    id: 2,
    name: "Town House",
    address: "Lipa City",
    image: house2,
    propertyType: "House",
    floorArea: "70 m²",
    bedrooms: 3,
    bathrooms: 3,
    price: "2 Million",
    latitude: 13.93564829091529,
    longitude: 121.15982262534757,
  },
  {
    id: 3,
    name: "Forbes Estate: Modern House",
    address: "Forbes Estate Lipa, Jose P Laurel",
    image: house3,
    propertyType: "House",
    floorArea: "80 m²",
    bedrooms: 9,
    bathrooms: 9,
    price: "3 Million",
    latitude: 13.975495711595187,
    longitude: 121.16713153698865,
  },
  {
    id: 4,
    name: "Town House",
    address: "Lipa City",
    image: house4,
    propertyType: "House",
    floorArea: "90 m²",
    bedrooms: 3,
    bathrooms: 3,
    price: "1 Million",
    latitude: 13.928127,
    longitude: 121.139789,
  },
  {
    id: 5,
    name: "Town House",
    address: "Lipa City",
    image: house5,
    propertyType: "House",
    floorArea: "70 m²",
    bedrooms: 3,
    bathrooms: 3,
    price: "2 Million",
    latitude: 13.94454,
    longitude: 121.156983,
  },
  {
    id: 6,
    name: "Town House",
    address: "Lipa City",
    image: house6,
    propertyType: "House",
    floorArea: "80 m²",
    bedrooms: 9,
    bathrooms: 9,
    price: "3 Million",
    latitude: 13.97223117160487,
    longitude: 121.17009408116817,
  },
  {
    id: 7,
    name: "Town House",
    address: "Lipa City",
    image: house7,
    propertyType: "House",
    floorArea: "90 m²",
    bedrooms: 3,
    bathrooms: 3,
    price: "1 Million",
    latitude: 13.946151,
    longitude: 121.16005,
  },
  {
    id: 8,
    name: "Town House",
    address: "Lipa City",
    image: house8,
    propertyType: "House",
    floorArea: "70 m²",
    bedrooms: 3,
    bathrooms: 3,
    price: "2 Million",
    latitude: 13.941306,
    longitude: 121.144109,
  },
  {
    id: 9,
    name: "Town House",
    address: "Lipa City",
    image: house9,
    propertyType: "House",
    floorArea: "80 m²",
    bedrooms: 9,
    bathrooms: 9,
    price: "3 Million",
    latitude: 13.939646,
    longitude: 121.143318,
  },
];

interface INEAR_FILTERS {
  name: string;
  latitude: number;
  longitude: number;
  visible: boolean;
}

export const NEAR_FILTERS: INEAR_FILTERS[] = [
  {
    name: "De La Salle Lipa",
    latitude: 13.941840518731047,
    longitude: 121.14769881000382,
    visible: true,
  },
  {
    name: "Robinsons Lipa",
    latitude: 13.942494269084964,
    longitude: 121.15115299624482,
    visible: true,
  },
  {
    name: "South Super Market",
    latitude: 13.946097440360758,
    longitude: 121.15579730566367,
    visible: true,
  },
  {
    name: "Anytime Fitness",
    latitude: 13.94546021556181,
    longitude: 121.15480619031986,
    visible: true,
  },
  {
    name: "Mary Mediatrix Hospital",
    latitude: 13.943513851581464,
    longitude: 121.15192159651163,
    visible: true,
  },
];

export const PRICE_RANGE_FILTERS = ["₱800k - ₱1.3Mil"];

export const TYPE_FILTERS = ["House", "Village"];

export const HOUSES = [
  {
    name: "Robinson's Homes",
    latitude: 13.944525052265305,
    longitude: 121.15045456767555,
  },
  {
    name: "Adelina Homes",
    latitude: 13.945930050932636,
    longitude: 121.14772490815238,
  },
  {
    name: "Villa Lourdes",
    latitude: 13.939934856618518,
    longitude: 121.14707846767578,
  },
  {
    name: "Tierra Lorenzo",
    latitude: 13.940729220269688,
    longitude: 121.1531919060669,
  },
];
