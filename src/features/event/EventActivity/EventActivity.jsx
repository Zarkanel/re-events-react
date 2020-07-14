import React from 'react'
import { Fragment } from 'react'
import { Header, Segment } from 'semantic-ui-react'

export default function EventActivity() {
    return (
        <Fragment>
            <Header attached='top' content='Recent Activity'/>
            <Segment attached>
                <p>Recent activity</p>
            </Segment>
        </Fragment>
    )
}
