import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Form } from './SearchMovies.styled';
import { PropTypes } from 'prop-types';

export const SearchMovies = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleValueChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      toast.error('Enter a value');

      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        className="input"
        value={value}
        onChange={handleValueChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      />

      <button type="submit" className="button">
        <BsSearch />
      </button>
    </Form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
