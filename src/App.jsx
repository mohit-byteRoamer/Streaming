import "./App.css";
import { useState } from "react";
import { MeetingProvider, Constants } from "@videosdk.live/react-sdk";
import JoinView from "./components/JoinView";
import LSContainer from "./components/LSContainer";
import { AUTH_TOKEN, createStream } from "./api";

function App() {
  const [streamId, setStreamId] = useState(null);
  const [mode, setMode] = useState(Constants.modes.SEND_AND_RECV);

  const initializeStream = async (id) => {
    const newStreamId = id || (await createStream({ token: AUTH_TOKEN }));
    setStreamId(newStreamId);
  };

  const onStreamLeave = () => setStreamId(null);

  return AUTH_TOKEN && streamId ? (
    <MeetingProvider
      config={{
        meetingId: streamId,
        micEnabled: true,
        webcamEnabled: true,
        name: "John Doe",
        mode,
      }}
      token={AUTH_TOKEN}
    >
      <LSContainer streamId={streamId} onLeave={onStreamLeave} />
    </MeetingProvider>
  ) : (
    <JoinView initializeStream={initializeStream} setMode={setMode} />
  );
}

export default App;
