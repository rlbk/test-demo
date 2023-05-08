import { ReactElement } from "react"
import ResultDetails from "./ResultDetails"
import ResultEnquiry from "./ResultEnquiry"

const ResultModal = ({ searchedKeyword, searchedLocation }: { searchedKeyword: string, searchedLocation: string }): ReactElement => {
    return (
        <div className="mx-[auto] sm:mx-0 w-[60%] sm:w-[80%] my-4 flex flex-col sm:flex-row justify-between sm:items-center py-4 px-10 sm:p-6 shadow-md rounded    shadow-neutral-500/50">
            <ResultDetails imageSrc="" searchKeyword={searchedKeyword} searchLocation={searchedLocation} />
            <ResultEnquiry />
        </div>
    )
}

export default ResultModal