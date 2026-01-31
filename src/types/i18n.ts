export type LanguageId = "en" | "zh-Tw" | "ja";

export type LanguageUi =  Partial<{
    guildLineHeaderSection: string;
    guildLineHeaderRole: string;
    guildLineHeaderName: string;
    socialLink: SocialLink[];
    aboutTitle: string;
    aboutInfo: AboutInfo;
    contactTitle: string;
    contactLabelName: string;
    contactLabelEmail: string;
    contactLabelMessage: string;
    // future add
}>;
export type SocialLink ={
    type: string;
    href: string;
    label: string;
}

export type AboutInfo = {
    aboutName: string;
    aboutSubTitle: string;
    aboutDescription: AboutDescriptionItem;
};

export type AboutDescriptionItem = {
    parts: TextPart[];
};

export type TextPart =
    | { type: "text"; text: string; strong?: boolean;}
    | { type: "br"};