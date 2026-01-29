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

    // must need
    const title = projectContent.title;
    const shortDescription = projectContent.shortDescription;

    // options
    const year = projectContent.year;
    const tags = projectContent.tags;
    const githubLink = projectContent.githubLink;
    const demoLink = projectContent.demoLink;

    const features = projectContent.features;
    const challenges = projectContent.challenges;

    const hasFeatures = Array.isArray(features) && features.length > 0;
    const hasChallenges = Array.isArray(challenges) && challenges.length > 0;
    const hasTags = Array.isArray(tags) && tags.length > 0;

    return (
        <article className="project__detail">
            <DetailHeader title={title}>
                {(year || hasTags) &&
                    <HeaderMetaRow year={year} tags={tags}/>}
                {(githubLink || demoLink) &&
                    <HeaderLinkRow githubLink={githubLink} demoLink={demoLink}/>}
            </DetailHeader>
            <DetailDescription description={shortDescription}/>
            {hasFeatures && (
                <DetailSection sectionKey="features" title="Feature" items={features}/>
            )}
            {hasChallenges && (
                <DetailSection sectionKey="challenges" title="Challenges" items={challenges}/>
            )}
        </article>
    )
}

export default ProjectDetail