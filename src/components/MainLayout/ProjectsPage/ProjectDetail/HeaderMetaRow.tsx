import type {Project} from "../../../../types/project";

type HeaderMetaRowProps = {
    tags: Project["tags"];
}
type HeaderTagsProps = {
    tags: Project["tags"];
}
type HeaderTagProps={
    tag: string;
}

function HeaderMetaRow({tags}: HeaderMetaRowProps) {
    const hasTags = Array.isArray(tags) && tags.length > 0;

    return (
        <div className="project__detail-meta">
            {hasTags && <HeaderTags tags={tags}/>}
        </div>
    )
}

function HeaderTags({tags}:HeaderTagsProps){
    return (
        <ul className="project__detail-tags">
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