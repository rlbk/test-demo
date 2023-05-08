import { ReactElement } from "react"

interface Props {
    logoTitle: string,
    navMenu: Array<string>
}



const NavBar = ({ logoTitle, navMenu }: Props): ReactElement => {

    return (
        <div className='w-full h-full flex flex-row justify-between items-center border-neutral-400 border-b-[3px] py-4 px-6'>
            <h1 className=" text-2xl md:text-3xl text-bold uppercase">{logoTitle}</h1>
            <ul className="flex flex-row">
                {navMenu.map((item, index): ReactElement => {
                    return <li key={index} className="text-base md:text-xl capitalize  px-2 md:px-4 hover:underline-offset-4 hover:text-sky-900/80 cursor-pointer">{item}</li>
                })}
            </ul>
        </div>
    )
}

export default NavBar