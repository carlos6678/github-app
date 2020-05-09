import React from 'react'
import Search from './search';
import UserInfo from './userInfo';
import Actions from './actions';
import Repos from './repos';
import LoadPesq from './loadPesq';
import LoadRepos from './loadRepos';

import PropTypes from 'prop-types';

const AppContent=({
    userinfo,
    repos,
    handleSearch,
    handleRepo,
    isFetching,
    isFetchingRepos
})=>(
    <div className="app">
        <Search handleSearch={handleSearch}/>
        {!!isFetching && <LoadPesq/>}
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        {!!userinfo && <Actions userinfo={userinfo} handleRepo={handleRepo}/>}
        {!!isFetchingRepos && <LoadRepos/>}
        {!!repos[0] && 
        <Repos 
            className="repos"
            repos={repos}
        />}
  </div>
)

AppContent.propTypes={
    repos:PropTypes.array.isRequired,
}

export default AppContent