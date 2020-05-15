import React, { useState,  useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

function DataWidget() {
  const [topic, setTopic] = useState(null)

  useEffect(() => {
    client.getEntries()
    .then((entries) => 
      console.log(entries))
    .catch (function (error){
      console.log(error)
    })
  })
  return  (
    <div>{topic}</div>
  )
}

export default DataWidget