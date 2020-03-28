import React from 'react'

export default function SearchBox({searchBoxChange})  {

     return (
        <div>
            <input onInput={searchBoxChange} className=" pa2 ba1 b--green bg-lightest-blue " type="search" name="search" id="search" placeholder="Search Box"/>
        </div>
    )
}
