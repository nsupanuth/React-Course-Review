import React,{Component} from 'react'
import { connect } from 'react-redux'

class Home extends Component{

    render(){
        console.log(this.props)
        return <div className = "container">
            Home
        </div>
    }

}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Home)