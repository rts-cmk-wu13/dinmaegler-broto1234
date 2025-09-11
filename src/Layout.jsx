import { Suspense } from "react";
import { ScrollRestoration, Outlet } from "react-router";
import Header from './components/Header'
import Footer from './components/footer/Footer'
import Loading from "./components/Loading";

export default function Layout() {

  return (
    <>
      <ScrollRestoration /> {/* This component helps to restore scroll position on navigation/Top */}
      <Suspense fallback={<Loading />}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </>
  )
}
