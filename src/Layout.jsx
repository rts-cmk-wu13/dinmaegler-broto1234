import { Suspense } from "react";
import { ScrollRestoration, useNavigation, Outlet } from "react-router";
import Header from './components/Header'
import Footer from './components/footer/Footer'
import Loading from "./components/Loading";

export default function Layout() {
  const navigation = useNavigation();

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
