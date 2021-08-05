import { ReactNode } from "react";
import { createContext, useState } from "react";
import { ListItemType } from "../components/PageComponents/BulletList/ListItem";

interface ElementContextInterface {
    testItems: ListItemType[];
    setTestItems: Function
}

type ElementContextPropTypes = {
    children: ReactNode
}

export const ElementContext = createContext<ElementContextInterface | null>(null)

const ElementContextProvider = ({ children }: ElementContextPropTypes) => {
    const [testItems, setTestItems] = useState<ListItemType[]>([
        { text: 'list item num 1', id: 1, pos: 0 },
        { text: 'list item num 2', id: 2, pos: 1 },
        { text: 'list item num 3', id: 3, pos: 2 }
    ])

    return (
        <ElementContext.Provider value={{ testItems, setTestItems }}>
            {children}
        </ElementContext.Provider>
    );
}

export default ElementContextProvider;