import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { Grid } from "./grid";
import { StopAudioButton } from "./stopAudioButton";
import "./main.css";

export function Main(props) {
  const [state, setHookState] = useState({ ready: false, volume: 50 });
  const setState = (o) => setHookState((s) => ({ ...s, ...o }));

  useEffect(() => {
    const updateState = () => setState({ ready: true });
    props.sm.addEventListener("ready", updateState);
    return () => {
      props.sm.removeEventListener("ready", updateState);
    };
  }, [props.sm, state]);

  return (
    <div className="container">
      <div style={{ padding: ".5em" }}>
        <h1>{state.ready ? "Ready" : "Loading Audio Files"}</h1>
        <label htmlFor="volume">Volume: {state.volume}</label>
        <input
          id="volume"
          style={{ width: "50%" }}
          type="range"
          min="1"
          max="100"
          value={state.volume.toString()}
          onChange={(event) => {
            setState({ volume: event.target.value });
            props.sm.setGlobalVolume(event.target.value);
          }}
        />
      </div>
      <StopAudioButton sm={props.sm} />
      <div className="pad">
      {/* <Grid>
        <Row>
          row 1
          <Button sm={props.sm} fileName="Pad-Downsweep-Fx-Fmaj" btnType="fx" />
          <Button sm={props.sm} fileName="Pad-Bass-Guitar-Part1-100bpm-Fmaj" btnType="bass"/>
          <Button sm={props.sm} fileName="Pad-Bass-Guitar-Part2-100bpm-Fmaj" btnType="bass"/>
        </Row>
        <Row>
          row 2
          <Button sm={props.sm} fileName="Pad-Woo-Fx" btnType="fx"/>
          <Button sm={props.sm} fileName="Pad-Guitar-100bpm-Fmaj" btnType="core"/>
          <Button sm={props.sm} fileName="Pad-Guitar-Full-100bpm-Fmaj" btnType="core"/>
        </Row>
        <Row>
          row 3
          <Button sm={props.sm} fileName="Pad-Perc-FX-Fmaj" btnType="fx"/>
          <Button sm={props.sm} fileName="Pad-Hi-hat-100bpm" btnType="drum"/>
          <Button sm={props.sm} fileName="Pad-Rhode-100bpm-Fmaj" btnType="core"/>
        </Row>
        <Row>
          row 4
          <Button sm={props.sm} fileName="Pad-80s-Kick" btnType="drum"/>
          <Button sm={props.sm} fileName="Pad-Retro-Snare" btnType="drum"/>
          <Button sm={props.sm} fileName="Pad-Clap" btnType="drum"/>
        </Row>
      </Grid> */}
      <Grid>
          <Button sm={props.sm} fileName="Pad-Downsweep-Fx-Fmaj" btnType="fx" />
          <Button sm={props.sm} fileName="Pad-Bass-Guitar-Part1-100bpm-Fmaj" btnType="bass"/>
          <Button sm={props.sm} fileName="Pad-Bass-Guitar-Part2-100bpm-Fmaj" btnType="bass"/>
          <Button sm={props.sm} fileName="Pad-Woo-Fx" btnType="fx"/>
          <Button sm={props.sm} fileName="Pad-Guitar-100bpm-Fmaj" btnType="core"/>
          <Button sm={props.sm} fileName="Pad-Guitar-Full-100bpm-Fmaj" btnType="core"/>
          <Button sm={props.sm} fileName="Pad-Perc-FX-Fmaj" btnType="fx"/>
          <Button sm={props.sm} fileName="Pad-Hi-hat-100bpm" btnType="drum"/>
          <Button sm={props.sm} fileName="Pad-Rhode-100bpm-Fmaj" btnType="core"/>
          <Button sm={props.sm} fileName="Pad-80s-Kick" btnType="drum"/>
          <Button sm={props.sm} fileName="Pad-Retro-Snare" btnType="drum"/>
          <Button sm={props.sm} fileName="Pad-Clap" btnType="drum"/>
      </Grid>
      </div>
    </div>
  );
}
