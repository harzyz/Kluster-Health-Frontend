import { createContext, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [open, setOpen] = useState(false);
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

  const [medicationStats, setMedicationStats] = useState([])

  const [modalMedication, setModalMedication] = useState({
    medicationName: "",
    startDate: "",
    endDate: "",
    prescribedBy: "",
    dosageStrength: "",
    dosageForm: "",
  });

  const onSubmit = (e) => {
    e.preventDefault()
    const newMedInputed = {...modalMedication, id: uuidv4()}
    setMedicationStats((prevState)=> ([newMedInputed,...prevState]))
    const newmed = JSON.stringify([newMedInputed,...medicationStats])
    localStorage.setItem('medfirst', newmed)
    setModalMedication({
      medicationName: "",
      startDate: "",
      endDate: "",
      prescribedBy: "",
      dosageStrength: "",
      dosageForm: "",
    });
    setOpen(false)
  };

  const addMed = () =>{
    const medResponse = localStorage.getItem('medfirst')
    const medData = JSON.parse(medResponse)
    setMedicationStats(medData)
  }

  const deleteMed = (id) => {
    const newMedicationStats = medicationStats.filter((item)=> item.id !== id)

    setMedicationStats(newMedicationStats)
    localStorage.setItem('medfirst', JSON.stringify(newMedicationStats))
  }

  return <AuthContext.Provider value={{
    formData,
    open,
    medicationStats,
    modalMedication,
    onChange, 
    setMedicationStats,
    setModalMedication,
    onSubmit,
    setOpen,
    addMed,
    deleteMed
  }}>
    {children}
  </AuthContext.Provider>
}

export default AuthContext