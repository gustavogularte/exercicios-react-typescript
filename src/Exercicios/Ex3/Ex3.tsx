import React, { useRef } from 'react';
import videoSrc from './video.mp4';

// Adicione funcionalidades ao player de vídeo:

// 1 - Use um estado reativo para verificar se o vídeo está tocando ou não.
// 2 - Função para avançar o vídeo em +2s.
// 3 - Função para alterar o playbackRate do vídeo.
// 4 - Função para entrar/sair do modo pictureInPicture.
// 5 - Função para alternar o som (mudo/não mudo) do vídeo.

const Ex3 = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  function muteVideo() {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  }

  async function pictureInPicture() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current.requestPictureInPicture();
    }
  }

  function setPlaybackSpeed(speed: number) {
    if (!video.current) return;
    video.current.playbackRate = speed;
  }

  function seekVideo(time: number) {
    if (!video.current) return;
    video.current.currentTime += time;
  }

  function togglePlay() {
    if (!video.current) return;
    playing ? video.current.pause() : video.current.play();
  }

  return (
    <div style={{ maxWidth: '800px' }}>
      <nav className="flex">
        <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={() => seekVideo(2)}>+2s</button>
        <button onClick={() => setPlaybackSpeed(1.0)}>1x</button>
        <button onClick={() => setPlaybackSpeed(2.0)}>2x</button>
        <button onClick={() => pictureInPicture()}>PiP</button>
        <button onClick={() => muteVideo()}>Mute</button>
      </nav>
      <video
        src={videoSrc}
        ref={video}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>
    </div>
  );
};

export default Ex3;
