import React, { useState, useEffect } from 'react'

export default function Card(props) {
  

  const [name,setName] = useState('');

  useEffect(()=>{
    setName(props.name);
  },[])

  const  AddFav=()=>{
    const loaddata = {
      name
    }
    props.addFav(loaddata);
  }
    
  return (
    <div>
      <Card className='carouselstyle' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link><button onClick={AddFav}> Add Fav </button> Add Fav</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
    </div>
  )
}
