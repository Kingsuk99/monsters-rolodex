import React,{Component} from 'react';

import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box.component';




class App extends Component {
  constructor(){
    super();
    this.state={
     
      // monsters:[
      //   {name:'Frankenstein',id:'bb'},
      //   {name:'Dracula',id:'cc'},
      //   {name:'Zombie',id:'dd'},
      // ]
      monsters:[],
      searchField:null,
      finalFilteredMonster:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(
      response=>response.json())
      .then(users=>this.setState({monsters:users}))
  }
   filterFunction=(searchField)=>{
    
    return function(x){
      return x.name.toLowerCase().includes(searchField.toLowerCase())||!searchField;
    }
  }
  storeFilterValue=(event)=>{
   
    
    this.setState({searchField:event.target.value});
    /**Value is set asynchroniously above*/

    // this.setState({searchField:event.target.value},()=>{
    //   console.log('State value synchronous',this.state.searchField)
    // });


  }
render(){
const {monsters,searchField}=this.state;

let filteredMonster=monsters;
if(monsters !==null && monsters.length !==0 && searchField !==null){
 
 filteredMonster =monsters.filter(this.filterFunction(searchField))

  
}

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder ='Search Monster' handleChange={this.storeFilterValue}/>
      {/* <CardList name="Kingsuk">
      

      {this.state.monsters.map(monster=><h1 key={monster.name}>
        {monster.name}
      </h1>)}
      </CardList> */}
      {/* <CardList monsters={this.state.monsters} /> */}
      <CardList monsters={filteredMonster} />


      
 
    </div>
  );

}
  
}

export default App;
