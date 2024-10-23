import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoute } from './router/routes/index';
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "./store/Reducers/authReducer";

function App() {
  
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)

  useEffect(() => {
    const route = getRoute()
    setAllRoutes([...allRoutes, route])
  }, [])

  useEffect(() => {
    if (token) {
      dispatch(getUserInfo())
    }
  }, [token])

  return <Router allRoutes={allRoutes} />
}

export default App;
