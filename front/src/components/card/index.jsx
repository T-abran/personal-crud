/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import './card.css'
import FormDialog from '../dialog/dialog';

function Card({name, cost,category,setListCard, listCard,id}) {
  const [open, setOpen] = useState(false);
  return ( 
    <>
    <FormDialog open={open} setOpen={setOpen} name={name} cost={cost} category={category} listCard={listCard} id={id} setListCard={setListCard} />
  
  <div className='card-container' onClick={() => setOpen(true)}>
<h1 className='card-title'> {name}</h1>
<p className="card-id">{id}</p>
<p className='card-category'>{category}</p>
<p className='card-cost'>R$ {cost}</p>
  </div> 
  </>
  );
}

export default Card;
