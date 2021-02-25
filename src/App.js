import React from "react";
import './App.css';
import ReadContent from "./components/ReadContent";
import CreateContent from  "./components/CreateContent";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control";


class App extends React.Component  {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     subject:{title:"WEB", sub:"world wide web!"}
  //   }
  // }
  max_content_id = 3;
  state = {
    selected_content_id: 2,
    mode: "create",
    subject:{title:"WEB", sub:"world wide web!"},
    welcome:{title:"welcome", desc:"Hello, react!!!"},
    contents:[
      {id:1, title:"HTML", desc:"HTML is information"},
      {id:2, title:"CSS", desc:"CSS is for design"},
      {id:3, title:"Javascipt", desc:"Javascipt is for interactive"}
    ]
  }
  render() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[this.state.selected_content_id - 1].title;
      _desc = this.state.contents[this.state.selected_content_id - 1].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={(_title,_desc) => {
      this.max_content_id += 1;
      const _contents = this.state.contents.concat(
        {id:this.max_content_id, title:_title, desc:_desc}
      );
      this.setState({
        contents:_contents
      })
      }}></CreateContent>
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
            }} data={this.state.contents}>
          </TOC>
          <Control onChangeMode={(mode) => {
            this.setState({
              mode
            })
          }}></Control>
          {_article}
        </header>
      </div>
    );
  }
}

export default App;
