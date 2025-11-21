import React from 'react'

const Input = ({lable, state, setState}) => {
  return (
    <input
            value={state}
            onChange={e=> setState(e.target.value)}
            type="text"
            className="form-control py-2 mb-3"
            placeholder={lable}
    />
  )
}

export default Input
