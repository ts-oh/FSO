import React from 'react'

const Total = (props) => {
  const { course } = props

  const courseTotal = () => {
    let sum = course.parts.reduce((total, count) => {
      return total + count.exercises
    }, 0)
    console.log(sum)
    return sum
  }

  return (
    <p className="total-count">Total of {courseTotal()} exercises</p>
  )
}

export default Total
