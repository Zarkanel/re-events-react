import React, { Fragment } from "react";
import { Segment, Item, Label, List, ItemGroup } from "semantic-ui-react";

export default function EventDetailedSideBar({ attendees }) {
  const isHost = false;
  return (
    <Fragment>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees && attendees.legnth} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <ItemGroup relaxed divided>
          {attendees &&
            attendees.map((attendee) => (
              <Item key={attendee.id} style={{ position: "relative" }}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color='orange'
                    ribbon='right'
                  >
                    Host
                  </Label>
                )}
                <Item.Image size='small' src={attendee.photoURL} />
                <Item.Content verticalAlign='middle'>
                  <Item.Header as='p'>{attendee.name}</Item.Header>
                </Item.Content>
              </Item>
            ))}
        </ItemGroup>
      </Segment>
    </Fragment>
  );
}
