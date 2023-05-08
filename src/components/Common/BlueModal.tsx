import { ReactElement } from 'react'
import { FaHandshake } from 'react-icons/fa'
import { FiMessageSquare } from 'react-icons/fi'


const BlueModal = ({ icons, title }: { icons: string, title: string }): ReactElement => {
    return (
        <div className="bg-sky-500  hover:bg-sky-600 cursor-pointer  text-white text-xs sm:text-sm flex flex-row justify-between items-center mb-2 sm:mb-0 px-2 py-1 rounded-md">
            {icons == 'message' ? <FiMessageSquare size={26} /> : <FaHandshake size={30} />}
            <p className='ml-2 sm:ml-3 capitalize'>{title}</p>
        </div>
    )
}

export default BlueModal