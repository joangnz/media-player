import React from 'react'
import './MediaPlayer.css'

interface MediaPlayerProps {
    type: 'audio' | 'video'
    src: string
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ type, src }) => {
    return (
        <div className="media-player">
            {type === 'audio' ? (
                <audio controls>
                    <source src={src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ) : (
                <video controls>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video element.
                </video>
            )}
        </div>
    )
}

export default MediaPlayer;