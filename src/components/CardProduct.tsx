import Image from "next/image";

const CardProduct = ({ title = "Button", img = "http://via.placeholder.com/350x350/png", price = `00000 BS.` }): any => {
    return (
        <div className="border-2 border-sky-950 rounded-[50px] w-full h-full flex flex-col">
            <Image className="h-3/4 object-none object-center w-full rounded-t-[50px]" src={img} width={350} height={350} alt="1" />
            <div className="h-1/4 flex flex-col ">
                <span className="text-sky-900 font-semibold text-center uppercase">{title}</span>
                <span className="text-sky-900 font-extrabold text-2xl text-center">{price}</span>
            </div>
        </div>
    )
}

export default CardProduct;