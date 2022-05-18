import React, { useState } from 'react'
import { list } from './FaqAPI'



export default function FaqList() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {      //if statement to close the item and open other or else open i
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className='main-div'>
    <h1 className='h1faq'>Frequently Asked Questions</h1>
      <div className='fqwrapper'>
      
        <div className='accordian'>
          {
            list.map((items, i) => (
              <div className='item'>
                <div className='title' onClick={() => toggle(i)}>
                  <h2>{items.ques}</h2>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>
                  {items.ans}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}
