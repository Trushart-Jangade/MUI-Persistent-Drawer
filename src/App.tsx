import * as React from "react";
import ButtonAppBar from './ButtonAppBar';
import Home from './Home';
import PageSecond from './PageSecond';
import PageOne from './PageOne';
import Login from './Login';


interface IState {
  showComponent: string,
  auth: boolean
}
export default class App extends React.Component<any,IState>{
  constructor(props: any, state: IState) {
    super(props, state);
    
    this.state = {
      showComponent: this.props.showComponent,
      auth:false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick=(btnName:string)=>{
    switch (btnName) {
      case 'Home':
                this.setState({
                  showComponent: 'Home'
                });
          break;
      case 'Page1':
                this.setState({
                  showComponent: 'Page1'
                });
          break;
      case 'Page2':
                this.setState({
                  showComponent: 'Page2'
                });
          break;
      case 'Login':
                this.setState(state => ({
                  auth: !state.auth,
                  showComponent: 'Home'
                }));
          break;
      default: alert('Wrong Menu');
        break;
    }
  }
  public render(){
  return(
    <div>
      <ButtonAppBar handleClick={this.handleClick} auth={this.state.auth} />
      {this.state.showComponent==='Home' && <Home/>}
      {this.state.showComponent==='Page1' && <PageOne/>}
      {this.state.showComponent==='Page2' && <PageSecond/>}
      {this.state.showComponent==='Login' && <Login/>}
    </div>
  )
  }

}
