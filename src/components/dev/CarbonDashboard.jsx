import { useState, useEffect } from 'react';
import './theCSS.css'; // Import your CSS
import { MapPin, Leaf, TrendingUp, TrendingDown, TrendingFlat } from 'react-feather'; // Using react-feather for icons

export default function CarbonDashboard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [location, setLocation] = useState('Nairobi, Kenya');
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState(['Tabriz', 'London', 'Seattle']);

  // Date formatting
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const handleSearch = () => {
    if (searchTerm) {
      setRecentSearches(prev => [searchTerm, ...prev.slice(0, 4)]);
      setLocation(searchTerm);
      setSearchTerm('');
      setIsFlipped(false);
    }
  };

  return (
    <div className={`topperContainer ${isFlipped ? 'flipped' : ''}`}>
      {/* Front Side */}
      <div className="front">
        <div className="leftSideContainer">
          <div className="bg"></div>
          <div className="dateContainer">
            <span className="day">
              {currentDate.split(',')[0]}
              <span className="date">{currentDate.split(', ').slice(1).join(', ')}</span>
            </span>
            <MapPin className="pin" />
            <span className="location">{location}</span>
          </div>

          <div className="LilInfoContainer">
            <Leaf className="carbon-icon" />
            <span className="climate-value">4.2</span>
            <span className="climate-unit">tCO2e/year</span>
            <span className="climate-description">Average Carbon Footprint</span>
          </div>
        </div>

        <div className="rightSideContainer">
          <div className="moreInfoContainer">
            <ul className="InfoList">
              {[
                ['Energy Consumption', '1200 kWh'],
                ['Transportation', '800 km'],
                ['Heating/Cooling', 'energy used'],
                ['Waste', '250 kg']
              ].map(([label, value]) => (
                <li key={label} className="infoItem">
                  <span>{label}</span>
                  <span className="value">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="forecastContainer">
            <ul className="forecastDayList">
              {[
                { day: 'Mon', trend: TrendingUp, value: '+0.1' },
                { day: 'Tue', trend: TrendingDown, value: '-0.2' },
                { day: 'Wed', trend: TrendingFlat, value: '0.0' },
                { day: 'Thu', trend: TrendingUp, value: '+0.3' }
              ].map(({ day, trend: Icon, value }) => (
                <li key={day} className="forecastDay">
                  <Icon className="trend-icon" />
                  <span className="forecastDay-Day">{day}</span>
                  <span className="forecastDay-Temp">{value}</span>
                  <span className="trend-unit">tCO2e</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="change-btn-container">
            <button 
              className="ChangeLocation"
              onClick={() => setIsFlipped(true)}
            >
              <MapPin className="pin" />
              Change Location
            </button>
          </div>
        </div>
      </div>

      {/* Back Side */}
      <div className="back">
        <div id="input_container">
          <div className="in_C">
            <span>Search</span>
            <input 
              id="cityInput" 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="doSearch"
            onClick={handleSearch}
          >
            <MapPin className="pin" />
            Search Location
          </button>
        </div>
        
        <div className="recentSearches">
          <span className="recentHr">Recent</span>
          <ul className="recentList">
            {recentSearches.map((search, index) => (
              <li 
                key={index} 
                className="recentItem"
                onClick={() => {
                  setLocation(search);
                  setIsFlipped(false);
                }}
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}