import React,{ Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import { Home,Course,Review } from './Pages.jsx'

// import Home from './Pages/Home.jsx'
// import Course from './Pages/Course.jsx'
// import Review from './Pages/Review.jsx'


const Routes = () => {
    console.log(this.props)
    return <div>
        <Switch>
            <Route path = "/"  exact component = { Home }/>
            <Route path = "/course" component = { Course }/>
            <Route path = "/review" component = { Review }/>
        </Switch>
    </div>
}
        
export default Routes
