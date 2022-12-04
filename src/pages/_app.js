import CursorPointer from "../components/CursorPointer/CursorPointer";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <CursorPointer />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
