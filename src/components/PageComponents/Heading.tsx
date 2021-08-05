import {createElement} from 'react'

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps {
    text: string;
    size: HeadingSize
}
 
const Heading = ({ text, size }: HeadingProps) => {
    return createElement(`h${size}`, {}, [text])
}
 
export default Heading;