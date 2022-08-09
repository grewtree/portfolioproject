import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson2 from '../../public/animation_people.json'

export default function Animation_people() {
  return (
    <Lottie
    loop
    animationData={lottieJson2}
    size={{width:10, height:10}}
    play

  />

  )

}