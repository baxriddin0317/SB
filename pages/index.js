import Head from "next/head";
import About from "../Components/About";
import Content from "../Components/Content";
import Main from "../Components/Main";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
        XOJA | Front-End Developer
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Content />
    </div>
  )
}
