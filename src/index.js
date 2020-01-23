


class App extends React.Component {
  
  constructor (props){
    super(props)

    this.state={
      v:false,
      count:1
    }
    console.log('fucking')

  }
 
  render () {
    
    return (
    <div >
      <header >
         <h1> hi </h1>
        <p>
        {this.state.v ? <p>true</p>:<p>false</p>}
          hwo to fuck the website
        </p>
          <button >{this.state.count}</button>
          <button onClick={()=>{
          this.setState({
            count:this.state.count +1
          })
          
          }}>click me</button>


          Learn React
       
      </header>
    </div>
  );}
}

ReactDOM.render(<App />,document.getElementById('root'));
