import React from 'react'

const Actions=({userinfo,handleRepo})=>(
    <div className="actions">
        <button onClick={()=>handleRepo(userinfo.username)}>Ver Repositorios</button>
    </div>
)

export default Actions