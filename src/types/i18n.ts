export type LanguageId = "en" | "zh-Tw" | "jp";

export type LanguageUi =  Partial<{
    aboutTitle: string;
    aboutInfo: AboutInfo;
    // future add
}>;

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