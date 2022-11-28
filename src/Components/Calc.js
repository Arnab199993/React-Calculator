import React from 'react'
import { useState } from 'react'
const Calc = () => {
  const [state,setState]=useState(0)
  const [state2,setState2]=useState(0)
  const [state3,setState3]=useState(0)
  change1=(event)=>{
    setState(parseInt(event.target.value))
  }
  change2=(event)=>{
    setState2(parseInt(event.target.value))
  }
  const clickme=()=>{
    setState3=(state+state2)
  }
  // setState({...state,[event.target.name]:event.target.value})    spread operator
  const [newstate,setnewstate]=useState([
    '{{repeat(5, 7)}}',
    {
      _id: '{{objectId()}}',
      index: '{{index()}}',
      guid: '{{guid()}}',
      isActive: '{{bool()}}',
      balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      picture: 'http://placehold.it/32x32',
      age: '{{integer(20, 40)}}',
      eyeColor: '{{random("blue", "brown", "green")}}',
      name: '{{firstName()}} {{surname()}}',
      gender: '{{gender()}}',
      company: '{{company().toUpperCase()}}',
      email: '{{email()}}',
      phone: '+1 {{phone()}}',
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
      about: '{{lorem(1, "paragraphs")}}',
      registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
      latitude: '{{floating(-90.000001, 90)}}',
      longitude: '{{floating(-180.000001, 180)}}',
      tags: [
        '{{repeat(7)}}',
        '{{lorem(1, "words")}}'
      ],
      friends: [
        '{{repeat(3)}}',
        {
          id: '{{index()}}',
          name: '{{firstName()}} {{surname()}}'
        }
      ],
      greeting: function (tags) {
        return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
      },
      favoriteFruit: function (tags) {
        var fruits = ['apple', 'banana', 'strawberry'];
        return fruits[tags.integer(0, fruits.length - 1)];
      }
    }
  ])

  return (
    <div>
        <input type={"text"} className={"form-control"} onChange={change1}/>
        <input type={"text"} className={"form-control"} onChange={change2}/>
        <input type={"text"} className={"form-control"} value={state3}/>
        <button className='btn-btn success' onClick={clickme}>
          Add Numbers
        </button>
        {
          state.map(ele=>{
            return <li>(ele.fruits)</li> 
          })
        }
    </div>
  )
}

export default Calc