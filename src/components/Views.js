import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addView } from '../redux/index'

function Views({count, addView}) {
  const [number, setNumber] = useState(1)
  return (
    <div className='items'>
        <h2>조회수 : {count}</h2>
        <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={() => addView(number)}>조회하기 !</button>
    </div>
  )
}

const mapStateToProps = ({views}) => {
    return {
        count: views.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscribers: () => {
//             dispatch(addSubscribers())
//         }
//     }
// }

const mapDispatchToProps = {
  addView: (number) => addView(number)
}

export default connect(mapStateToProps,mapDispatchToProps)(Views)