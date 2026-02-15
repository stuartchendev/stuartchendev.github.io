type ProjectsStateViewProps = {
    status: "loading" | "error";
    message?: string;
    onRetry?: () => void;
};
function ProjectsStateView({
                                              status,
                                              message,
                                              onRetry,
                                          }: ProjectsStateViewProps) {
    return (
        <div className="projects__state">
            {status === "loading" && (
                <>
                    <div className="spinner" />
                    <p className="projects__stateTitle">Loading projects…</p>
                    <p className="projects__stateHint">Please wait.</p>
                </>
            )}

            {status === "error" && (
                <>
                    <p className="projects__stateTitle">Something went wrong</p>
                    <p className="projects__stateHint">{message}</p>

                    {onRetry && (
                        <div className="projects__stateActions">
                            <button className="btn btn--primary" onClick={onRetry}>
                                Retry
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default ProjectsStateView;