import type {Project} from "../../types/project"
import type {LanguageId} from "../../types/i18n"
import raw from "./projectsData.json"


export const projectsData = raw as Record<LanguageId, Project[]>;