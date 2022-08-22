import React from 'react'
import Part from './Part'

const Content = (props) => {
  const { course } = props

  return (
    <div>
      {course.parts.map(item => {
        return (
          <Part key={item.id} name={item.name} exercises={item.exercises} />
        )
      })}
    </div>
  )
}

export default Content
