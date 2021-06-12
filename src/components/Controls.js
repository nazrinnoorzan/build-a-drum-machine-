import { useState } from "react"

function Controls(props) {
  const [sliderVal, setSliderVal] = useState(0.3)

  // adjust volume level
  function adjustVolume(e) {
    setSliderVal(e.target.value)
    props.setDisplay("Volume: " + Math.round(e.target.value * 100))
    setTimeout(() => props.setDisplay(String.fromCharCode(160)), 1000)
  }

  // toggle slider CSS
  const powerSlider = props.power ? { float: "right" } : { float: "left" }
  const bankSlider = props.currentPadBank[0].id === "Heater-1" ? { float: "left" } : { float: "right" }

  // set audio volume based on the volume level
  const clips = [].slice.call(document.getElementsByClassName("clip"))
  clips.forEach(sound => {
    sound.volume = sliderVal
  })

  return (
    <div className="controls-container">
      <div className="control">
        <p>Power</p>
        <div className="select" onClick={() => (props.power ? props.setPower(false) : props.setPower(true))}>
          <div className="inner" style={powerSlider}></div>
        </div>
      </div>
      <p id="display">{props.display}</p>
      <div className="volume-slider">
        <input type="range" step="0.01" min="0" max="1" value={sliderVal} onChange={adjustVolume} />
      </div>
      <div className="control">
        <p>Bank</p>
        <div className="select" onClick={props.selectBank}>
          <div className="inner" style={bankSlider}></div>
        </div>
      </div>
    </div>
  )
}

export default Controls
