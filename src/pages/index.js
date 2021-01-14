import * as React from "react"

import Layout from "../components/profile-layout";
import Intro from "../components/intro";
import About from "../components/about";
import Experience from "../components/experience";
import Footer from "../components/footer";


// markup
const IndexPage = () => {
  return (
    <Layout>
      <Intro/>
      <About/>
      <Experience/>
      <Footer/>
    </Layout>
  )
}

export default IndexPage
