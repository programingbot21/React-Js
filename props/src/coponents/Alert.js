import React from 'react'

function Alert(props) {
  return (
    
  props.alert &&  <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
    {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

  )
}

export default Alert