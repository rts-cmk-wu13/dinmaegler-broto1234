import { ScrollRestoration } from "react-router";
import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/footer/Footer'

export default function Layout() {
  return (
    <>
      <ScrollRestoration /> {/* This component helps to restore scroll position on navigation/Top */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
