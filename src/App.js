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
    selected_content_id: 2,
    mode: "welcome",
    subject:{title:"WEB", sub:"world wide web!"},
    welcome:{title:"welcome", desc:"Hello, react!!!"},
    contents:[
      {id:1, title:"HTML", desc:"HTML is information"},
      {id:2, title:"CSS", desc:"CSS is for design"},
      {id:3, title:"Javascipt", desc:"Javascipt is for interactive"}
    ]
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[this.state.selected_content_id - 1].title;
      _desc = this.state.contents[this.state.selected_content_id - 1].desc;
    }
    return (
      <div className="App">
        <header className="App-header">
          <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            onChangePage={() => {
              this.setState({mode:"welcome"});
            }}
          >
          </Subject>
          <TOC onChangePage={(id) => {
            this.setState({
              mode:"read",
              selected_content_id: Number(id)
            });
          }} data={this.state.contents}></TOC>
          <Content title={_title} desc={_desc}></Content>
        </header>
      </div>
    );
  }
}

export default App;
