import { useContext } from "react";
import { ElementContext } from "../contexts/ElementContext";
import BulletList from "./PageComponents/BulletList/BulletList";
import Heading from "./PageComponents/Heading";
import Text from "./PageComponents/Text";

export interface ContainerProps {
    sidebarOpenned: boolean,
    setSidebarOpenned: Function
}

const Container = ({ sidebarOpenned, setSidebarOpenned }: ContainerProps) => {
    const elementContex = useContext(ElementContext)    

    return (
        <div className={`container ${sidebarOpenned ? 'container--short' : ''}`}>
            <Heading text="some test" size={1} />
            <Text text="some text" />
            <BulletList items={elementContex!.testItems} setTestItems={elementContex!.setTestItems} />
        </div>
    );
}

export default Container;