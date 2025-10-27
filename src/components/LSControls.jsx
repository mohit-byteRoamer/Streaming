import { useState } from "react";
import { useMeeting, Constants } from "@videosdk.live/react-sdk";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Users,
  LogOut,
  User,
} from "lucide-react";

export default function LSControls() {
  const { leave, toggleMic, toggleWebcam, changeMode, meeting } = useMeeting();
  const currentMode = meeting.localParticipant.mode;

  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  const handleMicToggle = () => {
    toggleMic();
    setMicOn((prev) => !prev);
  };

  const handleCamToggle = () => {
    toggleWebcam();
    setCamOn((prev) => !prev);
  };

  const handleModeSwitch = () => {
    changeMode(
      currentMode === Constants.modes.SEND_AND_RECV
        ? Constants.modes.RECV_ONLY
        : Constants.modes.SEND_AND_RECV
    );
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-800/70 backdrop-blur-md border border-gray-700 shadow-xl flex items-center gap-5 px-6 py-3 rounded-full text-white z-50">
      {/* Leave Button */}
      <button
        onClick={leave}
        className="bg-red-600 hover:bg-red-700 transition-all p-3 rounded-full"
        title="Leave Meeting"
      >
        <LogOut className="w-5 h-5" />
      </button>

      {/* Mic Toggle */}
      {currentMode === Constants.modes.SEND_AND_RECV && (
        <button
          onClick={handleMicToggle}
          className={`${
            micOn
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-red-600 hover:bg-red-700"
          } p-3 rounded-full transition-all`}
          title="Toggle Mic"
        >
          {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
        </button>
      )}

      {/* Camera Toggle */}
      {currentMode === Constants.modes.SEND_AND_RECV && (
        <button
          onClick={handleCamToggle}
          className={`${
            camOn
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-red-600 hover:bg-red-700"
          } p-3 rounded-full transition-all`}
          title="Toggle Camera"
        >
          {camOn ? (
            <Video className="w-5 h-5" />
          ) : (
            <VideoOff className="w-5 h-5" />
          )}
        </button>
      )}

      {/* Mode Switch */}
      <button
        onClick={handleModeSwitch}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full text-sm font-medium transition-all"
      >
        {currentMode === Constants.modes.SEND_AND_RECV ? (
          <>
            <Users className="w-4 h-4" /> Switch to Audience
          </>
        ) : (
          <>
            <User className="w-4 h-4" /> Switch to Host
          </>
        )}
      </button>
    </div>
  );
}
