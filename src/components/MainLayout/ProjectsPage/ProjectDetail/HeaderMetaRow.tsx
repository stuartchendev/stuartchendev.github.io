import type {Project} from "../../../../types/project";

type HeaderMetaRowProps = {
    year: Project["year"];
    tags: Project["tags"];
}
type HeaderYearProps={
    year: Project["year"];
}
type HeaderTagsProps = {
    tags: Project["tags"];
}
type HeaderTagProps={
    tag: string;
}

function HeaderMetaRow({year, tags}: HeaderMetaRowProps) {
    const hasTags = Array.isArray(tags) && tags.length > 0;

    return (
        <div className="project__detail-meta">
            {year && <HeaderYear year={year}/>}
            {hasTags && <HeaderTags tags={tags}/>}
        </div>
    )
}
function HeaderYear({year}: HeaderYearProps){
    return (
        <span className="project__detail-year">{year}</span>
    )
}

function HeaderTags({tags}:HeaderTagsProps){
    return (
        <ul className="projectd__detail-tags">
            {tags.map((tag: string, index: number) => (
                <HeaderTag tag={tag} key={`${tag}-${index}`}/>
            ))}
        </ul>
    )
}
function HeaderTag({tag}:HeaderTagProps){
    return(
        <li className="project__detail-tag" >
            {tag}
        </li>
    )
}

export default HeaderMetaRow;