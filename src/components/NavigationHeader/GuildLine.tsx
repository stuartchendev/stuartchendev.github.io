import type {LanguageUi} from "../../types/i18n";
import HeaderBrand from "./GuildLineHeaderBrand";
import HeaderGuildLine from "./GuildLineHeader";

type GuildLineProps = {
    languageUi: LanguageUi;
}
type HeaderSpanProps={
    type: string,
    spanContent: string;
}

function GuildLine({ languageUi }:GuildLineProps) {

    //NOTE: activeSection

    return (
        <div className="header__left">
            <HeaderBrand>
                <HeaderSpan type="name" spanContent={languageUi.guildLineHeaderName}/>
                <HeaderSpan type="role" spanContent={languageUi.guildLineHeaderRole}/>
            </HeaderBrand>
            <HeaderGuildLine>
                <HeaderSpan type="section" spanContent={languageUi.aboutTitle}/>
                <HeaderSpan type="section" spanContent={languageUi.guildLineHeaderSection}/>
            </HeaderGuildLine>
        </div>
    )
}

function HeaderSpan({ type, spanContent }: HeaderSpanProps) {
    return (
        <span className={`header__${type}`}>{spanContent}</span>
    )
}

export default GuildLine;