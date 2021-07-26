import React from 'react';
import Calendar from "@ericz1803/react-google-calendar";
import env from 'react-dotenv'

export default function Events() {
  const API_KEY = env.G_API_KEY;
  let calendars = [
    {
      calendarId: env.G_CAL_ID,
      color: "#B241D1" //optional, specify color of calendar 2 events
    }
  ];
  return (
    <>
      <h2>Events</h2>
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    </>
  );
}
