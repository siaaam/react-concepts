import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>gitanjali</li>
        <li style={{ background: theme.ui }}>bidrohee</li>
        <li style={{ background: theme.ui }}>quantam mechanix</li>
      </ul>
    </div>
  );
};

export default BookList;
