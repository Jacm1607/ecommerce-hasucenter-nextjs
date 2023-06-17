export const Button = ({label = "Button", icon = "http://via.placeholder.com/30x30"}):any => {
    return (
        <button className="py-1 px-4 border-2 border-sky-800 rounded-3xl text-sky-800 hover:bg-sky-800 hover:text-white font-semibold place-items-center flex justify-center gap-2 h-12 w-40 text-start text-sm"><img src={icon} />{label}</button>
    )
}