import { createContext, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  };


  return <AuthContext.Provider value={{
    formData,
    onChange,  
  }}>
    {children}
  </AuthContext.Provider>
}

export default AuthContext