import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './App.css'
import MediaPlayer from './components/MediaPlayer/MediaPlayer'
import Header from './components/Header/Header'

function App() {
  const [audioSrc, setAudioSrc] = useState<string | null>(null)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  const handleAudioDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      const fileURL = URL.createObjectURL(acceptedFiles[0])
      setAudioSrc(fileURL)
    }
  }

  const handleVideoDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      const fileURL = URL.createObjectURL(acceptedFiles[0])
      setVideoSrc(fileURL)
    }
  }

  const {
    getRootProps: getAudioRootProps,
    getInputProps: getAudioInputProps,
  } = useDropzone({
    onDrop: handleAudioDrop,
    accept: 'audio/*',
  })

  const {
    getRootProps: getVideoRootProps,
    getInputProps: getVideoInputProps,
  } = useDropzone({
    onDrop: handleVideoDrop,
    accept: 'video/*',
  })

  return (
    <div>
      <Header title="Media Player" />
      <div className="p-4">
        <div
          {...getAudioRootProps()}
          className="border-2 border-dashed border-blue-500 p-6 rounded-lg text-center cursor-pointer mb-4"
        >
          <input {...getAudioInputProps()} />
          <p className="text-gray-700">Drag & drop an audio file here, or click to select one</p>
        </div>
        {audioSrc && <MediaPlayer type="audio" src={audioSrc} />}

        <div
          {...getVideoRootProps()}
          className="border-2 border-dashed border-green-500 p-6 rounded-lg text-center cursor-pointer mt-6"
        >
          <input {...getVideoInputProps()} />
          <p className="text-gray-700">Drag & drop a video file here, or click to select one</p>
        </div>
        {videoSrc && <MediaPlayer type="video" src={videoSrc} />}
      </div>
    </div>
  )
}

export default App
