import type { SocialLink} from "../../types/i18n";

type MediaLinkListProps={
    links: SocialLink[];
}
type MediaLinkItemProps = {
    link: SocialLink;
}

function MediaLinkList({ links }: MediaLinkListProps) {
    return(
        <div className="media-links">
            {links.map((link, index) => (
                <MediaLinkItem link={link} key={index} />
            ))}
        </div>
    );
}
function MediaLinkItem({ link }: MediaLinkItemProps) {
    const { href, label } = link;

    return (
        <a
            className="media-link"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={typeof label === "string" ? label : "social link"}
        >
            {label}
        </a>
    );
}

export default MediaLinkList;