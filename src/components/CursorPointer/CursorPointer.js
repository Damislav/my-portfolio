import { Cursor } from "custom-pointer-react";
import styles from "./CursorPointer.module.css";
const CursorPointer = () => {
  return (
    <div className={styles.dot}>
      <Cursor color="white" />
    </div>
  );
};

export default CursorPointer;
