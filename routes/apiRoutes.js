const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/workouts", async (req, res) => {
  // create new instance of class workout
  const workout = new db.Workout(req.body);
  try {
    const dbWorkout = await db.Workout.create(workout);
    res.json(dbWorkout);
  } catch (err) {
    res.json(err);
  };

});



router.get('/api/workouts', async (req, res) => {

  try {
    const dbWorkout = await db.Workout.find({});
    res.json(dbWorkout);
  } catch (err) {
    res.json(err);
  };

});


router.put("/api/workouts/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    let dbWorkout = await db.Workout.findById(id);
    dbWorkout.exercises.push(data);


    try {
      await db.Workout.findOneAndUpdate(
        { _id: id },
        { exercises: dbWorkout.exercises },
        { new: true }
      );
    } catch (err) {
      console.log(err);
    }
    res.json(dbWorkout);
  } catch (err) {
    console.log(err);
  }
});


router.get('/api/workouts/range', async (req, res) => {

  try {
    const dbWorkout = await db.Workout.find({})
    res.json(dbWorkout);
  } catch (err) {
    res.json(err);
  };


});



module.exports = router;
