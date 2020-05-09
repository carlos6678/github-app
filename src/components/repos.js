import React from 'react'
import PropTypes from 'prop-types'

const Repos=({className,repos})=>(
    <div className={className}>
        <h2>Repositorios</h2>
        <ul>
            {repos.map((rep,index)=>(
                <li key={index}><a href={rep.url}>{rep.name}</a></li>
            ))}
        </ul>
    </div>
)

Repos.defaultProps={
    className:'',
    repos:[]
}

Repos.propTypes={
    className:PropTypes.string,
    repos:PropTypes.array.isRequired
}
export default Repos