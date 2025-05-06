import { useState } from 'react'
import './App.css'
import MediaPlayer from './components/MediaPlayer/MediaPlayer'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header title="Media Player" />
      <MediaPlayer type="audio" src="path/audio.mp3" />
      <MediaPlayer type="video" src="path/video.mp4" />
    </div>
  )
}

export default App
