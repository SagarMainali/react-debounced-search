import React, { useState } from 'react'
import SearchList from './SearchList'
import allSearchResults from './allSearchResults'

function App() {

     const [matchedQueries, setMatchedQueries] = useState([])

     console.log('App rendered')

     function handleChange(value) {
          let temp = []
          if (value) {
               for (let index = 0; index < allSearchResults.length; index++) {
                    let item = allSearchResults[index].toLowerCase() //transferring item to lowercase
                    if (item.includes(value.toLowerCase())) {
                         temp.push(allSearchResults[index]) //pushing untransformed item
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