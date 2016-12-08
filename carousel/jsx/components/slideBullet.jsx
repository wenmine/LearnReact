
var SlideBullet = React.createClass({
    handleBulletChange : function(i){
        this.props.handleBullet(i);
    },
    render:function(){
        var index = this.props.currentIndex,imgSrcs = this.props.slides,bullets=null;
        bullets = imgSrcs.map(function(item,i){
            var isActive = index==i ? "circle active" : "circle";
                return(
                    <span className={isActive} onClick={this.handleBulletChange.bind(this,i)}></span>
                )
            }.bind(this));
        return (
                <div className = "bullets">
                    {bullets}
                </div>
        );
    }
});
module.exports = SlideBullet;
