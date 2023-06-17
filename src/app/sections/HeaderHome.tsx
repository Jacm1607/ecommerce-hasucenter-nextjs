"use client"
import HeaderOption from "@/components/HeaderOption";
import Search from "@/components/Search";

const HeaderHome = () => {
    return (
        <>
            <div className="w-full py-2 px-2 bg-sky-800 flex justify-between">
                <div className="flex gap-2 w-1/2">
                    <Search />
                    <img src="http://via.placeholder.com/50x50" alt="http://via.placeholder.com/12x12" />
                </div>
                <div className="flex items-center justify-end gap-2 w-1/2">
                    <div className="w-44 text-center">
                        <p className="text-white text-sm leading-4">CREDITO APROBADO EN 24 HORAS</p>
                    </div>
                    <div className="border-l-2 border-white h-full">&nbsp;</div>
                    <img src="http://via.placeholder.com/50x50" alt="http://via.placeholder.com/12x12" />
                    <img src="http://via.placeholder.com/50x50" alt="http://via.placeholder.com/12x12" />
                    <img src="http://via.placeholder.com/50x50" alt="http://via.placeholder.com/12x12" />
                    <img src="http://via.placeholder.com/50x50" alt="http://via.placeholder.com/12x12" />
                </div>
            </div>

            <div className="w-full py-2 px-2 bg-white flex justify-between border-b-2 border-sky-800">
                <div className="flex gap-2 w-1/2">
                    <img src="http://via.placeholder.com/550x150" alt="http://via.placeholder.com/120x12" />
                </div>
                <div className="flex items-center justify-end gap-2 w-1/2">
                    <HeaderOption />
                </div>
            </div>
        </>
    )
}

export default HeaderHome;