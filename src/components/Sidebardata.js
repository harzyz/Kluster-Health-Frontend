import overview from '../images/icons/overviewicon.png'
import departments from '../images/icons/departmenticon.png'
import doctors from '../images/icons/doctor.png'
import patients from '../images/icons/patients.png'
import history from '../images/icons/history.png'
import chart from '../images/icons/charts.png'
import messages from '../images/icons/messages.png'


const Sidebardata = [
  {
    id: 1,
    title: 'Overview',
    icon: `${overview}`,
    path: '/pdashboard'
  },
  {
    id: 2,
    title: 'Departments',
    icon: `${departments}`,
    path: '/department'
  },
  {
    id: 3,
    title: 'Doctors',
    icon: `${doctors}`,
    path: '/pdoctors'
  },
  {
    id: 4,
    title: 'Patients',
    icon: `${patients}`
  },
  {
    id: 5,
    title: 'History',
    icon: `${history}`
  },
  {
    id: 6,
    title: 'Chart',
    icon: `${chart}`
  },
  {
    id: 7,
    title: 'Messages',
    icon: `${messages}`
  }
]

export default Sidebardata

// const Supportdata = [
//   {
//     id: 1,
//     title: 'Messages',
//     icon: `${messages}`
//   }
// ]

// export default Supportdata