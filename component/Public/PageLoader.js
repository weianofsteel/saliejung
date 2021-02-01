import React, { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
 
export const PageLoader = () => {
  
  const [progress, setProgress] = React.useState(0);

  useEffect(()=>{
    setProgress(100);
  },[])
 
  return (
    <div>
      <LoadingBar
        color='#1F1F1F'
        height={3}
        waitingTime={500}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  )
}