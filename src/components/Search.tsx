import Image from "next/image";

const Search = () => {
    return (
        <div className="w-full h-2/3 p-1 flex items-center bg-white pl-3 rounded-2xl">
            <input type="text" name="" id="" className="h-full w-11/12 rounded-l-2xl focus:outline-none" placeholder="BUSCAR PRODUCTO..." />
            <button type="submit" className="w-1/12 h-full bg-white border-l-2 border-sky-800 place-items-center flex justify-center rounded-r-2xl"><Image src="https://placehold.co/30x30/png" width={30} height={30} alt="Logo" /></button>
        </div>
    );
}

export default Search;