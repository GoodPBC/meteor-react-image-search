//component for voting of images
import React from 'react'


//create component
const ImageScore = (props) => {

  //same as writing:
  //const ups = props.ups
  //const downs = props.downs
  const { ups, downs } = props

  const upPercent = `${100 * (ups / (ups + downs))}%`
  const downPercent = `${100 * (downs / (ups + downs))}%`
  const upNum = `${ups}`
  const downNum = `${downs}`


  return(
    <div>
      <div className="progress">
        <div style={{width: upPercent}} className="determinate green"></div>
        <div style={{width: downPercent}} className="determinate red"></div>
      </div>
      <div className="row voteTally">
        <div className="flow-text col s1"><p className="flow-text">{ downNum }</p></div>
      <div className="flow-text col s1"><p className="flow-text">{ upNum }</p></div>
      </div>
      <div className="row thumbsVote">
        <div className="flow-text col s1"><span><i className="material-icons"><a className="downVote">thumb_down</a></i></span></div>
        <div className="flow-text col s1"><span><i className="material-icons"><a className="upVote">thumb_up</a></i></span></div>
      </div>
    </div>
  )
};

//export ImageScore
export default ImageScore;
