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
      <div className="row">
        <div className="flow-text col s6"><span><i className="material-icons">trending_up</i></span> { upNum }</div>
        <div className="flow-text col s6"><span><i className="material-icons">trending_down</i></span> { downNum }</div>
      </div>
    </div>
  )
};

//export ImageScore
export default ImageScore;
