import React , {Component} from 'react'

export default class History extends Component{

    handleGoBack=()=>{
      this.props.history.goBack();
    }
    handleGoHome=()=>{
      this.props.history.push('/');
    }

      componentDidMount(){
          this.unBlock = this.props.history.block('짜잔');
      }

      componentWillUnmount(){
        if(this.unblock){
          this.unblock();
        }
      }

    render(){
      return(
        <div>
            <button onClick={this.handleGoBack}>뒤로</button>
            <button onClick={this.handleGoHome}>홈으로</button>
        </div>
      )
    }
}
