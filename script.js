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

function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DgL000005QNpP',
				'GitHUb',
				'https://orgfarm-176d167232-dev-ed.develop.my.site.com/ESWGitHUb1754657375029',
				{
					scrt2URL: 'https://orgfarm-176d167232-dev-ed.develop.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};

