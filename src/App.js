import React, { Component } from 'react'
import myImage from './assets/myImage.jpg'

 class App extends Component {
  // state containing a Person
    state = { 
     fullName :"Amen Allah Ben Toumi",
     bio:"currently I am doing a web development training at GOMYCODE and I wish to become full stack web MERN in a few months", 
     imgSrc: myImage,
      profession:"Web Developer",
      // boolean shows.
      show :false,
      // timeCounter initiaalisation 
      timeCounter :0
    } 
  //  toggles the show state arrow function
   touggelShow=()=>{
     this.setState({show: !this.state.show})
   }
  //  shows the time interval arrow function
   componentDidMount=()=>{
      setInterval(() => {
       this.setState({timeCounter: this.state.timeCounter+1})
     }, 1000);
   }
  render() {
    return (
      <div>
        {/* button that toggles the show state.  */}
        <button onClick={this.touggelShow}> {this.state.show ? "Hide" : "Show"}</button>
         {/* the time interval since the last component was mounted  */}
        <div>{this.state.timeCounter}</div>
        {this.state.show ?<div>
        <main>
          <ul id="cards">
            <li className="card" id="card_2">
              <div className="card__content">
                <div>
                    <h2>{this.state.fullName}</h2>
                    <p>{this.state.bio}</p>
                    <p><a href="#top" className="btn btn--accent">{this.state.profession}</a></p>
                </div>
                <figure>
                  <img src={this.state.imgSrc} alt="myImage" />
                </figure>
              </div>
            </li>
          </ul>
        </main>
      </div> :null}
      </div>
    )
  }
}

export default App;
 