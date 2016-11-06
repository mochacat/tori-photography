import React from 'react'

class Photo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false,
      display: false,
      delay : 0.5,
    }
    
    this.toggleHover = this.toggleHover.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.show = this.show.bind(this)
  }
  
  componentDidMount() {
    //do the initial fade in at random intervals
    setTimeout( () => this.show(), 500)
  }
  
  show() {
    this.setState({display:true})
  }
  
  toggleHover(e){
    this.setState({ hover: !this.state.hover })
  }
  
  handleMouseDown(e){
    if (e.button == 2){
      e.preventDefault();
	    e.stopPropagation();
	    e.cancelBubble = true;
	    return false;
    }
  }
  
  render() {
    
    let width = this.props.photo.width ? this.props.photo.width : 'auto'
    
    //set separate opacities for initial fade in and later mouse hover
    let opacity = '1'
    if (!this.state.display) {
      opacity = '0'
    } else if(this.state.hover) {
      opacity = '.25'
    }
    
    //transition speed different for initial fade in and later mouse hover'
    
    let imgStyle = {
      width:width,
      opacity: opacity
    }
    
    //transition: all .5s ease-in-out;
    
    let fadeIn = this.state.hover ? 'fade-in' : 'fade-in pause'
    
    return (
      <div
        className="img-container"
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <img src={this.props.photo.src} alt={this.props.photo.alt} style={imgStyle}/>
        <div className={'title ' + fadeIn}><p>{this.props.photo.alt}</p></div>
      </div>
    )
  }
}

export default Photo