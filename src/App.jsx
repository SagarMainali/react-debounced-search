import React, { useState } from 'react'
import SearchList from './SearchList'
import allSearchResults from './allSearchResults'

function App() {

     const [matchedQueries, setMatchedQueries] = useState([])

     console.log(matchedQueries)
     console.log(allSearchResults.length)

     function handleChange(value) {
          let temp = []
          if (value) {
               for (let i = 0; i < allSearchResults.length; i++) {
                    
                    if (allSearchResults[i].includes(value)) {
                         temp.push(allSearchResults[i])
                    }
               }
          }
          setMatchedQueries(temp)
     }

     return (
          <div className='container'>
               <div className="header flex">
                    <input type="text" placeholder='Search' onChange={(event) => handleChange(event.target.value)} />
               </div>
               <div className="content flex">
                    <ul>
                         {matchedQueries.map(item => <SearchList key={item} item={item} />)}
                    </ul>
               </div>
          </div>
     )
}

export default App