import React,{Component} from 'react';
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      userinfo:null,
      repos:[],
      isFetching:false,
      isFetchingRepos:false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleRepo = this.handleRepo.bind(this)
  }
  handleSearch(e){
    if(e.keyCode===13){
      e.persist()
      e.target.disabled=true
      this.setState({isFetching:true})
      ajax().get(`https://api.github.com/users/${e.target.value}`)
      .then((result)=>{
          this.setState({
            userinfo:{
              username:result.name,
              photo:result.avatar_url,
              login:result.login,
              repos:result.public_repos,
              followers:result.followers,
              following:result.following
            },
            repos:[]
          })
      }).always(()=>{
          this.setState({isFetching:false})
          e.target.disabled=false
        })
    }
  }
  handleRepo(name){
    this.setState({
      isFetchingRepos:true
    })
    let dados=[]
    let cont=0;
    var requests=setInterval(()=>{
      cont++
      ajax().get(`https://api.github.com/users/${name}/repos?page=${cont}`)
      .then((result)=>{
        if(!!result[0]){
          result.forEach(element => {
            dados.push({name:element.full_name,url:element.html_url})
          });
        }else{
          this.setState({
            repos:dados,
            isFetchingRepos:false
          })
          clearInterval(requests)
        }
      })
    },2000)
  }
  render(){
    return <AppContent
    {...this.state}
    handleSearch={this.handleSearch}
    handleRepo={this.handleRepo}
    />
  }
}