import { FaFilter, FaHouseChimney, FaLocationDot, FaXmark } from "react-icons/fa6";
import Maps from "../components/Maps";
import { HOUSES, NEAR_FILTERS, PRICE_RANGE_FILTERS, TYPE_FILTERS } from "../utils/mock";
import { Marker } from "react-map-gl";
import { useState } from "react";

const LipaMap = () => {
    const [nearFilters, setNearFilters] = useState(NEAR_FILTERS)

    return (
        <section className='section flex'>
            <div className='w-72 p-4 bg-secondary'>
                <div className="py-2 flex items-center gap-2 border-b border-solid border-black">
                    <FaFilter className="text-lg" />
                    <h1 className='text-lg font-semibold'>Filters</h1>
                </div>
                <div className="py-2 border-b border-solid border-black">
                    <h2>Near:</h2>
                    <div className="py-2 flex flex-wrap gap-2">
                        {
                            nearFilters.map((near, index) => {
                                if (!near.visible) return null

                                return (
                                    <span className="w-fit px-4 rounded-full bg-tertiary text-sm flex items-center gap-6">
                                        {near.name}
                                        <button onClick={() => {
                                            let temp = [...nearFilters]
                                            temp[index].visible = false
                                            setNearFilters(temp)
                                        }}>
                                            <FaXmark />
                                        </button>
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="h-1/5 py-2 border-b border-solid border-black">
                    <h2>Location:</h2>
                </div>
                <div className="h-1/5 py-2 border-b border-solid border-black">
                    <h2>Price Range:</h2>
                    <div className="py-2 flex flex-wrap gap-2">
                        {
                            PRICE_RANGE_FILTERS.map(price =>
                                <span className="w-fit px-4 rounded-full bg-tertiary text-sm flex items-center gap-6">
                                    {price}
                                    <FaXmark />
                                </span>
                            )
                        }
                    </div>
                </div>
                <div className="h-1/5 py-2 border-b border-solid border-black">
                    <h2>Type:</h2>
                    <div className="py-2 flex flex-wrap gap-2">
                        {
                            TYPE_FILTERS.map(type =>
                                <span className="w-fit px-4 rounded-full bg-tertiary text-sm flex items-center gap-6">
                                    {type}
                                    <FaXmark />
                                </span>
                            )
                        }
                    </div>
                </div>
            </div>
            <Maps lat={13.943492} lng={121.151503} zoom={16}>
                {
                    nearFilters.map((near) => {
                        if (!near.visible) return null

                        return (
                            <Marker key={near.name} longitude={near.longitude} latitude={near.latitude} anchor="bottom" >
                                <div className="flex flex-col items-center gap-2">
                                    <FaLocationDot className="text-5xl text-blue-400" />
                                    <p className="px-4 py-1 rounded-full bg-blue-400 text-white">{near.name}</p>
                                </div>
                            </Marker>
                        )
                    })
                }
                {
                    HOUSES.map(house => (
                        <Marker key={house.name} longitude={house.longitude} latitude={house.latitude} anchor="bottom" >
                            <div className="flex flex-col items-center gap-2">
                                <FaHouseChimney className="text-5xl text-emerald-800" />
                                <p className="px-4 py-1 rounded-full bg-emerald-800 text-white">{house.name}</p>
                            </div>
                        </Marker>
                    ))
                }
            </Maps>
        </section >
    )
}

export default LipaMap