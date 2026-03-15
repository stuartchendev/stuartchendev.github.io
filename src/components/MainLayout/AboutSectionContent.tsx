import type {AboutDescriptionItem, AboutInfo} from "../../types/i18n";
import {RESUME_URL} from "../../config";

type AboutSectionContentProps= {
    aboutInfo: AboutInfo;
}
type AboutNameProps= Pick<AboutInfo, "aboutName">
type AboutSubTitleProps = Pick<AboutInfo, "aboutSubTitle">

type AboutSummaryProps = {
    aboutSummary: AboutInfo["aboutSummary"];
}
type AboutPhaseProps = {
    phase: AboutDescriptionItem;
}
type AboutDetailsSectionProps = {
    aboutDescription: AboutInfo["aboutDetails"];
}

function AboutSectionContent({aboutInfo}:AboutSectionContentProps) {
    return (
        <article className="about__content">
            <AboutName aboutName={aboutInfo.aboutName}/>
            <AboutSubTitle aboutSubTitle={aboutInfo.aboutSubTitle}/>
            <AboutSummary aboutSummary={aboutInfo.aboutSummary} />
            <AboutActions />
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
function AboutSubTitle({aboutSubTitle}:AboutSubTitleProps){
    return (
        <h2 className="about__SubTitle">
            {aboutSubTitle}
        </h2>
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

function AboutActions(){
    return(
        <div className="about__actions">
            <a
                className="about__actions-btn"
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
            >
                Open Resume
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