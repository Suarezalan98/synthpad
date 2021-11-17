// export class Music extends EventTarget {
//   static audioFiles = [
//     "Pad-80s-Kick",
//     "Pad-Bass-Guitar-Part1-100bpm-Fmaj",
//     "Pad-Bass-Guitar-Part2-100bpm-Fmaj",
//     "Pad-Clap",
//     "Pad-Downsweep-Fx-Fmaj",
//     "Pad-Guitar-100bpm-Fmaj",
//     "Pad-Guitar-Full-100bpm-Fmaj",
//     "Pad-Hi-hat-100bpm",
//     "Pad-Perc-FX-Fmaj",
//     "Pad-Retro-Snare",
//     "Pad-Rhode-100bpm-Fmaj",
//     "Pad-Woo-Fx",
//   ];

//   constructor() {
//     super();
//     this.globalVolume = 0.5;
//     this.refs = new Map();
//     this.playable = new Map();
//   }

//   init = () => {
//     Music.audioFiles.forEach(this.loadAudioFile);
//   };

//   checkAllPlayable = () => {
//     const allPlayableFiles = [...this.playable].every(Boolean);
//     if (allPlayableFiles) {
//       const readyEvent = new Event("ready");
//       this.dispatchEvent(readyEvent);
//     }
//   };

//   loadAudioFile = (fileName) => {
//     const element = document.createElement("audio");
//     element.volume = this.globalVolume;
//     element.controls = false;
//     element.loop = false;
//     element.preload = "auto";
//     element.src = `/assets/${fileName}.wav`;
//     element.addEventListener("canplaythrough", () => {
//       this.playable.set(fileName, true);
//       this.checkAllPlayable();
//     });
//     this.playable.set(fileName, false);
//     this.refs.set(fileName, element);
//     document.body.appendChild(element);
//   };

//   play = (filename) => {
//     const element = this.refs.get(filename);
//     if (!element.paused) {
//       element.currentTime = 0;
//     } else {
//       element.play();
//     }
//   };
//   stopAudio = () => {
//     this.refs.forEach((element) => element.pause());
//     this.refs.forEach((element) => (element.currentTime = 0));
//   };

//   setVolume = (value) => {
//     this.globalVolume = value / 100;
//     this.refs.forEach((element) => (element.volume = this.globalVolume));
//   };
// }
