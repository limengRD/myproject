import React,{Component,PropTypes}from 'react';
class LogIn extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changePassWord = this.changePassWord.bind(this);
    this.state={
      user:"",
      password:""
    };
  }
  handleClick(e){
    e.stopPropagation();
    e.preventDefault();
   console.log(e); 
  }
  changeUser(e){
      this.setState({user:e.target.value}); 
  }
  changePassWord(e) {
      this.setState({password:e.target.value}); 
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-1"> 
          <form action="">
            <div className="inputEveryForm"> 
              <label htmlFor="male">用户名</label>          
              <input value={this.state.user} onChange={this.changeUser} type="text" className="form-control"/>
              <span className="input-group-addn"></span>
            </div>
            <div className="inputEveryForm"> 
              <label htmlFor="male">密码</label>          
              <input  value={this.state.password} onChange={this.changePassWord} type="text" className="form-control"/>
              <span className="input-group-addn"></span>
            </div> 
            <div className="button_location">
          <button onClick={this.handleClick} className="btn btn-info pull-right">登陆</button>
          </div> 
          </form>
        </div>
        {/*注册*/}          
        <div className="col-md-4 col-md-offset-2">
            <form action="">
                <div className="inputEveryForm">
                    <label htmlFor="male">用户名</label>
                    <input value={''} onChange={this.chageUser} type="text" className="form-control"/>
                    <span className="input-group-addn"></span>
                </div>
                <div className="inputEveryForm">
                    <label htmlFor="male">密码</label>
                    <input value={''} onChange={this.changeUser} type="text" className="form-control"/>
                    <span className="input-group-addn"/>
                </div>
                <div className="inputEveryForm">
                    <label htmlFor="male">重复密码</label>
                    <input value={''} onChange={this.changeUser} type="text" className="form-control"/>
                    <span className="input-group-addn"/>
                </div>
                <button onClick={this.handleClick}className="btn btn-info pull-right " >注册</button>
            </form>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<LogIn/>, document.getElementById('AppRoot'));
