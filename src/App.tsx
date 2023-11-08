import React from "react";
import videoSrc from './video.mp4';
import useLocalStorage from "./CustomHooks/useLocalStorage.tsx";

function App() {
    const video = React.useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = React.useState(false);
    const [volume, setVolume] = useLocalStorage('volume', '0');

    React.useEffect(() => {
        if (!video.current) return;
        if (Number(volume) > 1 || Number(volume) < 0) return;
        video.current.volume = Number(volume);
    }, [volume]);

    const controlPlayPause = () => {
        if (!playing) {
            video.current?.play()
            setPlaying(true);
        } else {
            video.current?.pause();
            setPlaying(false);
        }
    }

    return (
        <div>
            <div className='flex'>
                <button onClick={controlPlayPause}>{playing ? 'Pause' : 'Play'}</button>
                <button onClick={() => setVolume("0")}>0</button>
                <button onClick={() => setVolume("0.5")}>50%</button>
                <button onClick={() => setVolume("1")}>100%</button>
                <button onClick={() => setVolume("1.1")}>200%</button>
            </div>
            <video src={videoSrc}
                   ref={video}>
            </video>
        </div>
    );
}

export default App
