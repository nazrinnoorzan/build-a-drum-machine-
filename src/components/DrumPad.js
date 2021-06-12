import { useState, useEffect } from "react"

const activeStyle = {
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
  height: 77,
  marginTop: 13
}

const inactiveStyle = {
  backgroundColor: "grey",
  marginTop: 10,
  boxShadow: "3px 3px 5px black"
}

function DrumPad(props) {
  const [padStyle, setPadStyle] = useState(inactiveStyle)

  // listening to keydown event
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  })

  // play audio when key press
  function handleKeyPress(e) {
    if (e.keyCode === props.keyCode) {
      playSound()
    }
  }

  // play audio if power ON
  function playSound() {
    if (props.power) {
      const sound = document.getElementById(props.keyTrigger)
      sound.currentTime = 0
      sound.play()
      setPadStyle(activeStyle)
      setTimeout(() => setPadStyle(inactiveStyle), 100)
      props.setDisplay(props.id.replace(/-/g, " "))
    }
  }

  return (
    <div key={props.id} className="drum-pad" id={props.id} style={padStyle} onClick={playSound}>
      <audio className="clip" id={props.keyTrigger} src={props.url} />
      {props.keyTrigger}
    </div>
  )
}

export default DrumPad
