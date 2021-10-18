/*==========================================
Title:  move-app-react
Date:   18-Oct-2021
==========================================*/
import  React from "react";


const LoaderContext = React.createContext({
    loader:false,
    showLoader: ()=>{},
    hiddenLoader: ()=>{}
})
export default LoaderContext;