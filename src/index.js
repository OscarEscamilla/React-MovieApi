import React from 'react';
import ReactDOM from 'react-dom';
import ListMovies from './containers/ListMovies';
import 'bootswatch/dist/lux/bootstrap.min.css';




const App = () => {

  return (
    <main className="bg-dark">
      <div className="container">
        <ListMovies></ListMovies>
      </div>
    </main>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
