// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// export default class Navbar extends Component {
//   static contextType = ThemeContext;
//   render() {
//     console.log(this.context);
//     const { dark, isLightTheme, light } = this.context;
//     const theme = isLightTheme ? light : dark;
// return (
//   <nav style={{ background: theme.ui, color: theme.syntax }}>
//     <h1>Context App</h1>
//     <ul>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );
//   }
// }

// another way of accessing context is ** context.consumer followed by a callback function

import React, { Component } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

export default class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, dark, light } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
