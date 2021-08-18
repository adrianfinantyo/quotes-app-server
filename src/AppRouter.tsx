import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Home, Detail } from "./pages";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components";

const AppRouter = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/detail" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default AppRouter;
