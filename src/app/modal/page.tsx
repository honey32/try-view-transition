"use client";

import {
  useState,
  unstable_ViewTransition as ViewTransition,
  startTransition,
} from "react";
import { Dialog } from "./dialog";
import { GlobalStyles, keyframes } from "restyle";

const SlideInKeyFrames = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(50%)",
  },
  "50%": {
    opacity: 0,
    transform: "translateY(25%)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const SlideOutKeyFrames = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0)",
  },
  "50%": {
    opacity: 0,
    transform: "translateY(25%)",
  },
  to: {
    opacity: 0,
    transform: "translateY(50%)",
  },
});

export default function ModalPage() {
  const [text, setText] = useState("");

  const [dialogState, setDialogState] = useState<{ text: string } | undefined>(
    undefined,
  );
  const [dialogLastReturnValue, setDialogLastReturnValue] = useState<
    string | undefined
  >(undefined);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Dialog Modal Demo</h1>

      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter some text..."
          className="w-full max-w-md px-4 py-2 mb-4 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-transparent"
        />
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => {
            startTransition(() => {
              setDialogState({ text });
            });
          }}
          disabled={dialogState !== undefined}
          className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition disabled:bg-slate-500"
        >
          Open Modal
        </button>

        <p>Last Return Value: {dialogLastReturnValue}</p>
      </div>

      <SlideInKeyFrames />
      <SlideOutKeyFrames />
      <GlobalStyles>
        {{
          "::view-transition-new(modal-dialog)": {
            animation: `${SlideInKeyFrames} 0.2s ease-out`,
          },
          // なぜか、消えるときのアニメーションは上手くいかない…
          "::view-transition-old(modal-dialog)": {
            animation: `${SlideOutKeyFrames} 0.2s ease-in`,
          },
        }}
      </GlobalStyles>

      <ViewTransition name="modal-dialog">
        <Dialog
          modal
          open={dialogState !== undefined}
          className="p-8 rounded-lg bg-gray-800 backdrop:bg-black/50 m-auto"
          onClose={(e) => {
            console.log("onClose");
            startTransition(() => {
              setDialogState(undefined);
              setDialogLastReturnValue(e.currentTarget.returnValue);
            });
          }}
          onCancel={() => {
            // Esc キーに反応するイベントハンドラはこっち
            startTransition(() => {
              setDialogState(undefined);
            });
          }}
        >
          <form method="dialog" className="grid gap-4">
            <h2 className="text-xl text-gray-100  font-bold">Modal Title</h2>
            <p className="text-gray-100">
              This is a modal dialog using the native dialog element.
            </p>
            <p>
              <em className="text-violet-300">{dialogState?.text}</em>
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="submit"
                value="cancel"
                className="px-4 py-2 text-white rounded-sm hover:bg-gray-700 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                value="ok"
                className="px-4 py-2 bg-teal-800 text-white rounded-sm hover:bg-teal-700 transition"
              >
                OK, Proceed
              </button>
            </div>
          </form>
        </Dialog>
      </ViewTransition>
    </div>
  );
}
