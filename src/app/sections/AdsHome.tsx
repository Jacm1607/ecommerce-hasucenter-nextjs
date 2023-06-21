import { TitleSection } from "@/components/TitleSection"

const AdsHome = () => {
    return (
        <div className="flex flex-col items-center">
            <TitleSection title="DESCUBRE LAS" subtitle="NOVEDADES HAUS" />
            <div className="grid grid-rows-4 grid-flow-col gap-4 w-full h-[40rem] px-24">
                <div className="row-span-4 bg-sky-700">01</div>
                <div className="row-span-2 col-span-2 bg-sky-500">02</div>
                <div className="row-span-2 col-span-2 bg-sky-300">03</div>
            </div>
        </div>
    )
}

export default AdsHome;