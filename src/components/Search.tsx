const Search = () => {
    return (
        <div className="w-1/2 p-1 flex bg-white pl-3 rounded-2xl">
            <input type="text" name="" id="" className="h-full w-11/12 rounded-l-2xl focus:outline-none" placeholder="BUSCAR PRODUCTO..." />
            <button type="submit" className="w-1/12 h-full bg-white border-l-2 border-sky-800 place-items-center flex justify-center rounded-r-2xl"><img src="https://placehold.co/30x30" alt="Logo" /></button>
        </div>
    );
}

export default Search;