import React from 'react'
import Link from 'gatsby-link'
import ClickyThing from '../components/clickyThing';

const IndexPage = () => (
  <div>
    <h1>I done a website</h1>
    <ClickyThing />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
