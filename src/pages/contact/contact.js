import React,{Component} from 'react'
import './contact.css'

class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <div className="contact-text">
                    <table>
                        <tbody>
                            <tr>
                                <td>地址:</td>
                                <td>深圳龙岗平湖</td>
                            </tr>
                            <tr>
                                <td>手机号码:</td>
                                <td>13415028975</td>
                            </tr>
                            <tr>
                                <td>邮箱:</td>
                                <td>654029036@qq.com</td>
                            </tr>
                            <tr>
                                <td>微信:</td>
                                <td>扫一扫右边二维码添加我微信</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="img-wx">
                    <img src={require('./wx.png')} alt="微信二维码"/>
                </div>
            </div>
        )
    }
}
export default Contact