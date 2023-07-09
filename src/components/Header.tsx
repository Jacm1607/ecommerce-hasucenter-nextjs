import Search from "@/components/Search";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="grid grid-cols-3 bg-sky-800 px-2">
                <div className="col-span-3 lg:col-span-1 flex items-center gap-2 h-20">
                    <Search />
                    <Link href={'/lista-compra'} ><Image src="http://via.placeholder.com/50x50/png" width={50} height={50} alt="http://via.placeholder.com/12x12" /></Link>
                </div>
                <div className="lg:col-span-1 col-span-3 flex items-center justify-end gap-2">
                    <Button url="/mi-cuenta" primary={false} label="MI CUENTA" />
                    <Button primary={false} label="Segui mi pedido" />
                    <Button primary={false} label="Credi Haus" />
                </div>
                <div className="col-span-3 lg:col-span-1 flex flex-wrap justify-end">
                    <div className="flex items-center justify-end gap-2 my-2">
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
        </>
    )
}

export default Header;