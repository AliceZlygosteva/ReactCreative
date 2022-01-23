import React from "react";

import Loader from "../Loader/Loader";

function withLoader(WrappedComponent, props, isLoading) {
  return class extends React.Component {
    render() {
      return <>{isLoading ? <Loader /> : <WrappedComponent {...props} />}</>
    }
  };
}

export default withLoader;
