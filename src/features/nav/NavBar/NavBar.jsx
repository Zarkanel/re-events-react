import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link ,withRouter} from "react-router-dom";
import { SignedOutMenu } from "../Menus/SignedOutMenu";
import { SignedInMenu } from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenicated: true,
  };

  handleSignIn = () => this.setState({ authenicated: true });
  handleSignOut = () => {
    this.setState({ authenicated: false });
    this.props.history.push('/')
  }

  render() {
    const { authenicated } = this.state;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} exact to='/events' name='Events' />
          <Menu.Item as={NavLink} to='/pepple' name='People' />
          <Menu.Item as={NavLink} to='/test' name='Test' />
          <Menu.Item>
            <Button
              as={Link}
              to='/createEvent'
              floated='right'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {authenicated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
