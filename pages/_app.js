import '../styles/globals.css'
import './_app.scss'
import '../styles/one-product.scss'
import '../styles/products-page.scss'
import '../styles/navbar.scss'
import '../styles/cart.scss'
import { AppStateProvider } from '../AppGlobalState'

function MyApp({ Component, pageProps }) {
  return <AppStateProvider>
  <Component {...pageProps} />
  </AppStateProvider>
}

export default MyApp
