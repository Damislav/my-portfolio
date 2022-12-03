import { Cursor } from "custom-pointer-react";

const CursorPointer = ({ children }) => {
  return (
    <>
      <Cursor color="white">{children}</Cursor>
    </>
  );
};

export default CursorPointer;
