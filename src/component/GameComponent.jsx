import React, {Component} from 'react'
import "./GameComponent.css"

class GameComponent extends Component{

  constructor(props){
    super(props);

    this.state= {

         b1 : false, b2 : false, b3 : false, b4 : false, b5 : false,  b6 : false, b7 : false,   b8 : false,  b9 : false,

         bt1Text : "",  bt2Text : "",   bt3Text : "", bt4Text : "",  bt5Text : "", bt6Text : "", bt7Text : "",  bt8Text : "", bt9Text : "",
         
         player : "O",
         hasWinnr : false
    }

    this.handleButton=this.handleButton.bind(this);
    this.checkWinner=this.checkWinner.bind(this);
    this.getWinner=this.getWinner.bind(this);
  }
  

  handleButton(event){

      if(event.target.name ==="btn1"){
         

        if(!this.state.b1){

            this.setState({
              b1 : true,
            })

            if(this.state.player === "O"){

              event.target.style.backgroundColor = "#ffc107";

              this.setState({
                bt1Text : "O",
                player : "X"
              })
            }else if(this.state.player === "X"){
              event.target.style.backgroundColor = "#c41c00";
              this.setState({
                bt1Text : "X",
                player : "O"
              })
            }
        }
         
      }

      else if(event.target.name ==="btn2"){                       // button 2      

        if(!this.state.b2){

            this.setState({
              b2 : true,
            })

            if(this.state.player === "O"){
              event.target.style.backgroundColor = "#ffc107";
              this.setState({
                bt2Text : "O",
                player : "X"
              })
            }else if(this.state.player === "X"){
              event.target.style.backgroundColor = "#c41c00";
              this.setState({
                bt2Text : "X",
                player : "O"
              })
            }

        }
         
      }

      else if(event.target.name ==="btn3"){                       // button 3

        if(!this.state.b3){

            this.setState({
              b3 : true,
            })

            if(this.state.player === "O"){
              event.target.style.backgroundColor = "#ffc107";
              this.setState({
                bt3Text : "O",
                player : "X"
              })
            }else if(this.state.player === "X"){
              event.target.style.backgroundColor = "#c41c00";
              this.setState({
                bt3Text : "X",
                player : "O"
              })
            }


        }
         
      }

      else if(event.target.name ==="btn4"){                       // button 4
     
        if(!this.state.b4){

            this.setState({
              b4 : true,
            })

            if(this.state.player === "O"){
              event.target.style.backgroundColor = "#ffc107"; 
              this.setState({
                bt4Text : "O",
                player : "X"
              })
            }else if(this.state.player === "X"){
              event.target.style.backgroundColor = "#c41c00";
              this.setState({
                bt4Text : "X",
                player : "O"
              })
            }

        }
         
      }

      else if(event.target.name ==="btn5"){                       // button 5
     
        if(!this.state.b5){

            this.setState({
              b5 : true,
            })

            if(this.state.player === "O"){
              event.target.style.backgroundColor = "#ffc107";   
              this.setState({
                bt5Text : "O",
                player : "X"
              })
            }else if(this.state.player === "X"){
              event.target.style.backgroundColor = "#c41c00";   
              this.setState({
                bt5Text : "X",
                player : "O"
              })
            }

        }
         
      }

      else if(event.target.name ==="btn6"){                       // button 6
    
        if(!this.state.b6){

            this.setState({
              b6 : true,
            })

            if(this.state.player === "O"){
              event.target.style.backgroundColor = "#ffc107";     
              this.setState({
                bt6Text : "O",
                player : "X"
              })
            }else if(this.state.player === "X"){
              event.target.style.backgroundColor = "#c41c00";
              this.setState({
                bt6Text : "X",
                player : "O"
              })
            }
        }
         
      }

      else if(event.target.name ==="btn7"){                       // button 7
   
        if(!this.state.b7){

            this.setState({
              b7 : true,
            })

            if(this.state.player === "O"){
              event.target.style.backgroundColor = "#ffc107"; 
              this.setState({
                bt7Text : "O",
                player : "X"
              })
            }else if(this.state.player === "X"){
              event.target.style.backgroundColor = "#c41c00";
              this.setState({
                bt7Text : "X",
                player : "O"
              })
            }
        }
         
      }

      else if(event.target.name ==="btn8"){                       // button 8
     
        if(!this.state.b8){

            this.setState({
              b8 : true,
            })

            if(this.state.player === "O"){
              event.target.style.backgroundColor = "#ffc107";
              this.setState({
                bt8Text : "O",
                player : "X"
              })
            }else if(this.state.player === "X"){
              event.target.style.backgroundColor = "#c41c00";
              this.setState({
                bt8Text : "X",
                player : "O"
              })
            }

           
        }
         
      }

      else if(event.target.name ==="btn9"){                       // button 9
    
        if(!this.state.b9){

            this.setState({
              b9 : true,
            })

            if(this.state.player === "O"){
              event.target.style.backgroundColor = "#ffc107"; 
              this.setState({
                bt9Text : "O",
                player : "X"
              })
            }else if(this.state.player === "X"){
              event.target.style.backgroundColor = "#c41c00";
              this.setState({
                bt9Text : "X",
                player : "O"
              })
            }
               
        }
         
      }

      // this.getWinner();

      
  }


  getWinner=()=>{

    if(!this.state.hasWinnr){
      if((this.state.bt1Text === 'O' && this.state.bt2Text === "O" && this.state.bt3Text === "O") || (this.state.bt4Text === "O" && this.state.bt5Text === "O"&& this.state.bt6Text === "O") || (this.state.bt7Text === "O" && this.state.bt8Text === "O" && this.state.bt9Text === "O")){
        this.setState({
          hasWinnr : true
        })
        alert("Winner is O");
       
      }
      else if((this.state.bt1Text === 'X' && this.state.bt2Text === "X" && this.state.bt3Text === "X") || (this.state.bt4Text === "X" && this.state.bt5Text === "X" && this.state.bt6Text === "X") || (this.state.bt7Text === "X" && this.state.bt8Text === "X" && this.state.bt9Text === "X")){
        this.setState({
          hasWinnr : true
        })
        alert("Winner is X");
      }
      else if((this.state.bt1Text === 'O' && this.state.bt4Text === "O" && this.state.bt7Text === "O") || (this.state.bt2Text === "O" && this.state.bt5Text === "O"&& this.state.bt8Text === "O") || (this.state.bt3Text === "O" && this.state.bt6Text === "O" && this.state.bt9Text === "O")){
        this.setState({
          hasWinnr : true
        })
        alert("Winner is O");
      }
      else if((this.state.bt1Text === 'X' && this.state.bt4Text === "X" && this.state.bt7Text === "X") || (this.state.bt2Text === "X" && this.state.bt5Text === "X"&& this.state.bt8Text === "X") || (this.state.bt3Text === "X" && this.state.bt6Text === "X" && this.state.bt9Text === "X")){
        this.setState({
          hasWinnr : true
        })
        alert("Winner is X");
      }
  
      else if((this.state.bt1Text === 'O' && this.state.bt5Text === "O" && this.state.bt9Text === "O") || (this.state.bt3Text === "O" && this.state.bt5Text === "O" && this.state.bt7Text === "O")){
        this.setState({
          hasWinnr : true
        })
        alert("Winner is O");
      }
      else if((this.state.bt1Text === 'X' && this.state.bt5Text === "X" && this.state.bt9Text === "X") || (this.state.bt3Text === "X" && this.state.bt5Text === "X" && this.state.bt7Text === "x")){
        this.setState({
          hasWinnr : true
        })
        alert("Winner is X");
      }
      else if(this.state.b1 && this.state.b2 && this.state.b3 && this.state.b4 && this.state.b5 && this.state.b6 && this.state.b7 && this.state.b8 && this.state.b9){
        this.setState({
          hasWinnr : true
        })
        alert(" No Winner");
      }
    }
  }

  checkWinner(){
    if(this.state.b1 && this.state.b2 && this.state.b3 && this.state.b4 && this.state.b5 && this.state.b6 && this.state.b7 && this.state.b8 && this.state.b9){
      this.setState({
        hasWinnr : true
      })
      alert(" No Winner");
    }
  }



    render(){
      this.getWinner()
        return(
            <div className="gamePage">
                <div className="container">


                        <div className="alert alert-warning col plrlbl"><h4>Player <strong>{this.state.player}</strong> turn</h4></div>
                        <div className="container" hidden={!this.state.hasWinnr}>
                          <img  className="gameOverPane" src="https://images-na.ssl-images-amazon.com/images/I/71M3glE5W8L._SL1500_.jpg"></img>
                        </div>

                        <div className="gamepanale">
                        <div className=" row  " onPointerOver={this.checkWinner}>
                           <button className ="btn col"style={{backgroundColor : "gray",color : 'white'}} onClick={this.handleButton} name="btn1"  disabled={this.state.hasWinnr}>{!this.state.b1 && 1} {this.state.b1 && this.state.bt1Text}</button>
                           <button className ="btn col" style={{backgroundColor : 'gray', color: 'white'}} onClick={this.handleButton} name="btn2" disabled={this.state.hasWinnr} >{!this.state.b2 && 2} {this.state.b2 && this.state.bt2Text}</button>
                           <button className ="btn col" style={{backgroundColor : 'gray', color: 'white'}} onClick={this.handleButton} name="btn3" disabled={this.state.hasWinnr}>{!this.state.b3 && 3} {this.state.b3 && this.state.bt3Text}</button>
                        </div>

                        <div className=" row  ">
                           <button className ="btn col" style={{backgroundColor : 'gray' ,color : 'white'}} onClick={this.handleButton} name="btn4" disabled={this.state.hasWinnr}>{!this.state.b4 && 4} {this.state.b4 && this.state.bt4Text}</button>
                           <button className ="btn col" style={{backgroundColor : 'gray', color : 'white'}} onClick={this.handleButton} name="btn5" disabled={this.state.hasWinnr}>{!this.state.b5 && 5} {this.state.b5 && this.state.bt5Text}</button>
                           <button className ="btn col" style={{backgroundColor : 'gray', color : 'white'}} onClick={this.handleButton} name="btn6" disabled={this.state.hasWinnr}>{!this.state.b6 && 6} {this.state.b6 && this.state.bt6Text}</button>
                        </div>
                        
                        <div className=" row ">
                           <button className ="btn col" style={{backgroundColor : 'gray', color : 'white'}} onClick={this.handleButton} name="btn7" disabled={this.state.hasWinnr}>{!this.state.b7 && 7} {this.state.b7 && this.state.bt7Text}</button>
                           <button className ="btn col" style={{backgroundColor : 'gray', color : 'white'}} onClick={this.handleButton} name="btn8" disabled={this.state.hasWinnr}> {!this.state.b8 && 8} {this.state.b8 && this.state.bt8Text}</button>
                           <button className ="btn col" style={{backgroundColor : 'gray', color : 'white'}} onClick={this.handleButton} name="btn9" disabled={this.state.hasWinnr}>{!this.state.b9 && 9} {this.state.b9 && this.state.bt9Text}</button>
                        </div> 
                        </div>
                </div>
            </div>
        )
    }
}


export default GameComponent;