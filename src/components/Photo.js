import React from 'react'

class Photo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false,
      display: false
    }
    
    this.toggleHover = this.toggleHover.bind(this)
    this.show = this.show.bind(this)
  }
  
  componentDidMount() {
    setTimeout( () => this.show(), 500)
  }
  
  show() {
    this.setState({display:true})
  }
  
  toggleHover(e){
    this.setState({ hover: !this.state.hover })
  }
  
  render() {
    
    let width = this.props.width ? this.props.width : 'auto'
    
    //set separate opacities for initial fade in and later mouse hover
    let opacity = '1'
    if (!this.state.display) {
      opacity = '0'
    } else if(this.state.hover) {
      opacity = '.25'
    }
    
    let imgStyle = {
      width:width,
      opacity: opacity
    }
    
    let fadeIn = this.state.hover ? 'fade-in' : 'fade-in pause'
    
    return (
      <div className="img-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <img src={this.props.src} alt={this.props.alt} style={imgStyle}/>
        <div className={'title ' + fadeIn}><p>{this.props.alt}</p></div>
      </div>
    )
  }
}

export default Photo