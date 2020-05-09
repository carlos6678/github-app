import React from 'react'
import PropTypes from 'prop-types'

const Search=({handleSearch,isDisable})=>(
    <div className="search">
        <input 
        type="text" 
        placeholder="Digite o nome do Usuario" 
        className="search-user"
        onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes={
    handleSearch:PropTypes.func.isRequired
}

export default Search