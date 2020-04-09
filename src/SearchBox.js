import React from 'react'

const SearchBox = ({searchfield,onSearch}) =>{
    return(
        <div className='pa2'>
            <input  className='bg-lightest-blue pa3 tc ba' type='search' 
            placeholder='search friends' onChange={onSearch} />
        </div>
    );
}

export default SearchBox;