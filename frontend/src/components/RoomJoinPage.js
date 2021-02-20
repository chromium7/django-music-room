import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: "",
    };
  }

  handleTextFieldChange = (e) => {
    this.setState({
      roomCode: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.roomButtonPressed();
    }
  };

  roomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        code: this.state.roomCode,
      }),
    };
    fetch("/api/join-room/", requestOptions)
      .then((response) => {
        if (response.ok) {
          this.props.history.push(`/room/${this.state.roomCode}`);
        } else {
          this.setState({
            error: "Room not found",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Grid container spacing={1} align="center">
        <Grid item xs={12}>
          <Typography variant="h4" component="h4"></Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={this.state.error}
            label="Code"
            placeholder="Enter a room code"
            value={this.state.roomCode}
            helperText={this.state.error}
            variant="outlined"
            onChange={this.handleTextFieldChange}
            onKeyPress={this.handleKeyPress}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.roomButtonPressed}
          >
            Enter Room
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
  }
}
