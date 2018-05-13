// Import theme from Styles.js to be able to change colors etc. throughout the application.
import {theme} from './Styles'

/**
 *  Styles for imported components in the authentication directory
 *
 *  @author Jimmy
 */

export const userAccountStyles = {

  button: {
    width: 130,
    height: 130,
    marginTop: 20,
    flexGrow: 0,
    backgroundColor: '#fcfcfc',
    borderColor: theme.palette.primary.main,
    borderWidth: 6,
    borderStyle: 'solid',
    color: theme.palette.primary.main,
  },

  title: {
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    cursor: 'pointer'
  },
  dialogTitle: {
  },
  dialog: {

  }
}
