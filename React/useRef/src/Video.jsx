import { useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);
  return (
    <div>
      <video src="/video.mp4" width={500} ref={videoRef} />
      <div>
        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>
        <button onClick={() => (videoRef.current.currentTime += 1)}>+1s</button>
        <button onClick={() => (videoRef.current.currentTime -= 1)}>-1s</button>
        <button onClick={() => (videoRef.current.currentTime = 0)}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Video;
