import React,{Component} from 'react'
import { connect } from 'react-redux'

class Review extends Component{

    render(){
        console.log(this.props)
        return <div className = "container">
            Review
        </div>
    }

}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Review)