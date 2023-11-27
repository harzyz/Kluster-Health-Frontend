import { useNavigate } from "react-router-dom"

const Auth = ({children}) => {

  const navigate = useNavigate
  
  if(!localStorage.getItem('token')){
    navigate('/')
  }
  return (
    <div>{children}</div>
  )

}

export default Auth
