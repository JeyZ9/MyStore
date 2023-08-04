// HamburgerMenu.js
import React, { useState } from 'react';
import { VscSearch } from "react-icons/vsc";


// search btn
const SearchBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Search = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex relative flex-row-reverse justfy-center items-center">
      <button
        onClick={Search}
        className="block lg:hidd text-white p-2 rounded-md"
      >
        <svg
          className="h-[20px] w-[20px] text-[24px] text-black hover:scale-125 flex"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <VscSearch />
          )}
        </svg>
      </button>

      
      {isOpen && (
        <div className="absolute rounded-lg py-1 w-[300px] -translate-x-[2.5vw]"> 
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[50px] bg-white focus:ring-gray-200 focus:border-gray-500 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-gray-200 dark:focus:border-gray-500" placeholder="Search..." required />
                    <button type="submit" class="translate-y-[6.5px] text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:outline-none font-medium rounded-[50px] text-sm px-2 py-2 dark:bg-gray-500 dark:hover:bg-grayY-700 dark:focus:ring-blue-800">
                      <VscSearch />
                    </button>
                </div>
        </div>
      )}
    </div>
  );
};

export default SearchBtn;
