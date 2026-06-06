export type LanguageUi =  Partial<{
    guildLineHeaderSection: string;
    guildLineHeaderRole: string;
    guildLineHeaderName: string;
    resume: ResumeLink;
    socialLink: SocialLink[];
    aboutTitle: string;
    aboutInfo: AboutInfo;
    contactIntro: string;
    // future add
}>;
export type ResumeLink = {
    label: string;
    href: string;
}
export type SocialLink ={
    type: string;
    href: string;
    label: string;
}

export type AboutInfo = {
    aboutName: string;
    aboutSubTitle: string;
    jobLocation: string;
    aboutSummary: AboutDescriptionItem;
    aboutDetails: AboutDescriptionItem;
};

export type AboutDescriptionItem = {
    parts: TextPart[];
};

export type TextPart =
    | { type: "text"; text: string; strong?: boolean;}
    | { type: "br"};