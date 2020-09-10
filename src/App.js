import React, {Component} from 'react';
import './App.css';
import List from "./components/List"

class App extends Component {
  state = {
    number:Math.floor(Math.random() * 100) + 1,
    count:0,
    guess:[],
    end:false
  }

  onChange = (e) => {
    if(this.state.count < 5){
      this.setState({
        myNumber:e.target.value
      })
    }
  }

  onTry = () => {
    this.setState({
      count:this.state.count + 1
    })
    let item={}
    if(this.state.myNumber==this.state.number){
       item = {
        myNumber: this.state.myNumber,
        message:"Tebrikler",
        win:true
      }
    }
    else if(this.state.myNumber>this.state.number){
      item = {
        myNumber: this.state.myNumber,
        message:"Daha küçük sayı tahmin et",
        win:false
      }
    }
    else{
      item = {
        myNumber: this.state.myNumber,
        message:"Daha büyük sayı tahmin et",
        win:false
      }
    }

    if(item.win){
      this.setState({
        guess: [...this.state.guess, item],
        myNumber:"",
        end:true,
        win:true
      })
    }else{
      this.setState({
        guess: [...this.state.guess, item],
        myNumber:"",
        end:false
      })
    }
    
    if(!item.win && this.state.count === 4){
      item = {
        myNumber: this.state.myNumber,
        message:"Hakkınız Bitti"
      }
      this.setState({
        guess: [...this.state.guess, item],
        myNumber:"",
        end:true,
        win:false
      })
    }
  }

  newGame = () => {
    this.setState({
      number:Math.floor(Math.random() * 100) + 1,
      count:0,
      guess:[],
      end:false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="content">
              <div className="input-group mb-3">
                <input className={this.state.end ? "hidden" : "form-control"} type="number" value={this.state.myNumber} placeholder="Sayı girin" onChange={this.onChange}></input>
                <div className="input-group-append">
                <button className={this.state.end ? "hidden" : "btn btn-primary"} onClick={this.onTry}>OK</button>
                </div>
            </div>
          </div><br/><br/>
          <div className="list">
            <List guess={this.state.guess} end={this.state.end} newGame={this.newGame}/>
          </div>
        </header>
      </div>
    )
  }
}

export default App;


