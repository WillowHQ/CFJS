import React, { useState,  useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: 'qss2toq92qsr',
  accessToken: 'cSa56aFE5yx-O819-5scDjJTltOgw_wUwOPk6uLi9Go'
})

function DataWidget() {
  const [topic, setTopic] = useState(null)

  useEffect(() => {
    client.getEntries()
    .then((entries) => console.log(entries))
      
    
    .catch (function (error){
      console.log(error)
    })
      
  })
  
  return  (
    <div>{topic}</div>
  )
}

export default DataWidget