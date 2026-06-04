import type {AboutDescriptionItem, AboutInfo, ResumeLink} from "../../types/i18n";

type AboutSectionContentProps= {
    aboutInfo: AboutInfo;
    resumeLink: ResumeLink;
}
type AboutNameProps= Pick<AboutInfo, "aboutName">
type AboutSubTitleProps = {
    aboutSubTitle: AboutInfo["aboutSubTitle"];
    jobLocation: AboutInfo["jobLocation"];
}

type AboutSummaryProps = {
    aboutSummary: AboutInfo["aboutSummary"];
}
type AboutActionsProps = {
    resumeLink: ResumeLink;
}
type AboutPhaseProps = {
    phase: AboutDescriptionItem;
}
type AboutDetailsSectionProps = {
    aboutDescription: AboutInfo["aboutDetails"];
}

function AboutSectionContent({aboutInfo, resumeLink}:AboutSectionContentProps) {
    return (
        <article className="about__content">
            <AboutName aboutName={aboutInfo.aboutName}/>
            <AboutSubTitle aboutSubTitle={aboutInfo.aboutSubTitle} jobLocation={aboutInfo.jobLocation}/>
            <AboutSummary aboutSummary={aboutInfo.aboutSummary} />
            <AboutActions resumeLink={resumeLink} />
            <div className="about__description">
                <AboutDetailsSection aboutDescription={aboutInfo.aboutDetails} />
            </div>
        </article>
    )
}
function AboutName({aboutName}:AboutNameProps) {
    return (
        <h1 className="about__name">
            {aboutName}
        </h1>
    )
}
function AboutSubTitle({aboutSubTitle, jobLocation}:AboutSubTitleProps){
    return (
        <>
            <h2 className="about__subtitle">
                <span>{aboutSubTitle}</span>
                <span className="about__subtitle-separator"> · </span>
                <span className="about__subtitle-nowrap">{jobLocation}</span>
            </h2>
        </>
    )
}

function AboutSummary({aboutSummary}:AboutSummaryProps){
    return (
        <AboutPhase phase={aboutSummary} />
    )
}
function AboutPhase({phase}:AboutPhaseProps) {
    return (
        <p className="about__phase">
            {phase.parts.map((part, i) =>{
                if (part.type === "br") return <br key={i} />;
                return part.strong
                    ? <strong key={i}>{part.text}</strong>
                    : <span key={i}>{part.text}</span>
            })}
        </p>
    )
}

function AboutActions({resumeLink}: AboutActionsProps){
    return(
        <div className="about__actions">
            <a
                className="about__actions-btn"
                href={resumeLink.href}
                target="_blank"
                rel="noreferrer"
            >
                {resumeLink.label}
            </a>
        </div>
    )
}

function AboutDetailTitle(){
    return(
        <h2 className="about__detail-title">How I work</h2>
    )
}
function AboutNext(){
    return(
        <a className="about__next" href="#projects">View Projects ↓</a>
    )
}


function AboutDetailsSection({aboutDescription}:AboutDetailsSectionProps){
    return (
        <>
            <AboutDetailTitle/>
            <AboutPhase phase={aboutDescription} />
            <AboutNext />
        </>
    )
}
export default AboutSectionContent;