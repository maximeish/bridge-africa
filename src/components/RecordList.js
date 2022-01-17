import React from "react";
import { Heading } from "@chakra-ui/react";
import "./css/record-list.css";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

function RecordList() {
  const [records, setRecords] = React.useState([]);
  const [minors, setMinors] = React.useState(false);

  React.useEffect(() => {
    if (minors) {
      console.log("showing minors");
      axios
        .get("https://savics-backend.herokuapp.com/api/1.0/emr/list/minors")
        .then((res) => {
          setRecords(res.data.records);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get("https://savics-backend.herokuapp.com/api/1.0/emr/list")
        .then((res) => {
          setRecords(res.data.records);
        })
        .catch((err) => console.log(err));
    }
  }, [minors]);

  return (
    <div style={{ marginTop: "1em" }}>
      <Grid container spacing={4} className="header-wrapper">
        <Grid item xs={12} sm={8}>
          <Heading className="list-heading">
            List&nbsp;of&nbsp;medical&nbsp;records
          </Heading>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControlLabel
            value="show-minors"
            control={<Checkbox />}
            label="Only Minors"
            onChange={() => setMinors(!minors)}
          />
        </Grid>
      </Grid>

      {records.map((record) => (
        <div key={record._id} className="record-wrapper">
          {record.firstName} {record.lastName}, ({record.gender}) {record.age} -{" "}
          {record.city} ({record.country})
        </div>
      ))}
    </div>
  );
}

export default RecordList;
