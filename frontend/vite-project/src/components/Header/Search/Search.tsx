const Search = () => {
    return(
        <form className="max-w-md">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:hidden focus-within:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" className="block h-10 focus:bg-dark-hover-search w-80 p-4 ps-10 text-sm text-gray-900 border border-dark-blue-outline rounded-lg bg-regal-blue dark:bg-dark-regal-blue dark:border-dark-blue-outline dark:placeholder-gray-400 dark:text-white" placeholder="Поиск" required />
        </div>
    </form>
    )
}


//     border-radius: 6px;

export default Search;