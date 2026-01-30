## Project Overview

This is a personal portfolio website built with React and TypeScript.

The goal of this project is to present my frontend projects in a clear and maintainable way,
while practicing component design, state responsibility, and data-driven UI patterns.

The site supports multiple languages and is structured to be easily extended in the future.

## Why React and TypeScript

This project uses React to reduce manual DOM manipulation and to make UI state more explicit.

TypeScript is introduced to improve type safety between components and data,
and to make future refactoring and feature extension more predictable.

## Key Features

- Multi-language support (i18n)
- Project list with detail view (modal-based)
- Data-driven UI structure
- Reusable layout and navigation components

## Technical Decisions & Architecture

This portfolio focuses on building a maintainable and scalable front-end architecture,
rather than implementing features all at once.


### State Responsibility

At the application level, I store only user-driven state, such as the active language.

This avoids mixing UI concerns with data logic and keeps the state model simple.

Project data itself is treated as non-UI state and is interpreted by feature components when needed.


### Project Detail Interaction Design

I use `activeProjectId` as the single source of truth for project detail interactions.

The selected project is derived from this id, which avoids duplicated UI state
and keeps the data flow predictable.


>### **Why not a boolean state?**
>Because the core interaction is selecting a project entity.
>The UI presentation (modal or drawer) is a detail, not the state itself.

> ### **Overlay Click Handling**
>
> The overlay and modal are rendered as siblings rather than nested elements.
> This prevents accidental modal dismissal without relying on event propagation hacks.

### Modal Structure Decision

The overlay and modal are rendered as siblings rather than nested elements.

This prevents accidental modal dismissal without relying on event propagation hacks.


## Future Improvements

- Introduce project filtering and tagging based on existing project data.
- Improve responsive layout and mobile interactions.
- Extend project detail view to support loading and error states when integrating APIs.






