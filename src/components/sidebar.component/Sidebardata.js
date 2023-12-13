import { MdDashboard } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { PiStethoscopeFill } from "react-icons/pi";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoPieChartOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";


export const Sidebardata = [
  {
    id: 1,
    title: 'Overview',
    icon: <MdDashboard />,
    path: '/pdashboard'
  },
  {
    id: 2,
    title: 'Departments',
    icon: <FaBoxes />,
    path: '/department'
  },
  {
    id: 3,
    title: 'Doctors',
    icon: <PiStethoscopeFill />,
    path: '/pdoctors'
  },
  {
    id: 4,
    title: 'Patients',
    icon: <MdOutlinePersonalInjury />
  },
  {
    id: 5,
    title: 'History',
    icon: <MdOutlineWorkHistory />
  },
  {
    id: 6,
    title: 'Chart',
    icon: <IoPieChartOutline />
  },
  {
    id: 7,
    title: 'Messages',
    icon: <TiMessages />
  }
]

// export default Sidebardata

export const Sidemore = [
  {
    id: 1,
    title: 'Settings',
    icon: <IoSettingsOutline />
  },
  {
    id: 2,
    title: 'Help & Support',
    icon: <MdOutlineContactSupport />
  }
]