var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var SlideItem = require('./slideItem.jsx');
var SlideArrow = require('./slideArrow.jsx');
var SlideBullet = require('./slideBullet.jsx');

var Slide = React.createClass({
    getInitialState:function(){
        var isloop= this.props.autoplay ? true : this.props.isLoop;
        var speed= this.props.speed ? this.props.speed : 300;
        var delay= this.props.delay ? this.props.delay : 8000;
        return{
            slides : this.props.slides,
            speed : speed,
            delay : delay,
            isLoop : isloop,
            autoPlay : this.props.autoplay,
            currentIndex :  0,
            transitionName : "carousel2"
        }
    },
    componentDidMount : function () {
        this.autoPlayPause();
        this.autoPlayStart();
    },
    handleMouseOver : function () {
        if (!this.props.mousepause) {
            return false;
        }
        this.autoPlayPause();
    },
    handleMouseOut : function () {
        if (!this.props.mousepause) {
            return false;
        }
        this.autoPlayPause();
        this.autoPlayStart();
    },
    autoPlayStart : function () {
        if (this.state.autoPlay){
            this.timer = setInterval(function () {
                this.handleNext();
            }.bind(this),this.state.delay);
        }
    },
     autoPlayPause : function () {
        if (this.timer){
            clearInterval(this.timer);
            this.timer = null;
        }
    },
    handlePrev : function(){
    var curIndex = this.state.currentIndex;
        if(curIndex <= 0){
            curIndex = this.state.isLoop ? this.state.slides.length : 1;
        };
        this.setState({
            transitionName : "carousel1",
            currentIndex : --curIndex
        });
        this.autoPlayPause();
        this.autoPlayStart();

    },
    handleNext : function(){
        var curIndex = this.state.currentIndex;
        if(curIndex >= this.state.slides.length-1){
            curIndex = this.state.isLoop ? -1 :this.state.slides.length-2 ;
        };
        this.setState({
        transitionName : "carousel2",
            currentIndex : ++curIndex
        });
        this.autoPlayPause();
        this.autoPlayStart();
    },
    handleBullet : function(i){
        var curIndex = this.state.currentIndex;
        var tsName = i >= curIndex ? "carousel2" : "carousel1";
        this.setState({
        transitionName : tsName,
            currentIndex : i
        });
        this.autoPlayPause();
        this.autoPlayStart();
    },
    render:function(){
        var index = this.state.currentIndex,imgSrcs = this.state.slides;         
        return (
            <div className = "content" onMouseOver = {this.handleMouseOver.bind(this)}  onMouseOut = {this.handleMouseOut.bind(this)}>
                <SlideItem transitionName = {this.state.transitionName} transitionTime = {this.state.speed} imageInfo = {imgSrcs[index]}></SlideItem>
                {this.props.arrow ? <SlideArrow handlePrev = {this.handlePrev} handleNext = {this.handleNext}> </SlideArrow>: null}
                {this.props.bullet?<SlideBullet handleBullet = {this.handleBullet} currentIndex = {index} slides={imgSrcs}> </SlideBullet>:null}
            </div>
        );
    }
});
module.exports = Slide;
