import Navbar from "../navbar/Navbar.jsx";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router.js";
import NProgress from "nprogress";
import Classnames from "classnames";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);
  return (
    <div className={Classnames({ "bg-dark": dark, 'bg-light': !dark })}>
      <Navbar />
      <main className="container py-4">
        {title && (
          <h1 className={Classnames("text-center", { "bg-light": dark })}>
            {title}
          </h1>
        )}
        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1 className="text-light">Gabriel Villarroel Portfolio</h1>
            <p> 1994 - {new Date().getFullYear()}</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
