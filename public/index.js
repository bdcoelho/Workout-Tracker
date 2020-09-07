init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    console.log("getting workout")
    const workout = await API.getLastWorkout();
    console.log(workout)
    if (workout) {
      console.log("Workout")
      location.search = "?id=" + workout._id;
    } else {
      console.log("No Workout")

      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

