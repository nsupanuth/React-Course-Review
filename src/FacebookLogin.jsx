import React,{ Component } from 'react'
import { connect } from 'react-redux'

import { loginAuthen,logoutAuthen } from './action.jsx'

class FacebookLogin extends Component{

    state = {
        isAuthen : false,
    }

    render(){

        return <span className="nav-item">
            {!this.state.isAuthen
                ?  <a onClick = {()=>this.login()} className="button is-info" className="button is-info">Login</a>
                :  <a onClick = {()=>this.logout()} className="button" className="button is-danger">Logout</a>
            }            
        </span>
    }

    login(){
        window.FB.login(function(response) {
            this.onStatusChange(response)
          }.bind(this))
    }

    logout(){
        window.FB.logout(function(response) {
            this.onStatusChange(response)            
        }.bind(this))
    }

    onStatusChange(res){

        const { dispatch } = this.props

        if(res.status === 'connected'){
            this.setState({ isAuthen : true })
            window.FB.api('/me?fields=id,name,email',function(res){
                dispatch(loginAuthen(res))
                // console.log(res)
            })
        }else{
            this.setState({ isAuthen : false})
            dispatch(logoutAuthen())            
        }
    }

    componentDidMount(){
        this.setUpFacebook()
    }

    setUpFacebook(){
        window.fbAsyncInit = function() {
          window.FB.init({
            appId            : '262152124299092',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v2.10'
          });
          window.FB.AppEvents.logPageView();

          window.FB.getLoginStatus(function(res) {
            this.onStatusChange(res)
          }.bind(this))

        }.bind(this);
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "//connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
    }

}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(FacebookLogin)