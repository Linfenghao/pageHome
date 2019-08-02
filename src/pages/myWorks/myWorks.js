import React,{Component} from 'react'
import './myWorks.css'

class MyWorks extends Component{
    state = {
        itemList:[
            {
                id:1,
                title:"唐球小程序",
                remark:"一个用于唐球(类似高尔夫）比赛用的小程序，可以实现记录会员从报名到比赛结束的整个过程",
                skill:"微信小程序、mpvue、vue、有赞组件库",
                imgList:[{src:"./项目1-1.png",index:1},
                {src:"./项目1-2.png",index:2},
                {src:"./项目1-3.png",index:3},
                {src:"./项目1-1.png",index:4},]
            },
            {
                id:2,
                title:"果柚商城",
                remark:"一个移动端的水果商城项目",
                skill:"原生态、vue、element-ui组件库",
                imgList:[{src:"./项目2-1.png",inex:1},
                {src:"./项目2-2.jpg",index:2},
                {src:"./项目2-3.jpg",index:3},
                {src:"./项目2-4.jpg",index:4},]
            },
        ]
    }
    render(){
        let item = this.state.itemList.map((doc)=>{
            return (
                <div className="item-box" key={doc.id}>
                    <div className="item-text">
                        <div><b>项目:&nbsp;&nbsp;{doc.title}</b></div>
                        <p></p>
                        <div><b>项目描叙:</b></div>
                        <p className="content">&nbsp;&nbsp;&nbsp;&nbsp;{doc.remark}</p>
                        <div><b>所用技术:</b></div>
                        <p className="content">&nbsp;&nbsp;&nbsp;&nbsp;{doc.skill}</p>
                    </div>
                    <div className="item-img-box">
                        <div><b>项目截图:</b></div>
                        {
                            doc.imgList.map((img)=>{
                                return (
                                    <div className="img-box" key={doc.id+img.index}>
                                        <img  className="item-img"  src={require(img.src+'')} onClick={()=>this.openBigImg(doc.id,img.index)} alt="项目图片"/>
                                        <div className="big-img-box" ref={'item'+doc.id+'img'+img.index} onClick={()=>this.closeBigImg(doc.id,img.index)}>
                                            <img  className="big-img"  src={require(img.src+'')} onClick={()=>this.openBigImg(doc.id,img.index)} alt="项目图片"/>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            )
        })
        return(
            <div>
                {item}
            </div>
        )
    }
    openBigImg(itemId,imgId){
        let ref ='item'+itemId+'img'+imgId
        this.refs[ref].style.display='block'
    }
    closeBigImg(itemId,imgId){
        let ref ='item'+itemId+'img'+imgId
        this.refs[ref].style.display='none'
    }
    componentDidMount(){

        
    }
}
export default MyWorks