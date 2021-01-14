import * as React from "react"

import Layout from "../components/profile-layout";
import Intro from "../components/intro";
import About from "../components/about";
import Experience from "../components/experience";


// markup
const IndexPage = () => {
  return (
    <Layout>
      <Intro/>
      <About/>
      <Experience/>
    </Layout>
  )
}

export default IndexPage
