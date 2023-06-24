import Image from "next/image";
import Link from "next/link";

const Button = ({label = "Button", icon = "http://via.placeholder.com/30x30", primary=true}):any => {
    if (primary) {
        return (
            <Link href={'/'} className="uppercase py-1 px-4 border-2 border-sky-800 rounded-3xl text-sky-800 hover:bg-sky-800 hover:text-white font-semibold place-items-center flex justify-center gap-2 h-12 w-40 text-start text-sm"><Image src={icon} width={30} height={30} alt={""} />{label}</Link>
        )
    } else {
        return (
            <Link href={'/'} className="uppercase py-1 px-4 border-2 border-white rounded-3xl text-white font-semibold place-items-center flex justify-center gap-2 h-12 w-40 text-start text-sm"><Image src={icon} width={30} height={30} alt={""} />{label}</Link>
        );
    }
}

export default Button;