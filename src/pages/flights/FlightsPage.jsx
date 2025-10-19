import React, { useMemo, useState } from 'react';
import { Search, Calendar, Users, Plane, Filter, ArrowUpDown, Star, Wifi, Coffee } from 'lucide-react';

/* ---------------------------
   Mock UI atoms (in-file)
--------------------------- */

const AirportAutocomplete = ({ label, value, onChange }) => (
  <div className="form-field">
    <label className="field-label">{label}</label>
    <div className="airport-input">
      <Plane className="field-icon" size={18} />
      <input
        type="text"
        placeholder="Enter city or airport"
        value={value?.name || ''}
        onChange={(e) => onChange({ code: (value?.code || 'DEL'), name: e.target.value })}
        className="input-field"
      />
    </div>
  </div>
);

const DateRangePicker = ({ tripType, value, onChange }) => (
  <div className="form-field">
    <label className="field-label">Travel Dates</label>
    <div className="date-input">
      <Calendar className="field-icon" size={18} />
      <input
        type="date"
        value={value.start || ''}
        onChange={(e) => onChange({ ...value, start: e.target.value })}
        className="input-field"
      />
      {tripType === 'round' && (
        <input
          type="date"
          value={value.end || ''}
          onChange={(e) => onChange({ ...value, end: e.target.value })}
          className="input-field"
        />
      )}
    </div>
  </div>
);

const PassengerCabinPicker = ({ value, onChange }) => (
  <div className="form-field">
    <label className="field-label">Passengers</label>
    <div className="passenger-input">
      <Users className="field-icon" size={18} />
      <select
        value={value.adults}
        onChange={(e) => onChange({ ...value, adults: parseInt(e.target.value) })}
        className="input-field"
      >
        <option value="1">1 Adult</option>
        <option value="2">2 Adults</option>
        <option value="3">3 Adults</option>
        <option value="4">4 Adults</option>
      </select>
    </div>
  </div>
);

/* ---------------------------
   Cards and panels
--------------------------- */

const FlightCard = ({ data, onSelect }) => (
  <article className="flight-card" onClick={onSelect} tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') onSelect(); }}>
    <div className="flight-header">
      <div className="airline-info">
        <div className="airline-logo">{data.airline.code}</div>
        <div>
          <div className="airline-name">{data.airline.name}</div>
          <div className="flight-number">{data.flightNumber}</div>
        </div>
      </div>
      <div className="flight-price">
        <div className="price">₹{data.price.total.toLocaleString()}</div>
        <div className="price-per">per person</div>
      </div>
    </div>

    <div className="flight-details">
      <div className="route-info">
        <div className="departure">
          <div className="time">{data.segments[0].dep}</div>
          <div className="airport">{data.from.code}</div>
        </div>
        <div className="journey-info">
          <div className="duration">{Math.floor(data.durationMins/60)}h {data.durationMins%60}m</div>
          <div className="route-line">
            <div className="line" />
            <Plane className="plane-icon" size={16} />
          </div>
          <div className="stops">{data.stops === 0 ? 'Non-stop' : `${data.stops} stop${data.stops > 1 ? 's' : ''}`}</div>
        </div>
        <div className="arrival">
          <div className="time">{data.segments[0].arr}</div>
          <div className="airport">{data.to.code}</div>
        </div>
      </div>
    </div>

    <div className="flight-features">
      <div className="features">
        <div className="feature"><Coffee size={14} /> Meal</div>
        <div className="feature"><Wifi size={14} /> WiFi</div>
        <div className="feature">✓ Cancellation</div>
      </div>
      <div className="rating">
        <Star className="star-icon" size={14} fill="#333" color="#333" />
        <span>4.2</span>
      </div>
    </div>
  </article>
);

const FilterPanel = ({ value, onChange }) => (
  <aside className="filter-panel">
    <div className="filter-header">
      <Filter size={18} />
      <span>Filters</span>
    </div>

    <div className="filter-section">
      <h4>Stops</h4>
      <div className="filter-options">
        {['any', '0', '1', '2+'].map(stop => (
          <label key={stop} className="filter-option">
            <input
              type="radio"
              name="stops"
              value={stop}
              checked={value.stops === stop}
              onChange={(e) => onChange({ ...value, stops: e.target.value })}
            />
            <span>{stop === 'any' ? 'Any number of stops' : stop === '0' ? 'Non-stop' : stop === '1' ? '1 Stop' : '2+ Stops'}</span>
          </label>
        ))}
      </div>
    </div>

    <div className="filter-section">
      <h4>Airlines</h4>
      <div className="airline-filters">
        {['IndiGo', 'Air India', 'SpiceJet', 'Vistara'].map(airline => (
          <label key={airline} className="airline-filter">
            <input
              type="checkbox"
              checked={value.airlines.includes(airline)}
              onChange={(e) => {
                const next = new Set(value.airlines);
                if (e.target.checked) next.add(airline); else next.delete(airline);
                onChange({ ...value, airlines: Array.from(next) });
              }}
            />
            <span>{airline}</span>
          </label>
        ))}
      </div>
    </div>

    <div className="filter-section">
      <h4>Max Price</h4>
      <div className="price-range">
        <input
          type="range"
          min="5000"
          max="20000"
          step="500"
          value={value.maxPrice || 20000}
          onChange={(e) => onChange({ ...value, maxPrice: parseInt(e.target.value) })}
          className="price-slider"
        />
        <div className="price-labels">
          <span>₹5,000</span>
          <span>₹{(value.maxPrice || 20000).toLocaleString()}</span>
        </div>
      </div>
    </div>

    <div className="filter-section">
      <h4>Departure Time</h4>
      <div className="time-filters">
        {[
          { key: 'early', label: 'Early Morning (6AM - 12PM)', icon: '🌅' },
          { key: 'afternoon', label: 'Afternoon (12PM - 6PM)', icon: '☀️' },
          { key: 'evening', label: 'Evening (6PM - 12AM)', icon: '🌆' }
        ].map(time => (
          <label key={time.key} className="time-filter">
            <input
              type="checkbox"
              checked={value.times?.includes(time.key) || false}
              onChange={(e) => {
                const times = value.times || [];
                const next = new Set(times);
                if (e.target.checked) next.add(time.key); else next.delete(time.key);
                onChange({ ...value, times: Array.from(next) });
              }}
            />
            <span>{time.icon} {time.label}</span>
          </label>
        ))}
      </div>
    </div>
  </aside>
);

const BookingDrawer = ({ data, onClose, pax }) => {
  if (!data) return null;
  return (
    <div className="booking-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="booking-drawer" onClick={e => e.stopPropagation()}>
        <div className="drawer-header">
          <h3>Flight Details</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="drawer-content">
          <div className="selected-flight">
            <FlightCard data={data} onSelect={()=>{}} />
          </div>
          <div className="price-breakdown">
            <h4>Price Breakdown</h4>
            <div className="price-item">
              <span>Base Fare ({pax.adults} Adult{pax.adults > 1 ? 's' : ''})</span>
              <span>₹{(data.price.total * 0.8).toLocaleString()}</span>
            </div>
            <div className="price-item">
              <span>Taxes & Fees</span>
              <span>₹{(data.price.total * 0.2).toLocaleString()}</span>
            </div>
            <div className="price-total">
              <span>Total Amount</span>
              <span>₹{data.price.total.toLocaleString()}</span>
            </div>
          </div>
          <div className="booking-actions">
            <button className="btn btn-primary btn-full">
              Book for ₹{data.price.total.toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------
   Mock search API
--------------------------- */

const searchFlightsMock = async ({ from, to }) => {
  await new Promise(resolve => setTimeout(resolve, 900));
  const base = [
    { id: 1, airline: { code: '6E', name: 'IndiGo' }, flightNumber: '6E-234', dep: '06:30', arr: '08:45', dur: 135, stops: 0, price: 8500 },
    { id: 2, airline: { code: 'AI', name: 'Air India' }, flightNumber: 'AI-131', dep: '14:20', arr: '16:50', dur: 150, stops: 0, price: 12500 },
    { id: 3, airline: { code: 'SG', name: 'SpiceJet' }, flightNumber: 'SG-8193', dep: '18:45', arr: '21:15', dur: 150, stops: 1, price: 6800 },
    { id: 4, airline: { code: 'UK', name: 'Vistara' }, flightNumber: 'UK-971', dep: '09:05', arr: '11:25', dur: 140, stops: 0, price: 10250 },
    { id: 5, airline: { code: '6E', name: 'IndiGo' }, flightNumber: '6E-567', dep: '20:15', arr: '22:40', dur: 145, stops: 0, price: 9475 },
    { id: 6, airline: { code: 'UK', name: 'Vistara' }, flightNumber: 'UK-971', dep: '12:30', arr: '14:55', dur: 145, stops: 0, price: 10673 },
  ];
  return base.map(x => ({
    id: x.id,
    airline: x.airline,
    flightNumber: x.flightNumber,
    from: { code: from?.code || 'DEL' },
    to: { code: to?.code || 'BOM' },
    segments: [{ dep: x.dep, arr: x.arr }],
    durationMins: x.dur,
    stops: x.stops,
    price: { total: x.price },
  }));
};

/* ---------------------------
   Page
--------------------------- */

export default function FlightsPage() {
  const [tripType, setTripType] = useState('round');
  const [from, setFrom] = useState({ code: 'DEL', name: 'Delhi' });
  const [to, setTo] = useState({ code: 'BOM', name: 'Mumbai' });
  const [dates, setDates] = useState({ start: '', end: '' });
  const [pax, setPax] = useState({ adults: 2, children: 0, infants: 0, cabin: 'ECONOMY' });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState('price');
  const [filters, setFilters] = useState({ 
    stops: 'any', 
    airlines: [], 
    maxPrice: 20000,
    times: []
  });
  const [selected, setSelected] = useState(null);

  const canSearch = useMemo(() => {
    if (!from || !to) return false;
    if (!dates.start) return false;
    if (tripType === 'round' && !dates.end) return false;
    return true;
  }, [from, to, dates, tripType]);

  const swapAirports = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = async () => {
    setLoading(true);
    const res = await searchFlightsMock({ tripType, from, to, dates, pax });
    setResults(res);
    setLoading(false);
  };

  const sorted = useMemo(() => {
    const copy = [...results];
    if (sortBy === 'price') copy.sort((a,b)=>a.price.total - b.price.total);
    if (sortBy === 'duration') copy.sort((a,b)=>a.durationMins - b.durationMins);
    if (sortBy === 'departure') copy.sort((a,b)=>a.segments[0].dep.localeCompare(b.segments[0].dep));
    return copy;
  }, [results, sortBy]);

  const filtered = useMemo(() => {
    return sorted.filter(f => {
      if (filters.stops !== 'any') {
        if (filters.stops === '2+' && f.stops < 2) return false;
        if (filters.stops !== '2+' && `${f.stops}` !== `${filters.stops}`) return false;
      }
      if (filters.airlines.length && !filters.airlines.includes(f.airline.name)) return false;
      if (filters.maxPrice && f.price.total > filters.maxPrice) return false;
      return true;
    });
  }, [sorted, filters]);

  return (
    <div className="flights-page">
      
      {/* Hero Section */}
      {/* <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Find Your Perfect Flight</h1>
          <p className="hero-subtitle">Book flights to anywhere in the world with ease</p>
        </div>
        </section> */}

      <div className="container">
        <div className="container-hero">
          <h1 className="hero-title">Find Your Perfect Flight</h1>
          <p className="hero-subtitle">Book flights to anywhere in the world with ease</p>
        </div>
        {/* Search */}
        <section className="search-section" aria-labelledby="search-heading">
          <h2 id="search-heading" className="sr-only">Flight search</h2>
          <div className="search-form">
            <div
              className="trip-selector"
              role="radiogroup"
              aria-label="Trip type"
            >
              {[
                { key: 'oneway', label: 'One Way' },
                { key: 'round', label: 'Round Trip' },
                { key: 'multicity', label: 'Multi City' }
              ].map(option => (
                <button
                  key={option.key}
                  role="radio"
                  aria-checked={tripType === option.key}
                  className={`trip-option ${tripType === option.key ? 'active' : ''}`}
                  onClick={() => setTripType(option.key)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="search-inputs">
              <div className="input-row">
                <AirportAutocomplete label="From" value={from} onChange={setFrom} />
                <button className="swap-btn" onClick={swapAirports} aria-label="Swap origin and destination">
                  <ArrowUpDown size={20} />
                </button>
                <AirportAutocomplete label="To" value={to} onChange={setTo} />
                <DateRangePicker tripType={tripType} value={dates} onChange={setDates} />
                <PassengerCabinPicker value={pax} onChange={setPax} />
              </div>

              <div className="search-actions">
                <button
                  className={`search-btn ${canSearch && !loading ? 'active' : ''}`}
                  onClick={handleSearch}
                  disabled={!canSearch || loading}
                >
                  <Search size={20} />
                  {loading ? 'Searching...' : 'Search Flights'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        {results.length > 0 && (
          <section className="results-section" aria-labelledby="results-heading">
            <h2 id="results-heading" className="sr-only">Search results</h2>
            <div className="results-layout">
              <FilterPanel value={filters} onChange={setFilters} />

              <main className="results-main">
                <div className="results-header">
                  <div className="results-count">
                    <span className="count">{filtered.length}</span> flights found
                  </div>
                  <div className="sort-controls">
                    <select
                      value={sortBy}
                      onChange={e=>setSortBy(e.target.value)}
                      className="sort-select"
                      aria-label="Sort results"
                    >
                      <option value="price">Price: Low to High</option>
                      <option value="duration">Duration: Shortest</option>
                      <option value="departure">Departure: Earliest</option>
                    </select>
                  </div>
                </div>

                <div className="flights-list">
                  {filtered.map(flight => (
                    <FlightCard
                      key={flight.id}
                      data={flight}
                      onSelect={() => setSelected(flight)}
                    />
                  ))}
                </div>
              </main>
            </div>
          </section>
        )}
      </div>

      <BookingDrawer data={selected} onClose={() => setSelected(null)} pax={pax} />

      {/* Styles */}
      <style jsx>{`
        .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); border:0; }

        * { box-sizing: border-box; }

        .flights-page {
          min-height: 100vh;
          background: white;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .container-hero{margin-top:80px; text-align:center;};
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

        .hero-section { text-align: center; padding: 3rem 0 2rem; color: #333; background: white; border-bottom: 1px solid #e0e0e0; }
        .hero-title { font-size: 2.5rem; font-weight: 600; margin: 0 0 0.5rem; color: #333; }
        .hero-subtitle { font-size: 1.125rem; color: #666;  text-align: center; }

        .search-section { margin: 2rem 0; }
        .search-form { background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid #e0e0e0; }
        .trip-selector { display: flex; gap: 0.5rem; margin-bottom: 2rem; background: #f8f8f8; padding: 0.5rem; border-radius: 8px; }
        .trip-option { flex: 1; padding: 0.75rem 1.5rem; border: none; background: transparent; border-radius: 6px; font-weight: 500; cursor: pointer; color: #666; transition: all 0.2s; }
        .trip-option.active { background: #333; color: white; }
        .search-inputs { display: flex; flex-direction: column; gap: 1.5rem; }
        .input-row { display: grid; grid-template-columns: 1fr auto 1fr 1fr 1fr; gap: 1rem; align-items: end; }

        .form-field { display: flex; flex-direction: column; }
        .field-label { font-size: 0.875rem; font-weight: 600; color: #333; margin-bottom: 0.5rem; }

        .airport-input, .date-input, .passenger-input { position: relative; display: flex; align-items: center; }
        .field-icon { position: absolute; left: 12px; color: #666; z-index: 1; }
        .input-field { width: 100%; padding: 0.875rem 1rem 0.875rem 2.5rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem; transition: all 0.2s; background: white; }
        .input-field:focus { outline: none; border-color: #333; box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.1); }
        .date-input { gap: 0.5rem; }

        .swap-btn { background: #f8f8f8; border: 1px solid #ddd; border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: #666; }
        .swap-btn:hover { background: #333; border-color: #333; color: white; transform: rotate(90deg); }

        .search-actions { display: flex; justify-content: center; }
        .search-btn { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 3rem; background: #333; color: white; border: none; border-radius: 8px; font-size: 1.125rem; font-weight: 600; cursor: pointer; transition: all 0.2s; min-width: 200px; justify-content: center; }
        .search-btn:hover.active { background: #000; transform: translateY(-1px); }
        .search-btn:disabled { background: #999; cursor: not-allowed; }

        .results-section { background: white; border-radius: 12px; padding: 2rem; margin-bottom: 5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid #e0e0e0; }
        .results-layout { display: grid; grid-template-columns: 280px 1fr; gap: 2rem; }
        .filter-panel { background: #f8f8f8; border-radius: 12px; padding: 1.5rem; height: fit-content; position: sticky; top: 20px; border: 1px solid #e0e0e0; }
        .filter-header { display: flex; align-items: center; gap: 0.5rem; font-weight: 600; color: #333; margin-bottom: 1.5rem; font-size: 1.125rem; }
        .filter-section { margin-bottom: 2rem; }
        .filter-section:last-child { margin-bottom: 0; }
        .filter-section h4 { margin: 0 0 1rem; color: #333; font-weight: 600; font-size: 0.95rem; }
        .filter-options { display: flex; flex-direction: column; gap: 0.75rem; }
        .filter-option { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; padding: 0.5rem; border-radius: 6px; transition: background 0.2s; font-size: 0.9rem; }
        .filter-option:hover { background: rgba(51, 51, 51, 0.05); }
        .airline-filters { display: flex; flex-direction: column; gap: 0.75rem; }
        .airline-filter { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; padding: 0.5rem; border-radius: 6px; transition: background 0.2s; font-size: 0.9rem; }
        .airline-filter:hover { background: rgba(51, 51, 51, 0.05); }

        .price-range { margin-top: 0.5rem; }
        .price-slider { width: 100%; -webkit-appearance: none; appearance: none; height: 4px; background: #e0e0e0; border-radius: 2px; outline: none; }
        .price-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; background: #333; border-radius: 50%; cursor: pointer; }
        .price-slider::-moz-range-thumb { width: 16px; height: 16px; background: #333; border-radius: 50%; cursor: pointer; border: none; }
        .price-labels { display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.8rem; color: #666; }

        .time-filters { display: flex; flex-direction: column; gap: 0.75rem; }
        .time-filter { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; padding: 0.5rem; border-radius: 6px; transition: background 0.2s; font-size: 0.85rem; }
        .time-filter:hover { background: rgba(51, 51, 51, 0.05); }

        .results-main { min-width: 0; }
        .results-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #e0e0e0; }
        .results-count { font-size: 1.125rem; color: #333; }
        .count { font-weight: 600; color: #333; }
        .sort-select { padding: 0.5rem 1rem; border: 1px solid #ddd; border-radius: 6px; background: white; cursor: pointer; }

        .flights-list { display: flex; flex-direction: column; gap: 1rem; }
        .flight-card { background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 1.5rem; cursor: pointer; transition: all 0.2s; position: relative; overflow: hidden; }
        .flight-card:hover { border-color: #333; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transform: translateY(-1px); }
        .flight-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .airline-info { display: flex; align-items: center; gap: 1rem; }
        .airline-logo { width: 40px; height: 40px; background: #333; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.875rem; }
        .airline-name { font-weight: 600; color: #333; }
        .flight-number { font-size: 0.875rem; color: #666; }
        .flight-price { text-align: right; }
        .price { font-size: 1.5rem; font-weight: 700; color: #333; }
        .price-per { font-size: 0.75rem; color: #666; }
        .flight-details { margin-bottom: 1.5rem; }
        .route-info { display: grid; grid-template-columns: 1fr 2fr 1fr; align-items: center; gap: 2rem; }
        .departure,.arrival { text-align: center; }
        .time { font-size: 1.25rem; font-weight: 600; color: #333; margin-bottom: 0.25rem; }
        .airport { color: #666; font-size: 0.875rem; }
        .journey-info { text-align: center; }
        .duration { font-size: 0.875rem; color: #666; margin-bottom: 0.5rem; }
        .route-line { display: flex; align-items: center; justify-content: center; margin: 0.5rem 0; position: relative; }
        .line { height: 2px; background: linear-gradient(90deg, #e0e0e0 0%, #333 50%, #e0e0e0 100%); flex: 1; margin: 0 0.5rem; }
        .plane-icon { background: #333; color: white; border-radius: 50%; padding: 4px; }
        .stops { font-size: 0.75rem; color: #666; margin-top: 0.5rem; }
        .flight-features { display: flex; justify-content: space-between; align-items: center; }
        .features { display: flex; gap: 1rem; }
        .feature { display: flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; color: #666; background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 12px; }
        .rating { display: flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; color: #333; font-weight: 500; }

        .booking-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 2rem; }
        .booking-drawer { background: white; border-radius: 12px; width: 100%; max-width: 600px; max-height: 80vh; overflow-y: auto; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .drawer-header { display: flex; justify-content: space-between; align-items: center; padding: 2rem 2rem 0; margin-bottom: 1rem; }
        .drawer-header h3 { margin: 0; color: #333; font-size: 1.5rem; }
        .close-btn { background: #f0f0f0; border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; color: #666; }
        .close-btn:hover { background: #333; color: white; }
        .drawer-content { padding: 0 2rem 2rem; }
        .selected-flight { margin-bottom: 2rem; }
        .price-breakdown { margin-bottom: 2rem; padding: 1.5rem; background: #f8f8f8; border-radius: 12px; }
        .price-breakdown h4 { margin: 0 0 1rem; color: #333; font-size: 1.125rem; }
        .price-item { display: flex; justify-content: space-between; margin-bottom: 0.75rem; color: #666; }
        .price-total { display: flex; justify-content: space-between; padding-top: 1rem; border-top: 1px solid #e0e0e0; font-weight: 600; color: #333; font-size: 1.125rem; }
        .booking-actions { display: flex; flex-direction: column; gap: 1rem; }
        .btn { padding: 1rem 2rem; border-radius: 8px; font-weight: 600; font-size: 1.125rem; cursor: pointer; transition: all 0.2s; border: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
        .btn-primary { background: #333; color: white; }
        .btn-primary:hover { transform: translateY(-1px); background: #000; }
        .btn-full { width: 100%; }

        /* Responsive */
        @media (max-width: 1024px) {
          .results-layout { grid-template-columns: 1fr; }
          .filter-panel { position: static; }
        }
        @media (max-width: 768px) {
          .container { padding: 0 1rem; }
          .hero-title { font-size: 2rem; }
          .search-form { padding: 1.5rem; }
          .input-row { grid-template-columns: 1fr; gap: 1rem; }
          .swap-btn { display: none; }
          .route-info { grid-template-columns: 1fr; gap: 1rem; }
          .departure,.arrival,.journey-info { text-align: left; }
          .route-line { transform: rotate(90deg); height: 40px; margin: 1rem 0; }
          .line { height: 2px; margin: 0; }
          .features { flex-wrap: wrap; gap: 0.5rem; }
          .booking-overlay { padding: 1rem; }
          .booking-drawer { max-height: 90vh; }
          .drawer-header { padding: 1.5rem 1.5rem 0; }
          .drawer-content { padding: 0 1.5rem 1.5rem; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 1.75rem; }
          .hero-subtitle { font-size: 1rem; }
          .search-form { padding: 1rem; margin: 0 -0.5rem; border-radius: 16px; }
          .trip-selector { flex-direction: column; }
          .flight-card { padding: 1rem; }
          .flight-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .flight-price { text-align: left; }
          .airline-info { width: 100%; }
          .price { font-size: 1.25rem; }
          .time { font-size: 1.125rem; }
        }

        /* Global focus styles */
        .trip-option:focus, .input-field:focus, .search-btn:focus, .flight-card:focus {
          outline: 2px solid #333; outline-offset: 2px;
        }

        /* Input styles */
        input[type="radio"], input[type="checkbox"] {
          width: 16px;
          height: 16px;
          margin: 0;
          cursor: pointer;
        }

        input[type="radio"]:checked {
          accent-color: #333;
        }

        input[type="checkbox"]:checked {
          accent-color: #333;
        }

        /* Scrollbar styling */
        .booking-drawer::-webkit-scrollbar {
          width: 6px;
        }

        .booking-drawer::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .booking-drawer::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 3px;
        }

        .booking-drawer::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Loading state */
        .search-btn:disabled {
          opacity: 0.7;
        }

        /* Empty state */
        .no-flights {
          text-align: center;
          padding: 3rem;
          color: #666;
        }

        .no-flights h3 {
          margin: 0 0 1rem;
          color: #333;
        }

        /* Filter count badges */
        .filter-header .badge {
          background: #333;
          color: white;
          border-radius: 12px;
          padding: 0.25rem 0.5rem;
          font-size: 0.75rem;
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
}