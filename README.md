## 1️⃣ Project Goal

> This repository is a React-based version of my personal portfolio.
>
>
> The goal is to gradually migrate selected UI parts from my vanilla JavaScript portfolio to React, focusing on component structure, state-driven UI and state designed.
>

## 2️⃣ Why use React

- Reduce manual DOM manipulation
- Improve UI state clarity
- Prepare for scalable component-based structure

### 🧠 Architecture & State Design

This portfolio project focuses on building a maintainable and scalable front-end architecture rather than implementing features all at once.

At the application level, I store only user-driven state, such as the active language, to avoid mixing UI concerns with data logic. Each page or feature component is responsible for interpreting data based on that state, which keeps responsibilities clear and prevents unnecessary coupling.

Project data is treated as non-UI state, while modal interactions are driven by explicit selection state. This separation allows the project to scale naturally when introducing APIs, persistent storage, or route-based navigation in the future.


## 3️⃣ Current Process
- [ ]  RWD Design
- [ ]  NavigationHeader
    - [ ] GuildLine
    - [ ] LanguageOptions
- [ ]  MainLayout
   - [ ]  AboutSection
   - [X]  ProjectsPage component for projects list, modal behavior
      - [X]  ProjectCard component with local state
      - [X]  Project list rendering
      - [X]  Modal refactor
      - [ ]  Filter / tag system
   - [ ] ContactSection
- [ ] Footer
   - [ ] FooterTools
     - [ ] back to top btn
     - [ ] dark Theme switch
   - [ ] FooterContent

## 🧩 Current Feature
### 1. ProjectsPage

- Single source of truth: `activeProjectId`
- `selectedProject` are derived from `activeProjectId`
- Avoids duplicated UI state and keeps data flow predictable


> 📖KeyNote
> 
> **Overlay clicked close Modal:**
> 
> The overlay and modal are rendered as siblings rather than nested elements.
> 
> This structural separation ensures that clicking inside the modal does not trigger the overlay’s close behavior, avoiding accidental modal dismissal without relying on event propagation hacks.


### Why not use a boolean state for the detail view?

Because the core interaction is selecting a project entity.
The UI (modal or drawer) is a presentation detail, not the state itself.


#### 🤫 DevNote
- Project detail UI is implemented as a replaceable shell (modal / drawer) to keep state independent from layout choice.


👀 Future extension:
loading / error state can be colocated with modal content state.




