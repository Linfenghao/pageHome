import React, { Component } from 'react'
import './mySkill.css'
import echarts from 'echarts';


class MySkill extends Component {
    state = {
        skillList: [
            { skill: "技术", remark: "掌握程度及描述" },
            { skill: "html", remark: "熟悉html的大部分标签以及H5的一些新特性" },
            { skill: "css", remark: "能够使用css完成比较精美的页面,掌握一些css3的新特性" },
            { skill: "javascript", remark: "熟悉js中常用的api，能够利用js完成动态网页" },
            { skill: "ajax", remark: "一般使用ajax的库axios进行连接接口,获取后端数据" },
            { skill: "ES6", remark: "熟悉ES6的新特性，如模板字符串、解构赋值、扩展运算符" },
            { skill: "vue", remark: "熟悉vue的指令、router、vuex、组件化、生命周期...能够使用vue框架开发项目" },
            { skill: "react", remark: "熟悉react的开发方式,了解redux、react-router，能够使用react框架开发项目" },
            { skill: "mock", remark: "能够使用mock模拟接口实现数据的增删改查" },
            { skill: "git", remark: "之前公司使用git对项目进行版本管理" },
            { skill: "微信小程序", remark: "能够使用微信开发工具开发小程序,有用过mpvue用vue框架知识开发小程序" },
            { skill: "java", remark: "了解java的基础知识,但还不够熟悉，很难用于开发" },
        ]
    }
    render() {
        let skill;
        skill = this.state.skillList.map((doc, index) => {
            return (
                <tr className="tab-row" key={index}>
                    <td className="tab-skill">{doc.skill}</td>
                    <td className="tab-remark">{doc.remark}</td>
                </tr>
            )
        })
        return (
            <div className="mySkill-box">
                <div className="mySkill">
                    <div className="Skill-box">
                        <table className="Skill-tab" border="1" >
                            <tbody  >
                                {skill}
                            </tbody >
                        </table>
                    </div>
                </div>
                <div className="mySkill">
                    <div className="skill-img-box">
                        <div id="img" className="skill-img" ></div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('img'));
        console.log(myChart);
        
        
        myChart.setOption({
           
            tooltip : {
                trigger: 'axis',
                axisPointer : {         
                    type : 'none'       
                }
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data:['java','小程序','react','vue','ES6','javascript','css','html']
            },
            series: [
                {
                    name:"得分",
                    data: [40,60,60,80,80,80,90,90],
                    type: 'bar',
                    z:10,
                    itemStyle: {
                        normal: {
                            color: 'rgb(213,58,53)'
                        }
                    },
                },{
                name:"总分",
                data: [100,100,100,100,100,100,100,100],
                type: 'bar',
                barGap:'-100%',
                itemStyle: {
                    normal: {
                        color: 'rgb(230,230,230)'
                    }
                },
            },]
        })
    }
}
export default MySkill