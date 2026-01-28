import type {AboutDescriptionItem, AboutInfo} from "../../types/i18n";

type AboutSectionContentProps= {
    aboutInfo: AboutInfo;
}
type AboutNameProps= Pick<AboutInfo, "aboutName">
type AboutSubTitleProps = Pick<AboutInfo, "aboutSubTitle">
type AboutDescriptionProps = {
    aboutDescription: AboutInfo["aboutDescription"];
}
type AboutPhaseProps = {
    phase: AboutDescriptionItem;
}

function AboutSectionContent({aboutInfo}:AboutSectionContentProps) {
    return (
        <article className="about__content">
            <AboutName aboutName={aboutInfo.aboutName}/>
            <AboutSubTitle aboutSubTitle={aboutInfo.aboutSubTitle}/>
            <AboutDescription aboutDescription={aboutInfo.aboutDescription}/>
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

function AboutDescription({aboutDescription}:AboutDescriptionProps){
    return (
            <AboutPhase phase={aboutDescription} />
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

export default AboutSectionContent;