type DetailSectionProps = {
    sectionKey: string;
    title: string;
    items: string[];
};

type SectionTitleProps = {
    title: string;
}
type SectionContentProps = {
    items: string[];
}

type SectionListProps = {
    items: string[];
}

type SectionItemProps = {
    item: string;
}

function DetailSection({sectionKey, title, items}: DetailSectionProps) {
    return (
        <section className={`detail__section-${sectionKey}`}>
            <SectionTitle title={title}/>
            <SectionContent items={items}/>
        </section>
    );
}

function SectionTitle({title}: SectionTitleProps) {
    return (
        <h3 className="detail__section-title">{title}</h3>
    )
}

function SectionContent({items}: SectionContentProps) {
    return (
        <div className="detail__section-content">
            <SectionList items={items}/>
        </div>
    )
}


function SectionList({items}: SectionListProps) {
    return (
        <ul className="detail__list">
            {items.map((item: string, idx: number) => (
                <SectionItem item={item} key={`${idx}-${item.slice(0, 10)}`}/>
            ))}
        </ul>
    );
}

function SectionItem({item}: SectionItemProps) {
    return (
        <li className={"detail__list-item"}>
            {item}
        </li>
    )
}

export default DetailSection;