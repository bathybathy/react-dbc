import React, {useState, useEffect} from 'react'

import styles from './index.css'
import Header from './components/header'
import BodyHome from './components/bodyHome'
import Footer from './components/footer'
import BodyContato from './components/bodyContato'
import BodySobre from './components/bodySobre'

function App() {
  
  return(
    <div>
      <Header />
      {/* <BodyHome /> */}
      <BodyContato />
      {/* <BodySobre /> */}
      <Footer />
    </div>
  )
}

export default App;
