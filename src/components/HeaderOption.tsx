import Link from "next/link";
import { Button } from "./Button";


const HeaderOption = () => {
   return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-end">
        <Link href={'/'}>INICIO</Link>
        <div className="border-l-2 border-sky-800 h-full">&nbsp;</div>
        <Link href={'/'}>CATALOGO</Link>
        <div className="border-l-2 border-sky-800 h-full">&nbsp;</div>
        <Link href={'/'}>CONTACTANOS</Link>
        <div className="border-l-2 border-sky-800 h-full">&nbsp;</div>
        <Link href={'/'}>FAVORITOS</Link>
      </div>
      <div className="flex gap-3">
        <Button label="MI CUENTA"/>
        <Button label="SEGUIR MI PEDIDO"/>
        <Button label="CREDI HAUS"/>
      </div>
    </div>
   )
}

export default HeaderOption;