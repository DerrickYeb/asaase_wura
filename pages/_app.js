import { Provider } from 'react-redux'
import '../styles/globals.css'
import "../styles/scss/hope-ui.scss"
import "../styles/scss/dark.scss"
import "../styles/scss/rtl.scss"
import "../styles/scss/custom.scss"
import "../styles/scss/customizer.scss"
import Store from '../src/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
