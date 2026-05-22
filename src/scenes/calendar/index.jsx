import { useState } from "react";
import FullCalendar, { formDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../../theme";
import { formatDate } from "@fullcalendar/core/index.js";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Coloca nuevo titulo para tu evento");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.end.Str,
        allDay: selected.allDay,
      });
    }
  };

  const handlreEventClick = (selected) => {
    if (
      window.confirm(
        `¿Seguro quieres borrar el evento '${selected.event.title}'?`,
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box sx={{ m: "20px" }}>
      <Header title="Calendario" subtitle="Pagina de calendario interactiva" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* CALENDAR SIDEBAR */}
        <Box
          sx={{
            flex: "1 1 20%",
            backgroundColor: colors.primary[400],
            p: "15px",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h5">Eventos</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* CALENDAR */}
        <Box sx={{ flex: "1 1 100%", ml: "15px" }}>
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev, next today",
              center: "title",
              right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handlreEventClick}
            eventsSet={(events)=>setCurrentEvents(events)}
            initialEvents={[
              {id: "1234", title:"todo el dia evento", date:"2026-05-22"},
              {id: "4321", title:"todo el dia evento", date:"2026-05-23"},
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
