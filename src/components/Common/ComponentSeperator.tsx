import { ReactElement } from "react"
import ComponentTitle from "./ComponentTitle"

const ComponentSeperator = ({ title }: { title: string }): ReactElement => {
    return (
        <div className='my-6 border-t-2 text-lg border-neutral-300 relative'><ComponentTitle styles="text-lg top-[-16px]" title={title} /></div>
    )
}

export default ComponentSeperator