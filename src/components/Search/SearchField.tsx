import { Dispatch, ReactElement } from "react"
import { ComponentTitle } from "../Common"

interface Props {
    searchTitle: string,
    searchItems: string[],
    changeInputValue: Dispatch<string>
}


const SearchField = ({ searchTitle = 'search title', searchItems = ['search items'], changeInputValue }: Props): ReactElement => {
    return (
        <div className="w-[45%] md:w-[40%] border-[1px]  px-6 py-2 md:px-7 md:py-3 border-zinc-500 rounded-md relative">
            <label htmlFor="searches" className="text-sm md:text-base"><ComponentTitle styles="text-sm md:text-base top-[-12px]" title={searchTitle} /></label>
            <select name="searches" className="w-full bg-white py-1 o flex text-slate-600  capitalize justify-between outline-none border-none"
                onChange={(e) => { changeInputValue(e.target.value) }}
            >
                {searchItems.map((item, index): ReactElement => {
                    return <option key={index} value={item} className="w-full   text-xs md:text-sm lg:text-base"
                    >{item}</option>
                })}
            </select>
        </div>
    )
}

export default SearchField