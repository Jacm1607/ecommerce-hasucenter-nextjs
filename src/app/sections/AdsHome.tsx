import TitleSection from "@/components/TitleSection";
import Image from "next/image";

const AdsHome = () => {
    return (
        <div className="flex flex-col items-center">
            <TitleSection title="DESCUBRE LAS" subtitle="NOVEDADES HAUS" />
            <div className="grid grid-rows-4 grid-cols-5 gap-4 w-full">
                <div className="md:row-span-4 row-span-2 md:col-span-3 col-span-5">
                    <Image src="http://via.placeholder.com/1020x693/png" width={1020} height={693} style={{ width: '100%', height: '100%' }} alt="Picture of the author" />
                </div>
                <div className="md:row-span-2 row-span-2 md:col-span-2 col-span-5 bg-sky-500">
                    <Image src="http://via.placeholder.com/656x337/png" width={656} height={337} style={{ width: '100%', height: '100%' }} alt="Picture of the author" />
                </div>
                <div className="md:row-span-2 row-span-2 md:col-span-2 col-span-5 bg-sky-300">
                    <Image src="http://via.placeholder.com/656x337/png" width={656} height={337} style={{ width: '100%', height: '100%' }} alt="Picture of the author" />
                </div>
            </div>
        </div>
    )
}

export default AdsHome;