import { KeyboardEvent } from "react";
import { useContext } from "react";
import { ElementContext } from "../../../contexts/ElementContext";

export type ListItemType = {
    text: string,
    id: number | string
    pos: number
}

export interface ListItemProps {
    item: ListItemType,
    setTestItems: Function
}

const ListItem = ({ item, setTestItems }: ListItemProps) => {
    const ctx = useContext(ElementContext)

    const { id, text, pos } = item

    const updateItem = (value: string) => {
        const updatedItems = ctx!.testItems.map(elem => {
            if (elem.id === id) {
                elem.text = value
            }
            return elem
        })
        ctx!.setTestItems(updatedItems)
    }

    const keyPressHandler = (e: KeyboardEvent) => {
        if(e.key !== 'Enter') return
        const newItem = {
            id: Date.now(),
            text: '',
            pos: pos + 1
        } as ListItemType

        const newItems = [...ctx!.testItems].map(item => {
            if(item.pos < newItem.pos) return item
            item.pos += 1
            return item
        })
        
        setTestItems([...newItems, newItem])
    }

    return (
        <>
            <li className="bullet-list__item">
                <input className="bullet-list__input" type="text" value={text} onChange={(e) => updateItem(e.target.value)} onKeyPress={(e) => keyPressHandler(e)} />
            </li>

        </>
    );
}

export default ListItem;