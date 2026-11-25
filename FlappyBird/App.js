import React, { use, useEffect } from "react";
import {View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, Image} from 'react-native';
import Bird from './src/components/Bird';
import Obstacle from './src/components/Obstacle';

export default function App(){
  const screenWidth = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  const birdWidth = screenWidth/2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstacleLeft, setObstacleLeft] = useState(screenWidth)
  const[obstacleLeftTwo, setObstacleLeftTwo] = useState(screenWidth + screenWidth / 2 + 30)
  const [obstacleHeight, setObstacleHeight] = useState(0)
  const[obstacleHeightTwo, setObstacleHeightTwo] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const gravity = 3
  let obstacleWidth = 60
  let ObstacleHeight = 300
  let gap = 200
  let gameTimerId
  let obstacleTimerId

  useEffect(()=>{
    if(birdBottom > 0){
      gameTimerId = setInterval(()=>{
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30)

      return () => {
        clearInterval(gameTimerId)
      }
  }
  }, [birdBottom])

  useEffect(()=>{
    if(obstacleLeft > -60){
      obstacleTimerId = setInterval(()=>{
        setObstacleLeft(obstacleLeft => obstacleLeft - 5)
      }, 30)

      return () => {
        clearInterval(obstacleTimerId)
      }
    } else {
      setScore(score + 1)
      setObstacleLeft(screenWidth)
      setObstacleHeight(-Math.random() * 100)
    }
  }, [obstacleLeft])

  useEffect(()=>{
    if(obstacleLeftTwo > -60){
      obstacleTimerId = setInterval(()=>{
        setObstacleLeftTwo(obstacleLeftTwo => obstacleLeftTwo - 5)
      }, 30)

      return () => {
        clearInterval(obstacleTimerId)
      }
    } else {
      setScore(score + 1)
      setObstacleLeftTwo(screenWidth)
      setObstacleHeightTwo(-Math.random() * 100)
    }
  }, [obstacleLeftTwo])
   
  const jump = () => {
    if(!isGameOver && (birdBottom < screenHeight)){
      setBirdBottom(birdBottom => birdBottom + 50)
      console.log('jumped')
    }
  }

  useEffect(()=>{
    if(
      (birdBottom < obstacleHeight + 500 + 30 && birdBottom > obstacleHeight + 500 + 30 - 30 && obstacleLeft > screenWidth / 2 - 30 && obstacleLeft < screenWidth / 2 + 30) ||
      (birdBottom < obstacleHeightTwo + 500 + 30 && birdBottom > obstacleHeightTwo + 500 + 30 - 30 && obstacleLeftTwo > screenWidth / 2 - 30 && obstacleLeftTwo < screenWidth / 2 + 30) ||
      birdBottom === 0
    ){
      console.log('game over')
      gameOver()
    }

})
}