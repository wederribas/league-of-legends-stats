import App, { Container } from 'next/app'
import MainPage from '../components/MainPage'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <MainPage>
          <Component {...pageProps} />
        </MainPage>
      </Container>
    )
  }
}

export default MyApp
