import React,{Component} from "react";
import style from './detail.module.css'

class Detail extends Component{

    render() {
        return (
            <div className={style.detailWrapper}>
                <div className={style.detailHeader}>用一个通俗易懂的实战案例，彻底搞懂单例模式</div>
                <div className={style.detailContent}>
                    <img className={style.contentImage} src={"https://upload-images.jianshu.io/upload_images/1156415-6ec601160a8be7e2.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"}/>
                    <p className={style.contentText}>熟悉的vim的同学大多都用过的一个配色Gruvbox，整体给人感觉沉稳、清晰，对眼睛也十分友好，没有过于暗或者亮的地方，也不花里胡哨。正重要的是，微微泛黄，在晚上看起来也很舒服。</p>
                    <p className={style.contentText}>除了vim之外，我其实有一半的时间都在jetbrains的IDE里干活，比如IntelliJ IDEA 和 DataGrip，在2019.1版本之后，jetbrains也全家桶支持自定义主题了，但是一直到今天其实都没有找到用起来舒服的 配色，有几款喜欢的也都是这里或者那里不太舒服，所以决定自己打造一款基于gruvbox的主题配色。</p>
                    <p className={style.contentText}>除了Java配色之外，还花了些时间调整了下其他和Jvm方言和前端技术栈语言的配色，比如这些： JSX & Javascript</p>
                    <p className={style.contentText}>创建项目其实很简单，IDEA旗舰版本默认是安装DevKit的，所以可以直接基于DevKit创建和开发插件项目。</p>
                    <p className={style.contentText}>关于代码配色的设计和制作其实整体还是蛮简单的，直接拿着IDEA的默认黑色主题Dracula进行复制，然后在上面进行修改就可以了。第一步是设置背景和其他Gruvbox的颜色，然后调整警告，错误，文本等等基础内容的颜色。第二步就是专门针对Java语言调整，这一步也是最重要的一步。整个过程当然也不是从0开始的，借鉴了大量我之前使用的主题的设计思路，然后使用相近的Gruvbox配色进行替换。</p>
                </div>
            </div>
        );
    }
}

export default Detail;









