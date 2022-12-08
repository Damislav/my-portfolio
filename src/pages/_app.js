import Theme from "../styles/theme";
import CustomCursor from "../components/CursorPointer/CursorPointer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        {/* <CustomCursor /> */}
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
