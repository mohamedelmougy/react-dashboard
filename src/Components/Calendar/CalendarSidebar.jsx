import { formatDate } from "@fullcalendar/core";
import { Paper } from "@mui/material";

function SidebarEvent({ event }) {
  return (
    <li key={event.id}>
      <b style={{marginRight:"3px"}}>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

const CalendarSidebar  = ({ weekendsVisible, handleWeekendsToggle, currentEvents }) => {
  return (
    <Paper
      sx={{
        width: "300px",
        lineHeight: "1.5",

      }}
    >
      <h2 style={{textAlign:"center"}}>All Events ({currentEvents.length})</h2>
      <ul>
        {currentEvents.map((event) => (
          <SidebarEvent key={event.id} event={event} />
        ))}
      </ul>
    </Paper>
  );
};
export default CalendarSidebar;
