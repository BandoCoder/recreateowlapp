import "./App.css";
import Participants from "./composition/Participants";
import Stage from "./composition/Stage";
import Chatlog from "./composition/Chatlog";
import {
  inSession,
  outSession,
  chatEvents,
  participants,
  onStage,
} from "./composition/store";

function App() {
  return (
    <main className="App">
      <Participants inSession={inSession} outSession={outSession} />
      <Chatlog participants={participants} chatEvents={chatEvents} />
      <Stage onStage={onStage} />
    </main>
  );
}

export default App;
