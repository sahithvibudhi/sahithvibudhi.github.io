import * as React from "react"

import Layout from "../components/profile-layout";
import Intro from "../components/intro";
import About from "../components/about";


// markup
const IndexPage = () => {
  return (
    <Layout>
      <Intro/>
      <About/>
    </Layout>
  )
}

export default IndexPage
