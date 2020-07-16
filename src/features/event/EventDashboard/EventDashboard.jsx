import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect } from "react-redux-firebase";

const mapState = (state) => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading,
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent,
};
class EventDashboard extends Component {
  // state = {
  //   isOpen: false,
  //   selectedEvent: null,
  // };

  // handleIsOpenToggle = () => {
  //     this.setState(({isOpen}) =>(
  //         {
  //             isOpen: !isOpen
  //         }
  //     ))
  // }
  // handleCreateFormOpen = () => {
  //   this.setState({
  //     isOpen: true,
  //     selectedEvent: null,
  //   });
  // };
  // handleFormCancel = () => {
  //   this.setState({
  //     isOpen: false,
  //   });
  // };

  // handleCreateEvent = (newEvent) => {
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL = "/assets/user.png";
  //   this.props.createEvent(newEvent);
  //   // this.setState(({ events }) => ({
  //   //   // events: [...events, newEvent],
  //   //   isOpen: false,
  //   // }));
  // };

  // handleSelectEvent = (event) => {
  //   this.setState({
  //     selectedEvent: event,
  //     isOpen: true,
  //   });
  // };
  // handleUpdateEvent = (updatedEvent) => {
  //   this.props.updateEvent(updatedEvent);
  //   // this.setState(({ events }) => ({
  //   //   // events: events.map((event) => {
  //   //   //   if (event.id === updatedEvent.id) {
  //   //   //     return { ...updatedEvent };
  //   //   //   } else {
  //   //   //     return event;
  //   //   //   }
  //   //   // }),
  //   //   isOpen: false,
  //   //   selectedEVent: null,
  //   // }));
  // };

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  };

  render() {
    // const { isOpen, selectedEvent } = this.state;
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            // selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
