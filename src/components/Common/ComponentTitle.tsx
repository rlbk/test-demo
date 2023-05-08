import { ReactElement } from "react"


const ComponentTitle = ({ title, styles }: { title: string, styles: string }): ReactElement => {
    return (
        <p className={`${styles} absolute  left-4  capitalize  bg-white px-2`}>{title}</p>
    )
}

export default ComponentTitle