import { useMeeting, Constants } from "@videosdk.live/react-sdk";
import LSControls from "./LSControls";
import Participant from "./Participant";

export default function StreamView() {
  const { participants } = useMeeting();

  return (
    <div>
      <LSControls />
      {[...participants.values()]
        .filter((p) => p.mode === Constants.modes.SEND_AND_RECV)
        .map((p) => (
          <Participant participantId={p.id} key={p.id} />
        ))}
    </div>
  );
}
