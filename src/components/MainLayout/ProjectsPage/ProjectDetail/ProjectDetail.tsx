import type {Project} from "../../../../types/project";
import DetailHeader from "./DetailHeader";
import DetailDescription from "./DetailDescription"
import DetailSection from "./DetailSection";
import HeaderMetaRow from "./HeaderMetaRow";
import HeaderLinkRow from "./HeaderLinkRow";

type ProjectDetailProps = {
    projectContent: Project;
}

function ProjectDetail({projectContent}:ProjectDetailProps) {
    const { title, detailDescription, year, tags, githubLink, demoLink, features, challenges } = projectContent;

    const hasTags = tags.length > 0;
    const hasFeatures = (features?.length ?? 0) > 0;
    const hasChallenges = (challenges?.length ?? 0) > 0;

    return (
        <article className="project__detail">
            <DetailHeader title={title} year={year}>
                | {(githubLink || demoLink) &&
                    <HeaderLinkRow githubLink={githubLink} demoLink={demoLink}/>}
            </DetailHeader>
            {(year || hasTags) &&
                <HeaderMetaRow  tags={tags}/>}
            <DetailDescription description={detailDescription}/>
            {hasFeatures && (
                <DetailSection sectionKey="features" title="Feature" items={features!}/>
            )}
            {hasChallenges && (
                <DetailSection sectionKey="challenges" title="Challenges" items={challenges!}/>
            )}
        </article>
    )
}

export default ProjectDetail