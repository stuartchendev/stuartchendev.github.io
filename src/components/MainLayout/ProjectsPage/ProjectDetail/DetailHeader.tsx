import type {ReactNode} from "react";
import type {Project} from "../../../../types/project";

type DetailHeaderProps = {
    title: Project["title"];
    children: ReactNode;
}

type HeaderTitleProps={
    title: Project["title"];
}

function DetailHeader({title, children}: DetailHeaderProps) {
    return (
        <header className="project__detail-header">
            <HeaderTitle title={title}/>
            {children}
        </header>
    )
}

function HeaderTitle({title}:HeaderTitleProps){
    return (
        <h2 className="project__detail-title">{title}</h2>
    )
}

export default DetailHeader;