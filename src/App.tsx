import React, {useState} from "react";
import videoSrc from './video.mp4';
import PlayerButton from "./Components/PlayerButton.tsx";

function App() {

    const video = React.useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const controlPlayPause = () => {
        if (!playing) {
            video.current?.play()
            setPlaying(true);
        } else {
            video.current?.pause();
            setPlaying(false);
        }
    }
    const forward = () => {
        if (!video.current) return
        video.current.currentTime += 2;
        if (video.current.duration === video.current.currentTime) {
            video.current.currentTime = 0
        }
    }
    const playbackRate = (speed: number) => {
        if (!video.current) return
        video.current.playbackRate = speed;
    }

    function mute() {
        if (!video.current) return;
        video.current.muted = !video.current.muted;
    }

    const pictureAndPicture = async () => {
        if (!video.current) return;
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        } else {
            await video.current.requestPictureInPicture()
        }
    }

    return (
        <div>
            <div className='flex'>
                <PlayerButton children={!playing ? 'Play' : 'Pause'}
                              onClick={controlPlayPause}/>
                <PlayerButton children='+ 2s'
                              onClick={forward}/>
                <PlayerButton children='1x'
                              onClick={() => playbackRate(1)}/>
                <PlayerButton children='2x'
                              onClick={() => playbackRate(2)}/>
                <PlayerButton children='M'
                              onClick={mute}/>
                <PlayerButton children='PiP'
                              onClick={pictureAndPicture}/>
            </div>
            <video src={videoSrc}
                   ref={video}>

            </video>
        </div>
    );
}

export default App
