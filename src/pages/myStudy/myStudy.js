import React,{Component} from 'react'
import './myStudy.css'

class MyStudy extends Component{
    render(){
        return(
            <div className="myStudy">
                <div ><b>教育经历:</b>&nbsp;&nbsp;2015年毕业于峡辉中学&nbsp;&nbsp;(
                <font color="red">ps:学历不代表能力,会通过自考提升学历</font>)</div>
                <div><b>学习过程:</b></div>
                <div className="study-text"> 
                    2017年接触到java,觉得自身非常适合编程,于是通过网上搜索视频以及购买书籍边工作边自学。<br/>
                    在学完java基础后，并没有学习其中的框架等,转去学习前端知识。<br/>
                    在2018年6月去工作上班,个人当时已经掌握前端的原生态以及vue框架，在工作过程中
                    更加了解vue以及学会使用element组件库。<br/>
                    在工作过程中边学习，后面掌握了react框架，以及小程序开发。
                </div>
            </div>
        )
    }
}
export default MyStudy