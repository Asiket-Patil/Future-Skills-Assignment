import React from 'react'

const Card = ({title,description}) => {
  return (
    <>
      <div className="category">
            <h3>{title}</h3>
            <hr />
            <p>
             {description}
            </p>
          </div>
    </>
  )
}

export default Card
