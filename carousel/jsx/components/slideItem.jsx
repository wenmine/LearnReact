var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var SlideItem = React.createClass({
    propTypes: {
        transitionName: React.PropTypes.string.isRequired,
        transitionTime:  React.PropTypes.number.isRequired,
        imageInfo: React.PropTypes.string.isRequired
    },
    render:function(){
        return(
            <div className='carousel'>
                <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionEnterTimeout={this.props.transitionTime} transitionLeaveTimeout={this.props.transitionTime}>
                <img src={this.props.imageInfo.src} key={this.props.imageInfo.src} className="img" alt={this.props.imageInfo.alt}/>
                </ReactCSSTransitionGroup>
            </div>
        );  
    }
});
module.exports = SlideItem;
