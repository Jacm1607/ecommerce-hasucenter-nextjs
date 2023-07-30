import Image from "next/image";
import truncateString from '../utils/truncateString'

const CardProduct = ({ title = "Button", img = "http://via.placeholder.com/350x350/png", price = `00000 BS.` }): any => {
    return (
        <div className="border-2 border-sky-950 rounded-[50px] w-full h-full grid grid-rows-3">
            <Image className="row-span-2 object-none object-center w-full p-10" src={img} width={100} height={100} style={{width: 350, height: '100%', objectFit: 'contain'}} alt="1" />
            <div className="row-span-1 flex flex-col ">
                <span className="text-sky-900 font-semibold text-center uppercase h-14">{truncateString(title, 40)}</span>
                <span className="text-sky-900 font-extrabold text-2xl text-center">{price} Bs.</span>
            </div>
        </div>
    )
}

export default CardProduct;