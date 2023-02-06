import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = 'Your API key here';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(NEWS_API_URL);
      setNews(response.data.articles);
    };

    fetchNews();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode-toggle' : 'light'}`}>
      <header className="header">
        <h1 className="title">News Application</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="main">
        {news.map((article) => (
          <div className="news-item" key={article.title}>
            <h2 className="news-item-title">{article.title}</h2>
            <p className="news-item-description">{article.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default NewsApp;
