import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson2 from '../../public/magnifying.json'

export default function Animation_magnifying() {
  return (
    <Lottie
    loop
    animationData={lottieJson2}
    play

  />

  )

}