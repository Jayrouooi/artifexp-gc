import React from 'react'
import Button from '@material-ui/core/Button'
import { PropTypes } from 'prop-types'

class User extends React.Component {
  constructor(props) {
    super(props)
  }
  static contextTypes = {
    router: PropTypes.object,
  }

  render() {
    return <Button children={'User Button'} />
  }
}
export default User
