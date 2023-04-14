import React, { useState, useEffect } from 'react'
import allSearchResults from './allSearchResults'
import SearchListItem from './Components/SearchListItem/SearchListItem'

function App() {

     const [matchedQueries, setMatchedQueries] = useState([])
     const [searchQuery, setSearchQuery] = useState('')

     console.log('App rendered')

     useEffect(() => {
          allSearchResults.sort()
     }, [])

     function handleChange(value) {
          let temp = []
          if (value) {
               setSearchQuery(value)
               allSearchResults.forEach(
                    item => {
                         let transformedItem = item.toLowerCase() //transform each string item to lowercase
                         if (transformedItem.includes(value.toLowerCase())) temp.push(item) //push original untransformed item
                    }
               )
               temp.length == 0 && temp.push('No items found')
          }

          setMatchedQueries(temp.length > 5 ? temp.slice(0, 10) : temp) //pass array by slicing to prevent rendering large number of data
     }

     function debounce(callback, delay) {
          let timer
          return function (...args) {
               clearTimeout(timer)
               timer = setTimeout(
                    () => callback(...args), delay
               )
          }
     }

     const debouncedhandleChange = debounce(handleChange, 600)

     return (
          <div className='container'>
               <div className="header flex">
                    <input type="text" placeholder='Search' onChange={(event) => debouncedhandleChange(event.target.value)} />
               </div>
               <div className="content flex">
                    <ul>
                         {matchedQueries.map(item => <SearchListItem key={item} item={item} searchQuery={searchQuery} />)}
                    </ul>
               </div>
          </div>
     )
}

export default App