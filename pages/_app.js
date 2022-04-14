import Layout from './../components/layout'

// Swiper Styles

import "swiper/css/bundle";
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
