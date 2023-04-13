import React from 'react'

function SearchList(props) {
     return (
          <div>
               <li onClick={() => console.log('Redirecting...')}>{props.item}</li>
          </div>
     )
}

export default SearchList