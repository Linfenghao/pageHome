import React,{Component} from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

class Home extends Component{
    state = {
        messageList:[
            {path:"",text:"林丰浩的个人主页",id:1},
            {path:"/home/myHome",text:"首页",id:2},
            {path:"/home/mySkill",text:"我的技能",id:3},
            {path:"/home/myWorks",text:"我的项目",id:4},
            {path:"/home/myStudy",text:"学习过程",id:5},
            {path:"/home/myJob",text:"工作经历",id:6},
            {path:"/home/contact",text:"马上联系",id:7}
        ],
        focusIndex:2,
        animation:true,
        showMenu:true
    }
    render(){
        let children
        if(this.state.animation){
            children=(<div>{this.props.children}</div>)
        }   
        return(
            <div>
                <div className="home-head">
                    <ul>
                    {
                        this.state.messageList.map((doc)=>{
                            if (doc.id===1) {
                                return(<li key={doc.id} className="head-text">{doc.text}
                                <div className="menu" ref="menu" onClick={this.showMenu}></div>
                                <div className="close" ref="close" onClick={this.closeMenu}></div></li>)
                            }
                                if(this.state.showMenu){
                                    return (<li key={doc.id} ref="nav">
                                    <Link to={doc.path} className={this.state.focusIndex===doc.id?"active nav":"nav"}
                                    onClick={()=>this.checkedMessage(doc.id)}>{doc.text}
                                    </Link></li>)
                                }else{
                                    return ''
                                }
                        })
                    }
                    </ul>
                </div>
                <div className="home-main">
                    <CSSTransition
                    in={this.state.animation} 
                    timeout={5000} 
                    classNames='fade'>
                        <div>
                    {children} 
                    </div>
                    </CSSTransition>
                </div>
                
            </div>
            
        )
    }
    showMenu=()=>{
        this.refs.close.style.display="block"
        this.refs.menu.style.display="none"
        this.setState({showMenu:true})
    }
    closeMenu=()=>{
        this.refs.close.style.display="none"
        this.refs.menu.style.display="block"
        this.setState({showMenu:false})
    }
    checkedMessage=(id)=>{
        if(window.screen.width<768){
            this.closeMenu();
        };
        this.setState({focusIndex:id})
        this.setState({animation:false})
        setTimeout(() => {
            this.setState({animation:true})
        }, 0);
        
    }
    componentDidMount(){
        if(window.screen.width<768){
            this.setState({showMenu:false})
        };
        this.state.messageList.forEach((doc)=>{
            if (doc.path===this.props.location.pathname){
                this.setState({focusIndex:doc.id})
            }   
        })
        
    }
}
export default Home