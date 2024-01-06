import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{
  constructor(props){
    super();
    this.data = props ;

  }


  // code here
  render(){
    console.log(this.data.props)
    
    let galleryStyle = {
      textAlign:"center"
    }
    let styleMyDiv = {
      display:"grid",
      gridTemplateColumns:"48.5% 48.5%",
      gridGap:"1%"
    }
    return(
      <>
        <h1 style={galleryStyle}>Kalvium Gallery</h1>
    
        <div style={styleMyDiv}>
          <img src={this.data.props[0].img} alt="" width={"100%"} />
          <img src={this.data.props[1].img} alt="" width={"100%"} />
          <img src={this.data.props[2].img} alt="" width={"100%"} />
          <img src={this.data.props[3].img} alt="" width={"100%"} />
          
        </div>
    
        
        </>
      )
  }
}
