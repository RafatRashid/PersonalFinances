import React from 'react'
import Loader from "react-loader-spinner";

const backDropStyle = {
  position: 'absolute',
  top: 0,
  backgroundColor: "#000000c4",
  width: '100vw',
  height: '100vh'
}

const loaderDivStyles = {
  position: "fixed",
  top: '35vh',
  left: '38vw'
}

function ProgressBar({visible}) {
  return (
    <div style={backDropStyle} hidden={!visible}>
      <div className='row' style={loaderDivStyles}>
        <div className='col-md-4'></div>

        <div className='col-md-4' style={{textAlign: "center"}}>
          <Loader type="Puff" color="white" height={150} width={150}/>
        </div>

        <div className='col-md-4'></div>
      </div>
    </div>
  )
}

export default ProgressBar