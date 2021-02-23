import React from "react";
import './App.css';
import Content from "./components/Content";
import Subject from "./components/Subject";
import TOC from "./components/TOC";


class App extends React.Component  {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     subject:{title:"WEB", sub:"world wide web!"}
  //   }
  // }
  state = {
    subject:{title:"WEB", sub:"world wide web!"},
    contents:[
      {id:1, title:"HTML", desc:"HTML is information"},
      {id:2, title:"CSS", desc:"CSS is for design"},
      {id:3, title:"Javascipt", desc:"Javascipt is for interactive"}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}>
          </Subject>
          <TOC data={this.state.contents}></TOC>
          <Content title="HTML" desc="HTML is Hypertext Markup Language"></Content>
        </header>
      </div>
    );
  }
}

export default App;
