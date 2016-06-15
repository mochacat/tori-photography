import React from 'react'
import './main.scss'

const NavSection = function(){
  return (
    <nav>
      <div className="nav-top">
        <div>
          <br>
          </br>
          <br>
          </br>
          <h1>Tori Moca</h1>
        </div>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Porfolio</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="nav-bottom">
        <div className="image-container">
          <img src="https://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Facebook-48.png" alt="" />
          <img src="https://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Twitter-48.png" alt="" />
          <img src="https://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Intsagram-48.png" alt="" />
        </div>
      </div>
    </nav>
  )
}

class Photo extends React.Component {
  constructor(props){
    super(props)
    this.state = { hover: false }
    this.toggleHover = this.toggleHover.bind(this) 
  }
  
  toggleHover(e){
    this.setState({ hover: !this.state.hover })
  }
  
  render() {
    
    let width = this.props.width ? this.props.width : 'auto'
    
    let imgStyle = {
      width:width,
      opacity: this.state.hover ? '.25' : '1'
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

class App extends React.Component{
  
  render(){
    //TODO replace with fetch for api
    const photos = this.photos = [
      {
        src: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/12141911_506335919544024_1856741625_n.jpg?ig_cache_key=MTEwNDYyMTEyODA3ODM2NzQ0NQ%3D%3D.2',
        alt: 'Portrait',
        width: false
      },
      {
        src: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/12940279_483747388498295_1776366419_n.jpg?ig_cache_key=MTIyMjg3NTI4OTM4Njc4NTEyNQ%3D%3D.2',
        alt: 'Boudoir',
        width: '400px'
      },
      {
        src: 'https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/s960x960/11357322_914362875272173_7422716609845847424_o.jpg',
        alt: 'Local',
        width: false
      },
      {
        src: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1536559_936927423015718_343841262599899862_n.jpg?oh=dd40d373a53b9f43b8b8b8f04184edf2&oe=57DB8D29',
        alt: 'Band',
        width: '400px'
      },
      {
        src: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/10808510_638855289602557_1846416598_n.jpg?ig_cache_key=MTIwMjQxMDY0NzM1MDk3NTEzMw%3D%3D.2',
        alt : 'Nature',
        width: false
      },
      {
        src: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/12950415_262500674085918_1390097578_n.jpg?ig_cache_key=MTIyNDIxNTg4MDQzOTczMjk2OQ%3D%3D.2',
        alt: 'Live',
        width: '200px'
      },
      {
        src: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/12797850_537878626383408_167660546_n.jpg?ig_cache_key=MTE5MzM4Mzc1MTgxMjQyMjE4Mg%3D%3D.2',
        alt: 'Art',
        width: '200px'
      },
      {
        src: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/12547303_1724799164422368_1479768973_n.jpg?ig_cache_key=MTE3ODM4MzIzNDkwMDIwNDQwMA%3D%3D.2',
        alt : 'Food',
        width: '200px'
      }
    ]

    return (
      <div className="page-wrapper">
        <NavSection />
        <div className="content">
          <div className="photos">
            {photos.map( (photo, i) => {
              return <Photo key={i} {...photo} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App