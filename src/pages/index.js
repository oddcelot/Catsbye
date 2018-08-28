import React from 'react'
import Layout from '../components/layout'
import Container from 'components/Container'
import SampleComponent from 'components/SampleComponent'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <Container modifiers="visible test">
      <h1>Richard Hamming on Luck</h1>
      <div>
        <p>
          From Richard Hamming’s classic and must-read talk, “
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>
          ”.
        </p>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The
            prepared mind sooner or later finds something important and does it.
            So yes, it is luck.{' '}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </div>
      <p>Posted April 09, 2011</p>
      <SampleComponent
        modifiers="test"
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
