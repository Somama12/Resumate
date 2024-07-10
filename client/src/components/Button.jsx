import React from 'react'

const Button = ({title}) => {
  return (
    <button
    type="submit"
    className="rounded-xl px-4 py-2 cursor-pointer bg-sky-500 "
  >
    {title}
  </button>
  )
}

export default Button
