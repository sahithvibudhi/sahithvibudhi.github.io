import * as React from "react"

import Layout from "../components/profile-layout";


// markup
const IndexPage = () => {
  return (
    <Layout>
      <h2>Hello <span role="img" aria-label="hand">👋</span></h2>
      <h2 className="lead">My name is Sahith</h2>
      <h2>I am a software Engineer</h2>
      <button type="button" className="btn btn-primary">Primary</button>
    </Layout>
  )
}

export default IndexPage
