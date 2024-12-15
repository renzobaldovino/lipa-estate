import heroImage from "../assets/hero-image2.png";
import { Link } from "react-router";
import {
  FaCirclePlay,
  FaLocationDot,
  FaHouseChimney,
  FaPesoSign,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const Home = () => {
  return (
    <section className="section py-4">
      <div className="flex justify-between">
        <div className="ml-16 flex flex-col justify-center gap-4">
          <h1 className="text-7xl tracking-wider">FIND YOUR</h1>
          <h1 className="text-7xl font-bold tracking-wider">PERFECT HOME</h1>
          <p className="text-2xl">
            Discover a curated collection of dream homes at your finger tips!
          </p>
          <p className="text-2xl">Simplified and personalized.</p>
          <div className="mt-8 flex gap-8">
            <Link to="/properties">
              <button className="btn-primary">Property Listings</button>
            </Link>
            <div className="flex items-center gap-2">
              <FaCirclePlay className="text-4xl" />
              <span className="font-semibold">Watch Demo</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <img src={heroImage} className="w-full object-contain" />
        </div>
      </div>
      <div className="bg-secondary mx-16 mt-4 flex justify-between gap-4 rounded-3xl px-16 py-8">
        <div className="w-2/4 border-r border-black">
          <label htmlFor="location" className="flex items-center gap-2">
            <FaLocationDot />
            <span className="font-semibold">Location</span>
          </label>
          <p>Marawoy Lipa City</p>
        </div>
        <div className="w-1/4 border-r border-black">
          <label htmlFor="location" className="flex items-center gap-2">
            <FaHouseChimney />
            <span className="font-semibold">House Type</span>
          </label>
          <p>Duplex</p>
        </div>
        <div className="w-1/4">
          <label htmlFor="location" className="flex items-center gap-2">
            <FaPesoSign />
            <span className="font-semibold">Price Range</span>
          </label>
          <p>₱ 1.5 Million - ₱ 3 Million</p>
        </div>
        <Link to="/properties">
          <FaMagnifyingGlass className="text-4xl" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
