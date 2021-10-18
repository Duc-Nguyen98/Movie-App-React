import { useReducer } from "react";
import LoaderContext from "./LoaderContext";

const initialState = {
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TRUE":
      return {
        loader: true,
      };
      break;

    default:
      return {
        loader: false,
      };
      break;
  }
};

const LoaderProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const showLoaderHandle = () => {
    dispatch({ type: "TRUE" });
  };

  const hiddenLoaderHandle = () => {
    dispatch({ type: null });
  };

  const loaderContext = {
    loader: state.loader,
    showLoader: showLoaderHandle,
    hiddenLoader: hiddenLoaderHandle,
  };

  return (
    <LoaderContext.Provider value={loaderContext}>
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
