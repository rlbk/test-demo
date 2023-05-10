import { ReactElement } from 'react'
import { BlueModal } from '../Common'
import { FaHandshake } from 'react-icons/fa'
import { FiMessageSquare } from 'react-icons/fi'



const ResultEnquiry = (): ReactElement => {
    return (
        <div className='flex sm:h-24  flex-col justify-around sm:justify-between  items-start'>
            <BlueModal Icons={FiMessageSquare} title='Send Message' />
            <BlueModal Icons={FaHandshake} title='Request Collabration' />


        </div>
    )
}

export default ResultEnquiry