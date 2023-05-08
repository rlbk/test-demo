import React, { ReactElement } from 'react'

const ResultDetails = ({ imageSrc, searchKeyword, searchLocation }: { imageSrc: string, searchKeyword: string, searchLocation: string }): ReactElement => {
    return (
        <div className='mb-4 sm:mb-0 flex items-center'>{imageSrc ? <img src={imageSrc} alt="result review" /> : <div className=' w-28 sm:h-24 sm:w-24 bg-slate-500'></div>}
            <div className='ml-2'><p >{searchKeyword}</p>
                <p className='text-sm text-slate-500'>{searchLocation}</p>
            </div>
        </div>
    )
}

export default ResultDetails