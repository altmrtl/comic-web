import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search flex justify-center items-center mt-10">
            <div className="flex items-center border border-gray-200 rounded px-2 py-1 w-64">
                {/* Icon on the left */}
                <img src="/search.svg" alt="search" className="h-6 w-6 mr-2" />

                {/* Centered text in the input */}
                <input
                    type="text"
                    placeholder="Search comic"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 text-center bg-transparent outline-none text-white"
                />
            </div>
        </div>
    );
};

export default Search;
