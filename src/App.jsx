import React from 'react'
import Card from './components/Card'

function App() {
  let data=[
    {
    title:"ProjectOne",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita",
    Sno:"1"
  },
  {
    title:"ProjectTwo",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita",
    Sno:"2"
  },
  {
    title:"ProjectThree",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita"
  },
  {
    title:"ProjectFour",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita"
  },
  {
    title:"ProjectFive",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita"
  },
  {
    title:"ProjectSix",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita"
  },
  {
    title:"ProjectSeven",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita"
  },
  {
    title:"ProjectEight",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita"
  },
  {
    title:"ProjectNine",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita"
  },
  {
    title:"ProjectTen",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vita"
  },
]
  return <>
   <div className="container">

<h1 className="my-4">Page Heading
  <small>Secondary Text</small>
</h1>

<div className="row">
  {
    data.map((e,i)=>{
      return <Card cardData={e} key={i}/>
    })
  }
  
  
  </div>
</div>

  </>
}

export default App