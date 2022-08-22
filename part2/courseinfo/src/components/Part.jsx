import React from 'react'

const Part = (props) => {

  const { name, exercises } = props

  return (
    <p>{name}: <span>{exercises}</span></p>
  )
}

export default Part
