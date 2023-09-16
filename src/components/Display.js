import React from 'react'
import { connect } from 'react-redux'

function Display({count}) {
  return (
    <div>
        <h3>구독자 수 : {count}</h3>
    </div>
  )
}

const mapStateToProps = ({subscribers}) => {
    return {
        count: subscribers.count
    }
}

export default connect(mapStateToProps)(Display)