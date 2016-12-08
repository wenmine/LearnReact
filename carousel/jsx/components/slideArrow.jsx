
var SlideArrow = React.createClass({
    handlePrevArrow : function(){
        this.props.handlePrev();
    },
    handleNextArrow : function(){
       this.props.handleNext();
    },
    render:function(){
        return (
            <div className = "Arrow">
                <div onClick = {this.handlePrevArrow} className="turnBtn prev"></div>
                <div onClick = {this.handleNextArrow} className="turnBtn next"></div>
            </div>
        );
    }
});
module.exports = SlideArrow;
