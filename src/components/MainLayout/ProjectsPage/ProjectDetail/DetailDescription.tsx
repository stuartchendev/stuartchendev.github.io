import type {Project} from "../../../../types/project";

type DescriptionProps = {
    description: Project["shortDescription"];
}

function DetailDescription({description}: DescriptionProps){
    return(
        <section className="project__detail-summary">
            <Description description={description}/>
        </section>
    )
}
function Description({description}: DescriptionProps){
    return(
        <p className="project__detail-description">{description}</p>
    )
}

export default DetailDescription;