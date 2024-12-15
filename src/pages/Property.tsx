import video from "../assets/video.png"
import agent from "../assets/agent.png"
import ph from "../assets/ph.png"
import { useParams } from 'react-router';
import { FiShare, FiHeart } from "react-icons/fi";
import { FaBed, FaCar, FaLocationDot, FaPesoSign, FaRulerCombined, FaShower, FaSignsPost } from 'react-icons/fa6';
import { PROPERTIES } from "../utils/mock";
import Maps from '../components/Maps';
import { Marker, useMap } from 'react-map-gl';
import { useEffect, useState } from 'react';
import { FcApproval } from "react-icons/fc";

const Property = () => {
    let { id } = useParams<string>();
    const [i, setI] = useState(Number(id) - 1);
    const { map } = useMap();

    useEffect(() => {
        if (i) map?.flyTo({ center: [PROPERTIES[i].longitude, PROPERTIES[i].latitude] });
    }, [i])

    return (
        <section className='py-8 px-16'>
            <div className='mb-4 flex items-center justify-between'>
                <h1 className='text-4xl font-semibold'>{PROPERTIES[i].name}</h1>
                <div className='flex items-center gap-4 text-lg'>
                    <span className='flex items-center gap-2'><FiShare />Share</span>
                    <span className='flex items-center gap-2'><FiHeart />Share</span>
                </div>
            </div>
            <div className='pb-8 grid grid-cols-2 gap-4 border-b border-black'>
                <div className='flex flex-col gap-2'>
                    <div className='h-[30rem] rounded-xl overflow-hidden'>
                        <img src={PROPERTIES[i].image} className='w-full h-full object-cover' />
                    </div>
                    <p className='flex items-center gap-2 text-lg'>
                        <FaLocationDot />
                        <span>{PROPERTIES[i].address}</span>
                    </p>
                    <p className='flex items-center gap-2 text-lg'>
                        <FaPesoSign />
                        <span className="font-semibold">{PROPERTIES[i].price}</span>
                    </p>
                    <div className='flex items-center gap-8 text-lg'>
                        <span className='flex items-center gap-2'><FaBed /> {PROPERTIES[i].bedrooms}</span>
                        <span className='flex items-center gap-2'><FaShower /> {PROPERTIES[i].bathrooms}</span>
                        <span className='flex items-center gap-2'><FaRulerCombined /> {PROPERTIES[i].floorArea}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='h-[30rem]'>
                        <Maps lat={PROPERTIES[i].latitude} lng={PROPERTIES[i].longitude}>
                            <Marker longitude={PROPERTIES[i].longitude} latitude={PROPERTIES[i].latitude} anchor="bottom">
                                <FaLocationDot className="text-5xl text-red-600" />
                            </Marker>
                        </Maps>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <span className='flex items-center gap-2 text-lg'><FaCar /> 14 min</span>
                            <span className='text-sm'>4.8km</span>
                        </div>
                        <div >
                            <p className='flex items-center gap-2 mr-4'>
                                <FaSignsPost />
                                Via Ayala Hwy/President Jose P. LaurelHwy and
                            </p>
                            <p>
                                President Jose P. Laurel Hwy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex">
                <div className="w-1/2 grid gap-4">
                    <div className="overflow-hidden">
                        <img src={video} className="object-cover" />
                    </div>
                    <p className="font-semibold text-xl">Unit Specifications:</p>
                    <ul className="px-4 flex items-start gap-24">
                        <div>
                            <li className="list-disc">2 Storey Residential House</li>
                            <li className="list-disc">4 Bedrooms</li>
                            <li className="list-disc">3 Toilet & Bath</li>
                            <li className="list-disc">Living Area</li>
                            <li className="list-disc">Dining Area</li>
                            <li className="list-disc">Balcony</li>
                            <li className="list-disc">Lanai</li>
                            <li className="list-disc">3 Carport</li>
                        </div>
                        <div>
                            <li className="list-disc">Available Lots:
                                <li className="list-inside">Regular</li>
                                <li className="list-inside">Inner</li>
                                <li className="list-inside">Corner Lots</li>
                                <li className="list-inside">Prime Lots</li>
                            </li>
                            <li className="list-disc">Lot Investment starts at ₱25,000/sqm</li>
                            <li className="list-disc">Lot Size: Approximately 500 sqm</li>
                        </div>
                    </ul>
                </div>
                <div className="w-1/2 h-fit p-8 flex flex-col gap-4 bg-secondary rounded-3xl">
                    <p className="text-center font-bold text-2xl">Ask About The Property</p>
                    <div className="mx-auto flex items-center gap-8">
                        <img src={agent} />
                        <div>
                            <p className="text-xl">Robinsons Land Corporation</p>
                            <p className="flex items-center gap-1">
                                <FcApproval className="text-lg" />
                                Fully Verified
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <input className="w-1/2 px-4 py-2 bg-[#cccaca] border border-black" type="text" placeholder="Juan" />
                        <input className="w-1/2 px-4 py-2 bg-[#cccaca] border border-black" type="text" placeholder="De La Cruz" />
                    </div>
                    <div className="flex items-center">
                        <img src={ph} className="h-[42px] border border-black" />
                        <input className="w-full px-4 py-2 bg-[#cccaca] border border-black" type="text" placeholder="+63 912-345-6789" />
                    </div>
                    <input className="px-4 py-2 bg-[#cccaca] border border-black" type="text" placeholder="juan.delacruz@example.com" />
                    <button className="btn-primary">Contact Agent</button>
                </div>
            </div>
        </section>
    )
}

export default Property