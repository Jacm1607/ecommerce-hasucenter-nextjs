 const TitleSectionBorder = ({title = "Button"}):any => {
    return (
        <div className="w-full flex">
            <span className="text-3xl font-extrabold text-sky-900 uppercase">{title}</span>
            <div className="border-b-2 w-full border-sky-900"></div>
        </div>
    )
}

export default TitleSectionBorder;