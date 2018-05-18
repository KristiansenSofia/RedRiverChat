import React, { Component } from 'react'

// Import NPM-modules
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

// Import styles. settingsUserStyles for all imported components with a style attribute and CSS-file for classNames and id.
import {settingsUserStyles} from '../../../styles/SettingsStyles'
import '../../../styles/Styles.css'

/**
 *  DeleteUser-component.
 *
 *  @author Linda
 */

class DeleteUser extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userName: this.props.state.userInfo.username,
      firstName: this.props.state.userInfo.firstName,
      surname: this.props.state.userInfo.surname,
      email: this.props.state.userInfo.email,
      streetAddress: this.props.state.userInfo.streetAddress,
      zipCode: this.props.state.userInfo.postcode,
      city: this.props.state.userInfo.city,
      socialSecurity: this.props.state.userInfo.socialSecurity,
      telephoneNumber: this.props.state.userInfo.telephoneNumber,
      relativeUsername: this.props.state.userInfo.relativeUsername,
      formDisabled: true
    }
  }

}

export default DeleteUser
