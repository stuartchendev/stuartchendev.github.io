import {Link} from "react-router-dom";

type BackToProjectsLinkProps = {
    className?: string;
};

function BackToProjectsLink({className = ""}: BackToProjectsLinkProps) {
    return (
        <Link className={`focus-back ${className}`.trim()} to="/#projects">
            ← Back to Projects
        </Link>
    );
}

export default BackToProjectsLink;
