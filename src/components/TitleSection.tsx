export const TitleSection = ({title = "Button", subtitle = "http://via.placeholder.com/30x30"}):any => {
    return (
        <div className="flex-column">
            <span className="">{title}</span>
            <span className="">{subtitle}</span>
        </div>
    )
}