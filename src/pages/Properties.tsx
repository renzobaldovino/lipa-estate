import { Link } from "react-router";
import Maps from "../components/Maps";
import { PROPERTIES } from "../utils/mock";
import { Marker, useMap } from "react-map-gl";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Properties = () => {
  const [id, setId] = useState(0)
  const { map } = useMap();

  useEffect(() => {
    if (id) map?.flyTo({ center: [PROPERTIES[id - 1].longitude, PROPERTIES[id - 1].latitude] });
  }, [id])

  return (
    <section className="section flex">
      <div className="scrollbar h-full overflow-y-auto border p-4">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {PROPERTIES.map((property) => (
            <Link key={property.id} to={`/properties/${property.id}`} onMouseEnter={() => setId(property.id)}>
              <div className="max-w-80 aspect-square rounded-3xl overflow-hidden" >
                <img src={property.image} className="h-full w-full object-cover" />
              </div>
              <div className="px-4">
                <p>
                  <span>Property Type: </span>
                  <span className="font-medium">{property.propertyType}</span>
                </p>
                <div className="flex justify-between">
                  <p>
                    <span>Floor Area: </span>
                    <span className="font-medium">{property.floorArea}</span>
                  </p>
                  <p>
                    <span>Bedrooms: </span>
                    <span className="font-medium">{property.bedrooms}</span>
                  </p>
                </div>
                <p>
                  <span>Price: </span>
                  <span className="font-medium">{`₱${property.price}`}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <Maps>
          {
            PROPERTIES.map((property) => (
              <Marker key={property.id} longitude={property.longitude} latitude={property.latitude} anchor="bottom" >
                <FaLocationDot className={id === property.id ? "text-5xl text-red-600" : "text-4xl text-red-300"} />
              </Marker>
            ))
          }
        </Maps>
      </div>
    </section>
  );
};

export default Properties;
