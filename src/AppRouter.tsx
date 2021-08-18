import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Home, Detail } from "./pages";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components";

const AppRouter = () => {
  const location = useLocation();
  const [onScroll, setOnScroll] = useState<any>(false);

  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 0) setOnScroll(true);
    else setOnScroll(false);
  });

  return (
    <>
      <Navbar onScroll={onScroll} />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/detail" component={Detail} />
          <Route
            path="/"
            render={(props: any) => <Home {...props} onScroll={onScroll} />}
          />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default AppRouter;
