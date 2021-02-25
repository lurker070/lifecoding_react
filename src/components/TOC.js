import React from "react"

class TOC extends React.Component {
    shouldComponentUpdate(newProps, newState){
        if (this.props.data === newProps.data){
            return false;
        }
        return true;
    }
    render() {
        const data = this.props.data;
        return (
            <nav>
                {data.map(data => (
                    <li key={data.id}>
                        <a href={"/content/"+data.id} 
                        data-id = {data.id}
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onChangePage(event.target.dataset.id);
                        }}>{data.title}
                        </a>
                    </li>
                ))}
            </nav> 
        );
    }
  }

export default TOC;