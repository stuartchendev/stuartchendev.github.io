import type {ReactNode} from "react";
import type {Project} from "../../../../types/project";

type DetailHeaderProps = {
    year: Project["year"];
    title: Project["title"];
    children: ReactNode
}
type HeaderYearProps={
    year: Project["year"];
}
type HeaderTitleProps={
    title: Project["title"];
}

function DetailHeader({year, title, children}: DetailHeaderProps) {
    return (
        <header className="project__detail-header">
            <HeaderTitle title={title}/>
            | {year && <HeaderYear year={year}/>}
            {children}
        </header>
    )
}
function HeaderYear({year}: HeaderYearProps){
    return (
        <span className="project__detail-year">{year}</span>
    )
}

function HeaderTitle({title}:HeaderTitleProps){
    return (
        <h2 className="project__detail-title">{title}</h2>
    )
}

export default DetailHeader;