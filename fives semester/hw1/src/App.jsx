import React from 'react';

export const App = () => {
  const name = 'Danylo';
  const obj = { siteName: 'Google', url: 'https://www.google.com/' };
  const firstNum = 1;
  const secondNum = 1;
  const arr = ['Червоний', 'Синій', 'Зелений'];
  return (
    <div>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src="https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif"
        alt="gif"
      ></img>
      <a href={obj.url}>{obj.siteName}</a>
      <p>{firstNum + secondNum}</p>
      <ul>
        {arr.map(elem => (
          <li>{elem}</li>
        ))}
      </ul>
    </div>
  );
};
