import { useState, useEffect } from "react"
import "./App.css"

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
]

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
]

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

function App() {
  const [padStyle, setPadStyle] = useState(inactiveStyle)
  const [currentPadBank, setCurrentPadBank] = useState(bankOne)
  const [sliderVal, setSliderVal] = useState(0.3)
  const [display, setDisplay] = useState(String.fromCharCode(160))

  console.log(currentPadBank)

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)

    // returned function will be called on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  function handleKeyPress(e) {
    const selectedAudio = document.getElementById(e.key.toUpperCase())
    const selectedAudioName = document.getElementById("e.keyCode")
    if (selectedAudio) {
      selectedAudio.currentTime = 0
      selectedAudio.play()
      // setDisplay(e.target.id.replace(/-/g, " "))
    }
    console.log(e.keyCode)
  }

  // function activatePad() {
  //   if (this.props.power) {
  //     if (this.state.padStyle.backgroundColor === "orange") {
  //       this.setState({
  //         padStyle: inactiveStyle
  //       })
  //     } else {
  //       this.setState({
  //         padStyle: activeStyle
  //       })
  //     }
  //   } else if (this.state.padStyle.marginTop === 13) {
  //     this.setState({
  //       padStyle: inactiveStyle
  //     })
  //   } else {
  //     this.setState({
  //       padStyle: {
  //         height: 77,
  //         marginTop: 13,
  //         backgroundColor: "grey",
  //         boxShadow: "0 3px grey"
  //       }
  //     })
  //   }
  // }

  function playSound(e) {
    const sound = e.target.firstElementChild
    // console.log(e.target.id)
    sound.currentTime = 0
    sound.play()
    // this.activatePad()
    // setTimeout(() => this.activatePad(), 100)
    setDisplay(e.target.id.replace(/-/g, " "))
  }

  function selectBank() {
    if (currentPadBank === bankOne) {
      setCurrentPadBank(bankTwo)
      setDisplay("Smooth Piano Kit")
      // console.log(currentPadBank)
    } else {
      setCurrentPadBank(bankOne)
      setDisplay("Heater Kit")
    }
  }

  function adjustVolume(e) {
    // this.setState({
    //   sliderVal: e.target.value,
    //   display: 'Volume: ' + Math.round(e.target.value * 100)
    // });
    // setTimeout(() => this.clearDisplay(), 1000);
    setSliderVal(e.target.value)
    console.log(sliderVal)
  }

  const clips = [].slice.call(document.getElementsByClassName("clip"))
  console.log(clips)
  clips.forEach(sound => {
    sound.volume = sliderVal
  })

  return (
    <div className="inner-container" id="drum-machine">
      <div className="pad-bank">
        {currentPadBank.map(x => {
          return (
            <div key={x.id} className="drum-pad" id={x.id} style={{ backgroundColor: "grey", marginTop: 10, boxShadow: "black 3px 3px 5px" }} onClick={playSound}>
              <audio className="clip" id={x.keyTrigger} src={x.url} />
              {x.keyTrigger}
            </div>
          )
        })}
      </div>
      <div className="controls-container">
        <div className="control">
          <p>Power</p>
          <div className="select">
            <div className="inner" style={{ float: "right" }}></div>
          </div>
        </div>
        <p id="display">{display}</p>
        <div className="volume-slider">
          <input type="range" step="0.01" min="0" max="1" value={sliderVal} onChange={adjustVolume} />
        </div>
        <div className="control">
          <p>Bank</p>
          <div className="select" onClick={selectBank}>
            <div className="inner" style={{ float: "left" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
