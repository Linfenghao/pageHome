import React,{Component} from 'react'
import './myHome.css'

class MyHome extends Component{
    render(){
        return(
            <div className="myHome">
                <div className="myphoto">
                 
                </div>
                <div className="explain"> 
                    <div>您好,欢迎来到我的个人主页</div>
                    <div>我是<font color="blue">林丰浩</font>，是一名<font color="blue">前端工程师</font></div>
                    <hr/>
                    <div><font color="red">人生所有挫折，都是你成长的阶梯</font></div>
                </div>
            </div>
        )
    }
}
export default MyHome