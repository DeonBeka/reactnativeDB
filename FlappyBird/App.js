import React, { use } from "react";
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
  })
}