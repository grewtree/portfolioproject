import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson2 from '../../public/spaceman.json'

export default function Animation_spaceman() {
  return (
    <Lottie
    loop
    animationData={lottieJson2}
    play
    style={{width :500, height: 500}}
  />

  )

}