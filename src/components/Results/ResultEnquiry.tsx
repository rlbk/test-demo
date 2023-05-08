import { ReactElement } from 'react'
import { BlueModal } from '../Common'

const ResultEnquiry = (): ReactElement => {
    return (
        <div className='flex sm:h-24  flex-col justify-around sm:justify-between  items-start'>
            <BlueModal icons='message' title='Send Message' />
            <BlueModal icons='hands' title='Request Collabration' />
        </div>
    )
}

export default ResultEnquiry