import React from 'react'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
