import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../../public/animation_main2.json'

export default function Animation_main() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}
