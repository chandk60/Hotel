document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let arrival = document.getElementById("arrival").value;
  let departure = document.getElementById("departure").value;
  let persons = document.getElementById("persons").value;
  let rooms = document.getElementById("rooms").value;

  if (new Date(arrival) >= new Date(departure)) {
    alert("Departure date must be after arrival date!");
    return;
  }

  alert(`Reservation successful!
  Arrival: ${arrival}
  Departure: ${departure}
  Persons: ${persons}
  Rooms: ${rooms}`);
  
  this.querySelector("button").disabled = true; // prevent double submission
});
