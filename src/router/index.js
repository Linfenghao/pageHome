import React,{Component} from 'react'
import Home from '../pages/home/home'
import Contact from '../pages/contact/contact'
import MySkill from '../pages/my_skill/mySkill'
import MyJob from '../pages/myJob/myJob'
import MyStudy from '../pages/myStudy/myStudy'
import MyWorks from '../pages/myWorks/myWorks'
import MyHome from '../pages/myHome/myHome'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'

export default class RouteConfig extends Component{
    render(){
        
        return(
            <HashRouter>
                    <Switch>
                    <Home path='/home'  component={Home}>
                        <Route path='/home/' exact component={MyHome}/>
                        <Route path='/home/myHome' component={MyHome}/>
                        <Route path='/home/contact' component={Contact}/>
                        <Route path='/home/mySkill' component={MySkill}/>
                        <Route path='/home/myJob' component={MyJob}/>
                        <Route path='/home/myStudy' component={MyStudy}/>
                        <Route path='/home/myWorks' component={MyWorks}/>
                    </Home>
                    <Redirect exact from="/" to="home"/>
                    </Switch>
            </HashRouter>
        )
    }
}