import React,{ Component } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import FacebookLogin from './FacebookLogin.jsx'

class Navbar extends Component{

    render(){

    console.log(this.props)

    const iconStyle = {
        fontWeight : 'bold',
        fontSize : 20,
        color : '#585454'
    }

    const baseClass = {
        className : 'nav-item is-tab',
        activeClassName : 'is-active'
    }

    return <nav className="nav has-shadow" id = "top">
        <div className="container">
            <div className="nav-left">
                <a href=""  style = { iconStyle } className="nav-item"> {this.props.name} </a>
            </div>

            <div className="nav-right nav-menu">
                <NavLink exact to = "/" {...baseClass}> Home </NavLink>
                <NavLink to = "/course" {...baseClass}> Course </NavLink>
                <NavLink to = "/review" {...baseClass}> Review </NavLink>

                <FacebookLogin />
            </div>
        </div>
    </nav>
    }

}

const mapNavStateToProps = (state) => state

export default connect(mapNavStateToProps)(Navbar)