import React,{Component} from 'react'
import './myJob.css'

class MyJob extends Component{
    render(){
        return(
            <div className="myJob">
                <h3>工作经历</h3>
                <h4>
                    深圳安邦网络科技有限公司
                </h4>
                <ul>
                    <li>2018.6--至今</li>
                    <li>前端开发</li>
                    <li>公司主要负责帮客户开发网页和小程序,而我负责的是前端页面的开发，有时候也会开发小程序</li>
                    <li>公司主要用到的技术有:html、css、javascript、vue、element组件库、小程序开发工具、mpvue</li>
                </ul>
            </div>
        )
    }
}
export default MyJob