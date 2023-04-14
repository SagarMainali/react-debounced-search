import useBoldSubstring from '../../Hooks/useBoldSubstring';

function SearchListItem(props) {
     const { item, searchQuery } = props;
     const boldedItem = useBoldSubstring(searchQuery)(item);

     return (
          <div>
               <li onClick={() => console.log('Redirecting...')}>{boldedItem}</li>
          </div>
     );
}

export default SearchListItem;