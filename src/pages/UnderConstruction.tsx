import { FaHammer } from "react-icons/fa6";

const UnderConstruction = () => {
    return (
        <section className="section grid place-items-center">
            <div className="flex flex-col items-center gap-4">
                <FaHammer className="text-8xl text-gray-400" />
                <p className="text-xl text-gray-400">Sorry, this page is currently under construction</p>
            </div>
        </section>
    )
}

export default UnderConstruction