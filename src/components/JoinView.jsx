import { useState } from "react";
import { Constants } from "@videosdk.live/react-sdk";

export default function JoinView({ initializeStream, setMode }) {
  const [streamId, setStreamId] = useState("");

  const handleAction = async (mode) => {
    setMode(mode);
    await initializeStream(streamId);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-6">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            Go Live Instantly 🎬
          </h1>
          <p className="text-gray-400 text-sm">
            Host or join a live stream with just one click.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleAction(Constants.modes.SEND_AND_RECV)}
            className="group relative inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]"
          >
            <span className="relative z-10">+ Create Stream</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 rounded-xl transition"></div>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="🔑 Enter Stream ID"
            value={streamId}
            onChange={(e) => setStreamId(e.target.value)}
            className="w-full bg-gray-800/70 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 rounded-xl py-3 px-4 text-center text-gray-200 placeholder-gray-500 transition-all"
          />

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleAction(Constants.modes.SEND_AND_RECV)}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 transition-all py-3 rounded-xl font-medium hover:scale-[1.03]"
            >
              Join as Host
            </button>
            <button
              onClick={() => handleAction(Constants.modes.RECV_ONLY)}
              className="flex-1 bg-fuchsia-600 hover:bg-fuchsia-700 transition-all py-3 rounded-xl font-medium hover:scale-[1.03]"
            >
              Join as Audience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
