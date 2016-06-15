import React from 'react'

import Photo from './Photo'

class PhotoGrid extends React.Component {
    
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
        <div className="photos">
          {photos.map( (photo, i) => {
            return <Photo key={i} {...photo} />
          })}
        </div>
      )
    }
}

export default PhotoGrid