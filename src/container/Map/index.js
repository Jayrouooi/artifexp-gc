import React from 'react'
import Button from '@material-ui/core/Button'
import { PropTypes } from 'prop-types'

class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  static contextTypes = {
    router: PropTypes.object,
  }

  render() {
    return <Button children={'Map Button'} />
  }
}
export default Map
