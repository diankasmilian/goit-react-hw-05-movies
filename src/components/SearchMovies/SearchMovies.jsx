import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const SearchMovies = ({onSubmit}) => {
const [value, setValue] = useState('')

const handleValueChange = e => {
   setValue(e.target.value);
 };

 const handleSubmit = e => {
   e.preventDefault();

   if (value.trim() === "") {
     toast.error('Enter a value');
     return;
   }

   onSubmit(value);
   setValue('');
 };


  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        value={value}
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
