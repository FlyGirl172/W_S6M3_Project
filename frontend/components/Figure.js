import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  max-width: 300px;
  
  figcaption {
    font-style: italic;
  }
 `

 export default function Figure({ image, author, date }) {
   return (
    <StyledFigure>
      <img src={image} />
      <figcaption>
        The Photo of the Day by {author} on {Date}
      </figcaption>
    </StyledFigure>
   )
  }