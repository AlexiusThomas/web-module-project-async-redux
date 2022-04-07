import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getQuote } from './actions/animeActions'


const App = props => {

  const fetchQuote = e => {
    e.preventDefault();
    props.getQuote()
  }

  return (
    <div className="App">
       <h1>Random Anime Quote</h1>
       <div className='Anime-Container'>

<p className='Anime-Title'>Anime: {props.anime}</p>
<p className='Anime-Character'>Character: {props.character}</p>
<label name='Anime-Quote'>Quote: </label>
<p className='Anime-Quote' name='Anime-Quote'> {props.quote}</p>
      <button onClick={fetchQuote}>Press for Quote!</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  anime: state.anime,
  character: state.character,
  quote: state.quote,
  isFetching: state.isFetching,
  error: state.error
})

export default connect(mapStateToProps, { getQuote })(App); 