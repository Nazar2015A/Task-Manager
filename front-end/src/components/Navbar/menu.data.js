import HomeIcon from "@mui/icons-material/Home";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import AddTaskIcon from "@mui/icons-material/AddTask";

export const menu = [
  { id: 1, title: "All Tasks", link: "/alltasks", icon: <HomeIcon /> },
  { id: 2, title: "Important", link: "/important", icon: <CrisisAlertIcon /> },
  { id: 3, title: "Completed", link: "/completed", icon: <AddTaskIcon /> },
];
