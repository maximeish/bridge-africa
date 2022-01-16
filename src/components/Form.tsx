import React, { useState } from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import GeoLocation from "./GeoLocation";
import RecordList from "./RecordList";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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

  console.log({
    country,
    state,
    city,
  });

  return (
    <div>
      <CssBaseline />

      <h1>New medical record</h1>
      <form>
        <Input
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Radio
          id="male"
          name="gender"
          value={gender}
          onChange={() => setGender("Male")}
        />
        <FormLabel htmlFor="male">Male</FormLabel>
        <Radio
          id="female"
          name="gender"
          value={gender}
          checked={gender === "Female"}
          onChange={() => setGender("Female")}
        />{" "}
        <FormLabel htmlFor="female">Female</FormLabel>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <GeoLocation
              locationTitle="Country"
              isCountry
              onChange={setCountry}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <GeoLocation
              locationTitle="State"
              onChange={setState}
              geoId={country}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <GeoLocation
              locationTitle="City"
              onChange={setCity}
              geoId={state}
            />
          </Grid>
        </Grid>
        <FormLabel htmlFor="livingWithDiabetes">
          Living With Diabetes?
        </FormLabel>
        <Radio
          id="yes"
          name="living-with-diabetes"
          value={livingWithDiabetes}
          onChange={() => setLivingWithDiabetes("Yes")}
        />{" "}
        <FormLabel htmlFor="yes">Yes</FormLabel>
        <Radio
          id="no"
          name="living-with-diabetes"
          value={livingWithDiabetes}
          onChange={() => setLivingWithDiabetes("No")}
        />{" "}
        <FormLabel htmlFor="no">No</FormLabel>
        <Radio
          id="unknown"
          name="living-with-diabetes"
          value={livingWithDiabetes}
          onChange={() => setLivingWithDiabetes("Unknown")}
        />
        <FormLabel htmlFor="unknown">Unknown</FormLabel>
        <br />
        <Button type="submit">Save</Button>
      </form>
      <Divider />
      <RecordList />
    </div>
  );
};

export default Form;
