const dateField = document.getElementById("new-date");
const locationField = document.getElementById("location-zip");
const submitBtn = document.getElementById("enroll");

let alert;

const createNewDate = (event) => {
  event.preventDefault();
  const payload = {
    location: locationField.value,
    // TODO: pet_id: current pet id will go here,
    pet_id: 4,
    date: dateField.value,
  }
  fetch("/api/playdates/new-playdate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (!res.ok) {
      //this should create alert on page if form didn't submit
      alert = "<span>Something went wrong. Could not submit form</span>";
      M.toast({ html: alert });
      dateField.value = "";
      locationField.value = "";
    } else {
      //this should create alert on page if form submitted successfully
      alert = "<span>New playdate created!</span>";
      M.toast({ html: alert });
      dateField.value = "";
      locationField.value = "";
    }
  });
};

submitBtn.addEventListener("click", createNewDate);

