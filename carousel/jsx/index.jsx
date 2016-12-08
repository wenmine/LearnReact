
var Slide = require('./components/slide.jsx');
var slides =[
    {
        src:"http://img.aimoge.com/FlHO5pnUCDAxGu4f3TQMVmhAUN3f",
        alt:"img1"
    },
    {
        src:"http://img.aimoge.com/FrYdmICVvgTTbwAPZ2FL-pPgirgs",
        alt:"img2"
    },
        {
        	src:"http://img.aimoge.com/FjBLISfzptUYX12mz7o-ki1MpgBG",
        alt:"img2"
    },
    {
    	src:"http://img.aimoge.com/Fj3zqUGLvq0ADWHP_55HfJv2WuNB",
        alt:"img2"
    }
    ];
    //speed为切换速度，delay为轮播速度
    //mousepause简单设置为如果鼠标停留在区域内则会暂停轮播，当进行按钮点击操作切换图片时，则又会启动轮播。
ReactDOM.render(
			<Slide slides = {slides} speed={300} delay={8000} arrow = {true} bullet = {true} mousepause = {true} isLoop = {true} autoplay = {true}></Slide>,
			document.getElementById('container')
		);
