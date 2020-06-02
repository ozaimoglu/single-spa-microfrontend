import React from 'react';
import MainScreenContainer from './Containers/MainScreenContainer';
import GameScreenContainer from './Containers/GameScreenContainer';
import TimesUpScreenContainer from './Containers/TimesUpScreenContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route : "/"
    }
    this.gotoGameScreen = this.gotoGameScreen.bind(this);
    this.gotoTimeIsUpScreen = this.gotoTimeIsUpScreen.bind(this);
    this.gotoMainScreen = this.gotoMainScreen.bind(this);
  }

  gotoGameScreen() {
    this.setState({
      route : "/game"
    })
  }

  gotoTimeIsUpScreen() {
    this.setState({
      route : "/timesUp"
    })
  }

  gotoMainScreen() {
    this.setState({
      route : "/"
    })
  }

  render() {
    return (
      // <Router>
      //   <Switch>
      //     <Route path="/gameMenu" component={MainScreenContainer} exact/>
      //     <Route path="/game" component={GameScreenContainer}/>
      //     <Route path="/timesUp" component={TimesUpScreenContainer}/>
      //   </Switch>
      // </Router>
      <div>
        {
          this.state.route == "/" ? <MainScreenContainer gotoMainScreen={this.gotoMainScreen} gotoGameScreen = {this.gotoGameScreen} gotoTimeIsUpScreen={this.gotoTimeIsUpScreen}></MainScreenContainer> 
          : this.state.route == "/game" ? <GameScreenContainer gotoMainScreen={this.gotoMainScreen}  gotoGameScreen = {this.gotoGameScreen} gotoTimeIsUpScreen={this.gotoTimeIsUpScreen}></GameScreenContainer> 
          : <TimesUpScreenContainer gotoMainScreen={this.gotoMainScreen}  gotoGameScreen = {this.gotoGameScreen} gotoTimeIsUpScreen={this.gotoTimeIsUpScreen}></TimesUpScreenContainer>
        }
      </div>
    );
  }

}

export default App;
