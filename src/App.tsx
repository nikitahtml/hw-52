import './App.css'
import Card from "./componets/Card/Card.tsx";


const App = () => {


  return (
          <div className="playingCards faceImages">
              <Card rank={"k"} suit={"diams"}/>
              <Card rank={"q"} suit={"hearts"} />
              <Card rank={"j"} suit={"clubs"} />
              <Card rank={"a"} suit={"spades"} />
          </div>

  )
};

export default App
