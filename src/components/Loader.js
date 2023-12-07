import React from 'react'
import { FidgetSpinner } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height:'100vh'}}>
    <FidgetSpinner
    visible={true}
    height="100"
    width="100"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    ballColors={['#ff0000', '#00ff00', '#0000ff']}
    backgroundColor="#F4442E"
  />
    </div>
  )
}

export default Loader
