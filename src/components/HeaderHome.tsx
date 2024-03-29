import HeaderOption from "@/components/HeaderOption";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";

const HeaderHome = () => {
    return (
        <>
            <div className="grid grid-cols-2 bg-sky-800 px-2">
                <div className="col-span-2 lg:col-span-1 flex items-center gap-2 h-20">
                    <Search />
                    <Link href={'/lista-compra'}><Image src="/bolsa-de-la-compra.png" width={50} height={50} alt="Compra" /></Link>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className="flex items-center justify-end gap-2 h-20">
                        <div className="w-44 text-center">
                            <p className="text-white text-sm leading-4">CREDITO APROBADO EN 24 HORAS</p>
                        </div>
                        <div className="border-l-2 h-10 border-white">&nbsp;</div>
                        <Image src="/facebook.png" width={40} height={40} alt="facebook" />
                        <Image src="/instagram.png" width={40} height={40} alt="instagram" />
                        <Image src="/youtube.png" width={40} height={40} alt="youtube" />
                        <Image src="/tik-tok.png" width={40} height={40} alt="tiktok" />
                    </div>
                </div>
            </div>
            <HeaderOption/>
        </>
    )
}

export default HeaderHome;