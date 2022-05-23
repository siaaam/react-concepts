import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { dark, isLightTheme, light } = this.context;
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
  }
}
