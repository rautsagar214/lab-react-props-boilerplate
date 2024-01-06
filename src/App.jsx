import './App.css';





function App(props) {
  let data = props.props;
  
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
      <img src={data[0].img} alt="" width={"100%"} />
      <img src={data[1].img} alt="" width={"100%"} />
      <img src={data[2].img} alt="" width={"100%"} />
      <img src={data[3].img} alt="" width={"100%"} />
      
    </div>

    
    </>
  )
}

export default App;
