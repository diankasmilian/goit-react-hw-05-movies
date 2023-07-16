import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

export const SearchMovies = ({onSubmit}) => {
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('query') ?? '';

const handleValueChange = e => {
  if(e.target.value === '') {
    return  setSearchParams({})
  }
  setSearchParams({query: e.target.value});
 };

 const handleSubmit = e => {
   e.preventDefault();

   if (searchParams === "") {
     toast.error('Enter a value');
    
     return;
   }
   onSubmit(query);
   
 };


  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        value={query}
        onChange={handleValueChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />

      <button type="submit" className="button">
        <BsSearch />
      </button>
    </form>
  );
};
