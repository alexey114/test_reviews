import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import data from '../public/data.json'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { setReviews } from './redux/slice'

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setReviews({ language: 'ru', reviews: Object.values(data.ru) }));
    dispatch(setReviews({ language: 'en', reviews: Object.values(data.en) }));
  }, [dispatch]);
  
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;