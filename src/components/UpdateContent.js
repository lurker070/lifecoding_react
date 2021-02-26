import React from "react"

class UpdateContent extends React.Component {
state = {
  id: this.props.data.id,
  title: this.props.data.title,
  desc: this.props.data.desc
}
inputFormHandler = (event) => {
  this.setState({[event.target.name]:event.target.value});
}
render (){
  return (
    <article>
      <h2>Update</h2>
      <form action="/create_proces" method="post"
        onSubmit={(event) => {
          event.preventDefault();
          this.props.onSubmit(
            this.state.id,
            this.state.title,
            this.state.desc
          );
        }}
      >
        <input type="hidden" name="id" value={this.state.id}></input>
        <p>
          <input 
            type="text" 
            name="title" 
            placeholder="title" 
            value={this.state.title}
            onChange={this.inputFormHandler}
          ></input>
        </p>
        <p>
          <textarea 
            name="desc" 
            placeholder="discription" 
            value={this.state.desc} 
            onChange={this.inputFormHandler}
          ></textarea>
        </p>
        <p><input type="submit"></input></p>
      </form>
    </article>
    );
  }
}

export default UpdateContent;
