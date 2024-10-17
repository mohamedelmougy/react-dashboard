import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


export const fisrtSideBarIconGroup = [
    {
        icon: HomeOutlinedIcon,
        text:"Dashboard",
        route: "/",
        label: "Home Icon",
      },
    {
        icon: PeopleOutlinedIcon,
        text:"Manage Team",
        route: "/team",
        label: "People Icon",
      },
    {
        icon:ContactsOutlinedIcon,
        text:"Contacts Information",
        route: "/contacts",
        label: "contacts Icon",
      },
    {
        icon:ReceiptOutlinedIcon,
        text:"Invoices Balances",
        route: "/invoices",
        label: "Invoices Balances Icon",
      },
     
    ]
    

    export const secondSideBarIconGroup = [
      {
          icon: PersonOutlinedIcon,
          text:"Profile Form",
          route: "/form",
          label: "Profile Form Icon",
        },
      {
          icon: CalendarTodayOutlinedIcon,
          text:"Calendar",
          route: "/calendar",
          label: "Calendar Icon",
        },
      {
          icon: HelpOutlineOutlinedIcon,
          text:"FAQ Page",
          route: "/faq",
          label: " frequently asked question Icon",
        },
      ]





      export const thirdSideBarIconGroup = [
        {
            icon: BarChartOutlinedIcon,
            text:"Bar Chart",
            route:  "/bar",
            label: "Bar Chart Icon",
          },
        {
            icon: PieChartOutlineOutlinedIcon,
            text:"Pie Chart",
            route: "/pie",
            label: "Pie Chart Icon",
          },
        {
            icon: TimelineOutlinedIcon,
            text:"Line Chart",
            route: "/line",
            label: "Line Chart Icon",
          },
        {
            icon: MapOutlinedIcon,
            text:"Geography Chart",
            route: "/geography",
            label: "Geography Chart Icon",
          },
        ]
