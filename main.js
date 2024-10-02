let events = [
  {
    title: "Photography Workshop",
    date: new Date("2024-10-15"),
    location: "New York",
    attendees: new Set(["Alice", "Bob", "Charlie"]),
  },
  {
    title: "Nature Hike",
    date: new Date("2024-11-05"),
    location: "Yellowstone National Park",
    attendees: new Set(["David", "Eva", "Frank"]),
  },
  {
    title: "Tech Conference",
    date: new Date("2024-12-01"),
    location: "San Francisco",
    attendees: new Set(["Grace", "Henry", "Ivy"]),
  },
  {
    title: "Wildlife Photography Expedition",
    date: new Date("2024-09-30"),
    location: "Tsavo",
    attendees: new Set(["Jack", "Karen", "Leo"]),
  },
  {
    title: "Travel Meetup",
    date: new Date("2024-09-28"),
    location: "Nakuru",
    attendees: new Set(["Kamau", "Joe", "Mike"]),
  },
];

function displayEvents(events) {
  const tableBody = document.getElementById("table-body");
  events.forEach((event) => {
    // Create New Row
    let row = document.createElement("tr");

    // Create cells for each event property
    let titleCell = document.createElement("td");
    let dateCell = document.createElement("td");
    let locationCell = document.createElement("td");
    let attendeesCell = document.createElement("td");

    //   Assign Values to cell
    titleCell.textContent = event.title;
    dateCell.textContent = event.date.toDateString();
    locationCell.textContent = event.location;
    attendeesCell.textContent = [...event.attendees].join(", ");

    //   Append the cells to the row
    row.appendChild(titleCell);
    row.appendChild(dateCell);
    row.appendChild(locationCell);
    row.appendChild(attendeesCell);

    tableBody.appendChild(row);
  });
}

// Call the Function to Display the Events
displayEvents(events);

// -------------------------------------------------------------------------------------------------------
// Use the Array methods .filter() and .map() to display all events that are happening in the next 7 days.
const currentDate = new Date();
const nextWeekDate = new Date();
nextWeekDate.setDate(currentDate.getDate() + 7);

// Filter and Display events happening in the next 7 days
function displayUpcomingEvents(events) {
  const tableBody2 = document.getElementById("filtered");

  // Filter and display upcoming events in the next 7days
  const upcomingEvents = events.filter((event) => {
    return event.date >= currentDate && event.date <= nextWeekDate;
  });

  // Map over the filtered events and add them to the table
  upcomingEvents.map((event) => {
    // create a new row
    let row = document.createElement("tr");

    // Create table data cells for each event property
    let titleCell = document.createElement("td");
    let dateCell = document.createElement("td");
    let locationCell = document.createElement("td");
    let attendeesCell = document.createElement("td");

    // Assign values to the cells
    titleCell.textContent = event.title;
    dateCell.textContent = event.date.toDateString();
    locationCell.textContent = event.location;
    attendeesCell.textContent = [...event.attendees].join(", ");

    // Append cells to the row
    row.appendChild(titleCell);
    row.appendChild(dateCell);
    row.appendChild(locationCell);
    row.appendChild(attendeesCell);
    // Append row
    tableBody2.appendChild(row);
  });
}

// Call the function to display the filtered events in the table
displayUpcomingEvents(events);

// -------------------------------------------------------------------------------------------------------
// Create a WeakMap to store the event's organizer, with the event's title as the key and the organizer's name as the value.
const eventOrganizers = new WeakMap();

// Associate Organizers with Events
eventOrganizers.set(events[0], "Ephraim Mwangi");
eventOrganizers.set(events[1], "Mary Wanjiku");
eventOrganizers.set(events[2], "Julius Macharia");
eventOrganizers.set(events[3], "Emily Wambui");
eventOrganizers.set(events[4], "Miley Karanja");

// Get event organizer
function getOrganizer(event) {
  return eventOrganizers.get(event);
}

console.log(`Organizer for ${events[2].title}: ${getOrganizer(events[2])}`);

// -------------------------------------------------------------------------------------------------------
// Use destructuring assignment to extract the title, date, and location properties from each event object and display them in a table format.
function destructuredEvents(events) {
  const tableBody3 = document.getElementById("destructured");

  // Iterate over each event and destructure select properties
  events.forEach(({ title, date, location }) => {
    let row = document.createElement("tr");

    // Create cells for each property
    let titleCell = document.createElement("td");
    let dateCell = document.createElement("td");
    let locationCell = document.createElement("td");

    // Assign Values to Cell
    titleCell.textContent = title;
    dateCell.textContent = date.toDateString();
    locationCell.textContent = location;

    // Append Cells
    row.appendChild(titleCell);
    row.appendChild(dateCell);
    row.appendChild(locationCell);

    // Append Row
    tableBody3.appendChild(row);
  });
}

destructuredEvents(events);

// -------------------------------------------------------------------------------------------------------
// Create a function that adds a new attendee to an event. This function should take in the event title and the attendee's name as arguments. Use the .add() method of the Set to add the attendee to the event's attendees property.
function addAttendee(eventTitle, attendeeName) {
  const event = events.find((event) => event.title === eventTitle);

  // If event is found, add the attendee to the attendees set
  if (event) {
    event.attendees.add(attendeeName);
    console.log(`${attendeeName} has been added to ${eventTitle}`);
  } else {
    console.log(`Event with the title "${eventTitle}" not found`);
  }
}

addAttendee("Tech Conference", "Khabib");

// -------------------------------------------------------------------------------------------------------
// Create a function that converts the event array to a JSON string using the .stringify() method. Use the .toJSON() method to add a custom property "formattedDate" to each event object that displays the date in the format "MM/DD/YYYY".
function eventsToJSON(events) {
  // create a deep copy of the original events array
  const formattedEvents = events.map((event) => ({
    title: event.title,
    location: event.location,
    attendees: Array.from(event.attendees), //Converts the set back to an array
    formattedDate: event.date.toLocaleDateString("en-us"), // mm/dd/yyyy
  }));

  // Convert the new array to a JSON string
  return JSON.stringify(formattedEvents, null, 2);
}

const eventsJSON = eventsToJSON(events);
console.log(eventsJSON);

// -------------------------------------------------------------------------------------------------------
// Use the Object.keys(), Object.values(), and Object.entries() methods to display the properties and values of the first event object in the array.
const firstEvent = events[0];

// Displaying properties and values using Object.keys()
console.log("Displaying properties using Object.keys()");
Object.keys(firstEvent).forEach((key) => {
  console.log(`${key}: ${firstEvent[key]}`);
});

// Displaying values using Object.values()
console.log("\nValues of the first event using Object.values():");
Object.values(firstEvent).forEach((value) => {
  console.log(value);
});

// Displaying properties and values using Object.entries()
console.log(
  "\nProperties and values of the first event using Object.entries():"
);
Object.entries(firstEvent).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// -------------------------------------------------------------------------------------------------------
// Use the .forEach() method to iterate over the events array and console.log the title and date of each event.
console.log("Iterated events");
events.forEach((event) => {
  console.log(event.title);
  console.log(event.date);
});

// -------------------------------------------------------------------------------------------------------
// Function to delete an event by title
function deleteEventByTitle(eventTitle) {
  const index = events.findIndex((event) => event.title === eventTitle);

  if (index !== -1) {
    events.splice(index, 1);
    console.log(`Event "${eventTitle}" has been deleted.`);
  } else {
    console.log(`Event with title "${eventTitle}" not found.`);
  }
}

console.log("Events before deletion:");
console.log(events);

deleteEventByTitle("Tech Conference");

console.log("\nEvents after deletion:");
console.log(events);

// -------------------------------------------------------------------------------------------------------
// Use the .reduce() method to find the event with the most attendees.
function findMostAttendees(events) {
  return events.reduce((mostAttendedEvent, currentEvent) => {
    return currentDate.attendees.size > mostAttendedEvent.size
      ? currentEvent
      : mostAttendedEvent;
  });
}

let eventWithMostAttendees = findMostAttendees(events);

console.log("Event with the most attendees:", eventWithMostAttendees);
