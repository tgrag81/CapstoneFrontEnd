import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StockStuff.css";







const StockStuff = () => {

 
    const [postContent, setPostContent] = useState("");
    const [news, setNews] = useState([]);
    const [weather, setWeather] = useState(null);
    const [stocks, setStocks] = useState([]);

    // Retrieve real-time news
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines",
                    {
                        params: {
                            country: "us",
                            apiKey: "24e5454219ee4b2f91e20a7889752d66", // NewsAPI @redleg81
                        },
                    }
                );
                setNews(response.data.articles.slice(0, 5)); //top 5 articles to display
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
    }, []);

    // Fetch weather updates
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    "https://api.openweathermap.org/data/2.5/weather",
                    {
                        params: {
                            q: "New York", // Default location
                            units: "metric",
                            appid: "7a79f029eb7ff6e6469703957d1d55d1", // Tgrag81 - redleg81@gmail
                        },
                    }
                );
                setWeather(response.data);
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        };

        fetchWeather();
    }, []);

    // Fetch stock prices
    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await axios.get(
                    "https://finnhub.io/api/v1/quote",
                    {
                        params: {
                            symbol: "AAPL", 
                            token: "cthr4chr01qm2t957iugcthr4chr01qm2t957iv0", //API key from Finnhub Stock Api @redleg81
                        },
                    }
                );
                setStocks([{ symbol: "AAPL", ...response.data }]);
            } catch (error) {
                console.error("Error fetching stock prices:", error);
            }
        };

        fetchStocks();
    }, []);

    






    return (
        <div className="create-post-container">
            <h1>Stock Stuff</h1>

            
            {/* Real-Time News Section */}
            <div className="news-section">
                <h2>Latest News</h2>
                <ul>
                    {news.map((article, index) => (
                        <li key={index}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Weather Section */}
            <div className="weather-section">
                <h2>Current Weather</h2>
                {weather ? (
                    <p>
                        {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
                    </p>
                ) : (
                    <p>Loading weather...</p>
                )}
            </div>

            {/* Stock Prices Section */}
            <div className="stocks-section">
                <h2>Stock Prices</h2>
                {stocks.length > 0 ? (
                    <ul>
                        {stocks.map((stock, index) => (
                            <li key={index}>
                                {stock.symbol}: ${stock.c.toFixed(2)} (Current)
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading stock prices...</p>
                )}
            </div>
        </div>
    );
};


export default StockStuff;
