import { Dispatch, ReactElement } from 'react'
import SearchField from './SearchField'

interface Props {
    changeKeyword: Dispatch<string>,
    changeLocation: Dispatch<string>
}

const Search = ({ changeKeyword, changeLocation }: Props): ReactElement => {
    const searchByKeyword = {
        searchTitle: 'search by keyword',
        searchItems: ['NIT  Warangal', 'Nit']
    }
    const searchByLocation = {
        searchTitle: 'search by Location',
        searchItems: ['Karnataka', "kar"]
    }

    return (
        <div className='py-2 flex flex-row justify-between w-full'>
            <SearchField searchTitle={searchByKeyword.searchTitle} searchItems={searchByKeyword.searchItems} changeInputValue={changeKeyword} />
            <SearchField searchTitle={searchByLocation.searchTitle} searchItems={searchByLocation.searchItems} changeInputValue={changeLocation} />
        </div>
    )
}

export default Search