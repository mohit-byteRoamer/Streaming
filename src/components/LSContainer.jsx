import { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import StreamView from "./StreamView";

export default function LSContainer({ streamId, onLeave }) {
  const [joined, setJoined] = useState(false);

  const { join } = useMeeting({
    onMeetingJoined: () => setJoined(true),
    onMeetingLeft: onLeave,
    onError: (error) => alert(error.message),
  });

  return (
    <div className="container">
      <h3>Stream Id: {streamId}</h3>
      {joined ? <StreamView /> : <button onClick={join}>Join Stream</button>}
    </div>
  );
}
