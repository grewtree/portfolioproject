import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson2 from '../../public/circle3.json'

export default function Animation_circle() {
  return (
    <Lottie
    loop
    animationData={lottieJson2}
    play
    style={{width :500, height: 500}}

  />

  )

}