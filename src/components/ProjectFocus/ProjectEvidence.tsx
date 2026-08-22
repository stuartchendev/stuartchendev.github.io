import type {KeyboardEvent} from "react";

const evidenceBaseUrl = `${import.meta.env.BASE_URL}project-evidence/frl`;

function handleEvidenceKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const viewport = event.currentTarget;
    if (viewport.scrollWidth <= viewport.clientWidth) return;

    let nextScrollLeft: number | null = null;
    if (event.key === "ArrowLeft") nextScrollLeft = viewport.scrollLeft - 96;
    if (event.key === "ArrowRight") nextScrollLeft = viewport.scrollLeft + 96;
    if (event.key === "Home") nextScrollLeft = 0;
    if (event.key === "End") nextScrollLeft = viewport.scrollWidth;
    if (nextScrollLeft === null) return;

    event.preventDefault();
    viewport.scrollTo({left: nextScrollLeft, behavior: "auto"});
}

export function OverviewEvidence() {
    return (
        <figure className="focus-evidence focus-evidence--screenshot focus-evidence--overview">
            <div
                className="focus-evidence__image-frame"
                role="region"
                aria-label="Answer-phase interface screenshot"
                tabIndex={0}
                onKeyDown={handleEvidenceKeyDown}
            >
                <img
                    src={`${evidenceBaseUrl}/01-answering.png`}
                    alt="Frontend Reasoning Lab guided practice interface in the Answer phase"
                    loading="lazy"
                />
            </div>
            <p className="focus-evidence__scroll-hint">Swipe or scroll to inspect</p>
            <figcaption>A real guided-practice workspace with navigation, question context, and an application-owned answer flow.</figcaption>
        </figure>
    );
}

export function ProblemBoundaryComparison() {
    return (
        <figure className="focus-evidence focus-boundary-comparison">
            <figcaption>Where UI authority lives changes the reliability of the workflow.</figcaption>
            <div className="focus-boundary-comparison__paths">
                <div className="focus-boundary-path focus-boundary-path--risky">
                    <p className="focus-boundary-path__label">Risky</p>
                    <FlowNodes nodes={["Model output", "Directly controls UI"]}/>
                </div>
                <div className="focus-boundary-path focus-boundary-path--preferred">
                    <p className="focus-boundary-path__label">Preferred</p>
                    <FlowNodes nodes={["Model output", "Application-owned boundary", "UI"]}/>
                </div>
            </div>
        </figure>
    );
}

export function ApplicationOwnershipFlow() {
    return (
        <div className="focus-decision-evidence" aria-label="Application-owned workflow">
            <FlowNodes nodes={["User event", "Application state", "Derived UI"]}/>
        </div>
    );
}

export function ValidationFlow() {
    return (
        <div className="focus-dense-evidence">
            <div
                className="focus-dense-evidence__viewport"
                role="region"
                aria-label="Validated AI boundary flow"
                tabIndex={0}
                onKeyDown={handleEvidenceKeyDown}
            >
                <div className="focus-trust-boundary">
                    <div className="focus-trust-boundary__external">
                        <span className="focus-trust-boundary__eyebrow">External input · untrusted</span>
                        <strong>Model output</strong>
                    </div>
                    <span className="focus-trust-boundary__down-arrow" aria-hidden="true">↓</span>
                    <section className="focus-trust-boundary__owned" aria-label="Application-owned boundary">
                        <p className="focus-trust-boundary__eyebrow">Application-owned boundary</p>
                        <ol className="focus-trust-boundary__stages">
                            <li>Adapter</li>
                            <li>Schema validation</li>
                            <li>Semantic validation</li>
                            <li>Safe application result</li>
                        </ol>
                    </section>
                    <span className="focus-trust-boundary__down-arrow" aria-hidden="true">↓</span>
                    <div className="focus-trust-boundary__application-flow">
                        <FlowNodes nodes={["State transition", "Safe application state", "UI"]}/>
                    </div>
                </div>
            </div>
            <p className="focus-evidence__scroll-hint">Swipe or scroll to inspect</p>
        </div>
    );
}

export function RevisionEvidence() {
    return (
        <figure className="focus-evidence focus-evidence--screenshot focus-evidence--revision">
            <div
                className="focus-evidence__image-frame"
                role="region"
                aria-label="Revision-comparison interface screenshot"
                tabIndex={0}
                onKeyDown={handleEvidenceKeyDown}
            >
                <img
                    src={`${evidenceBaseUrl}/03-revision-comparison.png`}
                    alt="Frontend Reasoning Lab interface comparing an original answer with a revised answer"
                    loading="lazy"
                />
            </div>
            <p className="focus-evidence__scroll-hint">Swipe or scroll to inspect</p>
            <figcaption>The Review phase preserves the original and revised answers as visible comparison evidence.</figcaption>
        </figure>
    );
}

export function ResultSummary() {
    return (
        <aside className="focus-result-summary" aria-label="Core project outcome">
            <p className="focus-result-summary__statement">Model output is input,<br/>not UI authority.</p>
            <ul>
                <li>Explicit application boundaries</li>
                <li>Predictable state transitions</li>
                <li>Visible revision history</li>
            </ul>
        </aside>
    );
}

function FlowNodes({nodes}: {nodes: string[]}) {
    return (
        <div className="focus-flow">
            {nodes.map((node, index) => (
                <span className="focus-flow__step" key={node}>
                    <span className="focus-flow__node">{node}</span>
                    {index < nodes.length - 1 && <span className="focus-flow__arrow" aria-hidden="true">→</span>}
                </span>
            ))}
        </div>
    );
}
