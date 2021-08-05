import { createElement } from "react";

export interface TextProps {
    text: string
}
 
const Text = ({ text }: TextProps) => {
    return createElement('p', {}, [text])
}
 
export default Text;