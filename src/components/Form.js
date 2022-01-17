import React, { useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Heading } from "@chakra-ui/react";

import GeoLocation from "./GeoLocation";
import RecordList from "./RecordList";

import "./css/form.css";
import axios from "axios";

import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "1.5em",
    fontWeight: "bold",
    marginBottom: "1em",
  },
  formControl: {
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [livingWithDiabetes, setLivingWithDiabetes] = useState("");

  const [minors, setMinors] = useState(false);

  const SaveRecord = (e) => {
    e.preventDefault();
    const record = {
      firstName,
      lastName,
      age,
      gender,
      country: country.split(">")[1],
      city: city.split(">")[1],
      livingWithDiabetes,
    };

    axios
      .post("https://savics-backend.herokuapp.com/api/1.0/emr/create", record)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="main-wrapper">
      <CssBaseline />

      <Heading className={classes.heading}>New Medical Record</Heading>
      <form className="form-container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              className={classes.formControl}
              variant="outlined"
              label="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              required
              className={classes.formControl}
              variant="outlined"
              label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={5}>
            <TextField
              min={0}
              required
              className={classes.formControl}
              type="number"
              variant="outlined"
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <FormControl component="fieldset" required>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  onChange={() => setGender("Male")}
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  onChange={() => setGender("Female")}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={5}>
            <GeoLocation
              locationTitle="Country"
              isCountry
              onChange={setCountry}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <GeoLocation
              locationTitle="State"
              onChange={setState}
              geoId={country}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={5}>
            <GeoLocation
              locationTitle="City"
              onChange={setCity}
              geoId={state}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <FormControl component="fieldset" required>
              <FormLabel component="legend">Living With Diabetes?</FormLabel>
              <RadioGroup
                row
                aria-label="living-with-diabetes"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                  onChange={() => setLivingWithDiabetes("Yes")}
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label="No"
                  onChange={() => setLivingWithDiabetes("No")}
                />
                <FormControlLabel
                  value="Unknown"
                  control={<Radio />}
                  label="Unknown"
                  onChange={() => setLivingWithDiabetes("Unknown")}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <Button
          type="submit"
          variant="contained"
          style={{ marginBottom: "1em" }}
          onClick={SaveRecord}
        >
          Save
        </Button>
      </form>
      <Divider className="divider" />
      <RecordList />
    </main>
  );
};

export default Form;
