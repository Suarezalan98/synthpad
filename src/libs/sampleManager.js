import sampleData from "./samples.json";

export class SampleManager extends EventTarget {
  static NON_OVERLAPPING_TYPES = ["GUITAR", "BASS"];

  constructor() {
    super();
    this.globalVolume = 0.5;
    this.audioElements = new Map();
    this.isReady = new Map();
    this.samples = new Map();

    sampleData.forEach((sample) => this.samples.set(sample.fileName, sample));
  }

  init() {
    this.samples.forEach(this.loadSample, this);
  }

  createAudioElement(fileName) {
    const el = document.createElement("audio");
    el.volume = this.globalVolume;
    el.loop = false;
    el.controls = false;
    el.preload = "auto";
    el.src = `/assets/${fileName}.wav`;
    return el;
  }

  dispatchReady() {
    const readyEvent = new Event("ready");
    this.dispatchEvent(readyEvent);
  }

  checkAllReady() {
    const isReadyArray = [...this.isReady];
    const allAreReady = isReadyArray.every((ready) => ready);
    if (allAreReady) this.dispatchReady();
  }

  loadSample(sample) {
    const el = this.createAudioElement(sample.fileName);
    this.audioElements.set(sample.fileName, el);
    this.isReady.set(sample.fileName, false);

    el.addEventListener("canplaythrough", () => {
      this.isReady.set(sample.fileName, true);
      this.checkAllReady();
    });

    document.body.appendChild(el);
  }

  stopMatchingTypes({ instrumentType, fileName }) {
    const allSamples = [...this.samples.values()];
    const matchingSamples = allSamples.filter((sample) => {
      // TODO: make isPlaying instrument type map - abby
      const isMatchingType = sample.instrumentType === instrumentType;
      const isInitialSample = sample.fileName !== fileName;

      return isMatchingType && isInitialSample;
    });
    // console.log(allSamples);

    matchingSamples.forEach((sample) => this.stop(sample.fileName));
  }

  stop = (fileName) => {
    /** @type {HTMLAudioElement} */
    const el = this.audioElements.get(fileName);
    el.pause();
    el.currentTime = 0;
  };

  play = (fileName) => {
    /** @type {HTMLAudioElement} */
    const el = this.audioElements.get(fileName);
    const sample = this.samples.get(fileName);

    if (SampleManager.NON_OVERLAPPING_TYPES.includes(sample.instrumentType)) {
      this.stopMatchingTypes(sample);
    }

    if (!el.paused) {
      el.currentTime = 0;
    } else {
      el.play();
    }
  };
  
  buttonActive = (fileName) => {
    const el = this.audioElements.get(fileName);
    if (!el.paused) {
      return true;
    } else {
      return false;
    }
  }

  stopAllAudio = () => {
    this.audioElements.forEach((element) => element.pause());
    this.audioElements.forEach((element) => (element.currentTime = 0));
  };

  setGlobalVolume = (value) => {
    this.globalVolume = value / 1000;
    this.audioElements.forEach((el) => (el.volume = this.globalVolume));
  };
}
