import { Cursor } from "custom-pointer-react";
import { useEffect } from "react";

const CursorPointer = () => {
  useEffect(() => {
    handleCursor();
  });

  const handleCursor = () => {
    if (window.innerWidth < 720) {
      console.log(window.innerWidth);
      return null;
    } else {
      return <Cursor className="cursor" color="white" />;
    }
  };
};

export default CursorPointer;
