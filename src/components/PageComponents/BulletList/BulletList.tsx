import ListItem, { ListItemType } from "./ListItem"

export interface BulletListProps {
    items: ListItemType[],
    setTestItems: Function
}

const BulletList = ({ items, setTestItems }: BulletListProps) => {
    return (
        <div className="bullet-list">
            <ul className="bullet-list__items">
                {items
                .sort((a, b) => a.pos - b.pos)
                .map((item) => <ListItem key={item.id} item={item} setTestItems={setTestItems} />)}
            </ul>
        </div>

    );
}

export default BulletList;