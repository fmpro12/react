import React from 'react'

const Results = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.full_text}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Results