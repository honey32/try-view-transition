"use client";

import { useCallback } from "react";

interface DialogProps extends React.ComponentPropsWithoutRef<"dialog"> {
  modal?: boolean | undefined;
}

export const Dialog: React.FC<DialogProps> = ({
  modal,
  children,
  open,
  ...props
}) => {
  return (
    <dialog
      ref={useCallback(
        (node: HTMLDialogElement) => {
          // こいつは、useLayoutEffect に置き換え可能だが、
          // useEffect には置き換え不可能（トランジションとうまく連携できない）
          if (modal) {
            if (open) {
              node.showModal();
              return () => {
                node.close();
              };
            }
          }
        },
        [modal, open],
      )}
      open={!modal && open}
      {...props}
    >
      {children}
    </dialog>
  );
};
