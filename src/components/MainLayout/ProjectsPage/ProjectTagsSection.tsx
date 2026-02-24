import {useState} from "react";
import type {Project} from "../../../types/project";
import {MAX_TAGS} from "../../../config";

type ProjectTagsSectionProps = {
    tags: Project["tags"];
};

function ProjectTagsSection({tags}: ProjectTagsSectionProps) {
    const [isTagsOpen, setIsTagsOpen] = useState(false);

    const visibleTags = tags.slice(0, MAX_TAGS);
    const hiddenCount = Math.max(0, tags.length - MAX_TAGS);

    return (
        <ul className="project__card-tags">
            {visibleTags.map(tag => (
                <li key={tag} className="project__card-tagItem">
                    <span className="project__card-tag">{tag}</span>
                </li>
            ))}

            {hiddenCount > 0 && (
                <li className="project__card-tagItem">
                  <span className="project__card-tag project__card-tag--more">
                    +{hiddenCount}
                  </span>
                </li>
            )}
        </ul>
    );
}

export default ProjectTagsSection;