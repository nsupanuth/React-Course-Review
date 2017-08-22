import React,{Component} from 'react'
import { connect } from 'react-redux'

class Course extends Component{

    render(){
        console.log(this.props)
        return <div className = "container">
            Course
        </div>
    }

}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Course)