import React, { useRef, useState } from 'react'

interface MediaPlayerProps {
    type: 'audio' | 'video'
    src: string
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ type, src }) => {
    const mediaRef = useRef<HTMLMediaElement | null>(null)
    const [volume, setVolume] = useState(1)

    const handlePlay = () => {
        mediaRef.current?.play()
    }

    const handlePause = () => {
        mediaRef.current?.pause()
    }

    const handleStop = () => {
        if (mediaRef.current) {
            mediaRef.current.pause()
            mediaRef.current.currentTime = 0
        }
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value)
        setVolume(newVolume)
        if (mediaRef.current) {
            mediaRef.current.volume = newVolume
        }
    }

    return (
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md mx-auto">
            {type === 'audio' ? (
                <audio ref={mediaRef} className="w-full mb-4">
                    <source src={src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ) : (
                <video ref={mediaRef} className="w-full mb-4 rounded-lg">
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video element.
                </video>
            )}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <button
                    onClick={handlePlay}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Play
                </button>
                <button
                    onClick={handlePause}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                    Pause
                </button>
                <button
                    onClick={handleStop}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Stop
                </button>
            </div>
            <div className="mt-4 w-full">
                <label htmlFor="volume" className="block text-gray-700 mb-2">
                    Volume:
                </label>
                <input
                    id="volume"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full accent-blue-500"
                />
            </div>
        </div>
    )
}

export default MediaPlayer;