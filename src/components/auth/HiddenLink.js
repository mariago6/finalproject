import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";


export function ShowOnLogin({children}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return children; 
  }
  return null; 
}

export function ShowOnLogout({children}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return children; 
  }
  return null; 
}

