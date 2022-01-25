import React from "react";

import Loader from "../Loader/Loader";

function withLoader(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { isLoading } = this.props;
      
      return <>{isLoading ? <Loader /> : <WrappedComponent {...this.props} />}</>
    }
  };
}

export default withLoader;
