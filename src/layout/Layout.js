import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import { Container } from "./LayoutStyles";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta property="og:title" content={title} key={title} />
        <meta name="author" content="Ivan Damjanović" />
        <meta name="description" content="Web Developer Portfolio" />
      </Head>
      <Container>
        <Navbar />
        <main> {children}</main>
        <Footer />
      </Container>
    </>
  );
};
