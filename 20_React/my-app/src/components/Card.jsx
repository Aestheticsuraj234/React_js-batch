import React from 'react'
import PropTypes from 'prop-types'
import "./Card.css"

const Card = ({ImageUrl  , Desc , Title , Likes}) => {



  return (
    <div className="card">

    <img src={ImageUrl} alt="Card" className="card-image" />

    <div className="card-content">

      <h2 className="card-heading">{Title}</h2>
      <p className="card-description">{Desc}</p>
      <p className="card-description">{Likes}</p>

    </div>
  </div>


  )
}

export default Card


// props types ( optional)

// Card.propTypes = {
//     ImageUrl: PropTypes.string.isRequired,
//     Desc: PropTypes.string.isRequired,
//     Title: PropTypes.string.isRequired,
//     Likes: PropTypes.number.isRequired
//   };



// import React from 'react'
// import "./Card.css"

// const Card = (props) => {



//   return (
//     <div className="card">

//     <img src={props.ImageUrl} alt="Card" className="card-image" />

//     <div className="card-content">

//       <h2 className="card-heading">{props.Title}</h2>
//       <p className="card-description">{props.Desc}</p>

//     </div>
//   </div>


//   )
// }

// export default Card