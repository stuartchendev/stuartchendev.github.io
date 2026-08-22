import {useEffect, useLayoutEffect, useState} from "react";
import {useParams} from "react-router-dom";
import type {LanguageId} from "../../config";
import {projectsData} from "../../data/project/projectsData";
import BackToProjectsLink from "./BackToProjectsLink";
import ProjectCaseStudyRenderer from "./ProjectCaseStudyRenderer";
import {loadProjectCaseStudy} from "../../content/case-studies/CaseStudyConsumer.mts";
import type {ProjectCaseStudy} from "../../content/case-studies/projectCaseStudySchema.mts";
import {deriveCaseStudyReadingMetadata} from "../../content/case-studies/readingTime.mts";

type ProjectFocusPageProps = {
    activeLanguageId: LanguageId;
};

type ContentState =
    | {status: "loading"}
    | {status: "success"; caseStudy: ProjectCaseStudy}
    | {status: "error"};

function ProjectFocusPage({activeLanguageId}: ProjectFocusPageProps) {
    const {projectId = ""} = useParams();
    const project = projectsData[activeLanguageId].find((candidate) => candidate.id === projectId);
    const [contentState, setContentState] = useState<ContentState>({status: "loading"});

    useLayoutEffect(() => {
        if (window.location.hash) return;

        window.scrollTo({top: 0, left: 0, behavior: "auto"});
    }, []);

    useEffect(() => {
        if (!projectId) return;

        let isCurrent = true;
        setContentState({status: "loading"});

        loadProjectCaseStudy(projectId)
            .then((caseStudy) => {
                if (isCurrent) setContentState({status: "success", caseStudy});
            })
            .catch(() => {
                if (isCurrent) setContentState({status: "error"});
            });

        return () => {
            isCurrent = false;
        };
    }, [projectId]);

    if (!project) {
        return (
            <main className="focus-status">
                <p className="focus-eyebrow">Project Focus Mode</p>
                <h1>Case study not available</h1>
                <p>This project does not have a focused case study yet.</p>
                <BackToProjectsLink/>
            </main>
        );
    }

    const pageTitle = contentState.status === "success" ? contentState.caseStudy.title : project.title;
    const pageSummary = contentState.status === "success" ? contentState.caseStudy.summary : project.shortDescription;
    const readingMetadata = contentState.status === "success"
        ? deriveCaseStudyReadingMetadata(contentState.caseStudy)
        : null;

    return (
        <main className="focus-page">
            <div className="focus-page__header">
                <BackToProjectsLink/>
                <div className="focus-hero__copy">
                    <p className="focus-eyebrow">Project Focus Mode</p>
                    <h1>{pageTitle}</h1>
                    <p className="focus-page__summary">{pageSummary}</p>
                    <div className="focus-hero__metadata">
                        <ul className="focus-hero__tags" aria-label="Project technologies">
                            {project.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
                        </ul>
                        <ul className="focus-hero__facts" aria-label="Project details">
                            {project.year && <li>{project.year}</li>}
                            {readingMetadata && (
                                <li aria-label={`Estimated reading time: ${readingMetadata.minutes} ${readingMetadata.minutes === 1 ? "minute" : "minutes"}`}>
                                    {readingMetadata.minutes} min read
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                {project.thumbnailSrc && (
                    <figure className="focus-hero__visual">
                        <img src={project.thumbnailSrc} alt={project.thumbnailAlt ?? `${project.title} interface preview`}/>
                        <figcaption>{project.title} interface preview</figcaption>
                    </figure>
                )}
            </div>

            {contentState.status === "loading" && (
                <p className="focus-content-status" role="status">Loading case study…</p>
            )}
            {contentState.status === "error" && (
                <div className="focus-content-status" role="alert">
                    <h2>Unable to load this case study</h2>
                    <p>Please return to Projects and try again.</p>
                </div>
            )}
            {contentState.status === "success" && (
                <ProjectCaseStudyRenderer caseStudy={contentState.caseStudy} project={project}/>
            )}
        </main>
    );
}

export default ProjectFocusPage;
