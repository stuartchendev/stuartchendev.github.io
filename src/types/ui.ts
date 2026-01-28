import type {Project} from "./project";

export type DisplayMode = "modal" | "drawer";
export type OnClose = () => void;
export type OnSelectProject = (id: Project["id"]) => void;