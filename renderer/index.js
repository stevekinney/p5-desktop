import React from 'react'
import { render } from 'react-dom'

const Application = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

render(<Application/>, document.getElementById('application'))
