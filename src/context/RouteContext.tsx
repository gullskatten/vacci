import React, { Dispatch, SetStateAction } from "react";

interface Props {
  route: string;
  setRoute: Dispatch<SetStateAction<string>>;
}
const RouteContext = React.createContext<Props>({
  route: "/",
  setRoute: () => {},
});

const RouteContextProvider: React.FC = ({ children }) => {
  const [route, setRoute] = React.useState("/");

  return (
    <RouteContext.Provider
      value={{
        route,
        setRoute,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export { RouteContextProvider, RouteContext };
