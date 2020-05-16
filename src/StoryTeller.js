import React, { useState,  useEffect } from 'react'
import { createClient } from 'contentful'
import get from 'lodash.get'

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

function StoryTeller(props) {
  const [topic, setTopic] = useState()
  //next we want to figure out how to get the next topic for this user 

  useEffect(() => {
    async function fetchData() {
      try {
        const topicStack = await client.getEntries({
          content_type: 'topicStack',
          include: 3
        })
        //ok lets destrcture this 
        //just going to cycle thru the messages and return to the end 
        const topics = get(topicStack, 'items[0].fields.topics[0].fields.text', "broke")
        //TODO
        console.log("Topics is", topics)
        setTopic(topics)
        //need to go thru and find the entry point or something ? 
        //also I think I need food
        //how do I figure out where to start ? 
        //
        console.log("This is prob going to break ", topics)
  
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  
  return  (
    <div>
      <div>{topic}</div>
    </div>
    
  )
}

export default StoryTeller