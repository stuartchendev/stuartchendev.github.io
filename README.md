## 1️⃣ Project Goal

> This repository is a React-based version of my personal portfolio.
>
>
> The goal is to gradually migrate selected UI parts from my vanilla JavaScript portfolio to React, focusing on component structure and state-driven UI.
>

## 2️⃣ Why use React

- Reduce manual DOM manipulation
- Improve UI state clarity
- Prepare for scalable component-based structure

## 3️⃣ Current Process

- [X]  ProjectsPage component for projects list, modal behavior
    - [X]  ProjectCard component with local state
    - [X]  Project list rendering
    - [X]  Modal refactor
    - [ ]  Filter / tag system

## 🧩 Current Feature
### 1. ProjectsPage

- Single source of truth: `activeProjectId`
- Selected project are derived from `activeProjectId`
- Avoids duplicated UI state and keeps data flow predictable


> 📖KeyNote
> 
> **Overlay clicked close Modal:**
> 
> The overlay and modal are rendered as siblings rather than nested elements.
> 
> This structural separation ensures that clicking inside the modal does not trigger the overlay’s close behavior, avoiding accidental modal dismissal without relying on event propagation hacks.


👀 Future extension: 
loading / error state can be colocated with modal content state.



#### 🤫 DevNote
- Project detail UI is implemented as a replaceable shell (modal / drawer) to keep state independent from layout choice.


### Why not use a boolean state for the detail view?

Because the core interaction is selecting a project entity.
The UI (modal or drawer) is a presentation detail, not the state itself.
