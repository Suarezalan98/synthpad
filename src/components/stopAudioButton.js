import React from "react";

export function StopAudioButton(props) {
  const { sm } = props;

  function handleStopClick() {
    sm.stopAllAudio();
  }
  return (
    <div>
      <button onClick={handleStopClick}>Stop Audio</button>
    </div>
  );
}
