import React, { useMemo, useState } from 'react';
import { Bus, Search, MapPin, Calendar, Users, Filter, Clock, Star } from 'lucide-react';

/* Inputs */
const CityInput = ({ label, value, onChange, placeholder = 'City or stop' }) => (
  <div className="form-field">
    <label className="field-label">{label}</label>
    <div className="input-wrap">
      <MapPin size={18} className="field-icon" />
      <input
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
      />
    </div>
  </div>
);

const DateInput = ({ label, value, onChange }) => (
  <div className="form-field">
    <label className="field-label">{label}</label>
    <div className="input-wrap">
      <Calendar size={18} className="field-icon" />
      <input type="date" className="input-field" value={value} onChange={(e)=>onChange(e.target.value)} />
    </div>
  </div>
);

const PaxInput = ({ value, onChange }) => (
  <div className="form-field">
    <label className="field-label">Passengers</label>
    <div className="input-wrap">
      <Users size={18} className="field-icon" />
      <select className="input-field" value={value} onChange={(e)=>onChange(parseInt(e.target.value))}>
        {[1,2,3,4,5,6].map(n=><option key={n} value={n}>{n} {n>1?'Passengers':'Passenger'}</option>)}
      </select>
    </div>
  </div>
);

/* Card */
const BusCard = ({ data, onSelect }) => (
  <article className="card" onClick={onSelect} tabIndex={0} onKeyDown={e=>{ if(e.key==='Enter') onSelect(); }}>
    <header className="card-head">
      <div className="title">
        <div className="avatar">🚌</div>
        <div>
          <div className="name">{data.operator}</div>
          <div className="sub">{data.type} • {data.ac ? 'AC' : 'Non-AC'} • {data.seater ? 'Seater' : 'Sleeper'}</div>
        </div>
      </div>
      <div className="price">
        <div className="amount">₹{data.price.toLocaleString()}</div>
        <div className="per">per seat</div>
      </div>
    </header>

    <div className="grid-3">
      <div className="cell">
        <div className="big">{data.depTime}</div>
        <div className="muted">{data.from}</div>
      </div>
      <div className="cell center">
        <div className="muted"><Clock size={14} /> {data.durationH}h {data.durationM}m</div>
        <div className="muted">{data.stops === 0 ? 'Non-stop' : `${data.stops} stops`}</div>
      </div>
      <div className="cell right">
        <div className="big">{data.arrTime}</div>
        <div className="muted">{data.to}</div>
      </div>
    </div>

    <footer className="foot">
      <div className="muted">Boarding: {data.boarding} • Dropping: {data.dropping}</div>
      <div className="rating"><Star size={14} color="#fbbf24" fill="#fbbf24" /> {data.rating}</div>
    </footer>
  </article>
);

/* Filters */
const FilterPanel = ({ value, onChange }) => (
  <aside className="filters">
    <div className="head"><Filter size={18} /><span>Filters</span></div>

    <div className="section">
      <h4>Type</h4>
      {['AC','Non-AC','Seater','Sleeper'].map(tag => (
        <label key={tag} className="row">
          <input
            type="checkbox"
            checked={value.tags.includes(tag)}
            onChange={(e)=>{
              const set = new Set(value.tags);
              e.target.checked ? set.add(tag) : set.delete(tag);
              onChange({ ...value, tags: Array.from(set) });
            }}
          />
          <span>{tag}</span>
        </label>
      ))}
    </div>

    <div className="section">
      <h4>Departure</h4>
      {['Before 6 AM','6 AM - 12 PM','12 PM - 6 PM','After 6 PM'].map(slot => (
        <label key={slot} className="row">
          <input
            type="checkbox"
            checked={value.depSlots.includes(slot)}
            onChange={(e)=>{
              const set = new Set(value.depSlots);
              e.target.checked ? set.add(slot) : set.delete(slot);
              onChange({ ...value, depSlots: Array.from(set) });
            }}
          />
          <span>{slot}</span>
        </label>
      ))}
    </div>
  </aside>
);

/* Mock API */
const searchBuses = async ({ from, to, date }) => {
  await new Promise(r=>setTimeout(r, 700));
  const base = [
    { id:1, operator:'VRL Travels', type:'Express', ac:true, seater:false, depTime:'07:30', arrTime:'13:15', durationH:5, durationM:45, stops:0, rating:4.2, price:899, from, to, boarding:'Majestic', dropping:'Kalasipalyam' },
    { id:2, operator:'SRS Travels', type:'Ordinary', ac:false, seater:true, depTime:'14:00', arrTime:'19:30', durationH:5, durationM:30, stops:1, rating:3.9, price:699, from, to, boarding:'Anand Rao', dropping:'Madiwala' },
    { id:3, operator:'KSRTC', type:'Airavat', ac:true, seater:true, depTime:'22:15', arrTime:'04:45', durationH:6, durationM:30, stops:0, rating:4.4, price:1199, from, to, boarding:'Shantinagar', dropping:'Madivala' },
  ];
  return base;
};

/* Page */
export default function BusesPage() {
  const [from, setFrom] = useState('Bengaluru');
  const [to, setTo] = useState('Hyderabad');
  const [date, setDate] = useState('');
  const [pax, setPax] = useState(1);
  const [filters, setFilters] = useState({ tags: [], depSlots: [] });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [selected, setSelected] = useState(null);

  const canSearch = useMemo(()=> from && to && date, [from,to,date]);

  const handleSearch = async () => {
    setLoading(true);
    const res = await searchBuses({ from, to, date });
    setResult(res);
    setLoading(false);
  };

  const filtered = useMemo(()=>{
    return result.filter(r=>{
      if (filters.tags.length) {
        const tags = new Set();
        if (r.ac) tags.add('AC'); else tags.add('Non-AC');
        if (r.seater) tags.add('Seater'); else tags.add('Sleeper');
        if (![...tags].some(t => filters.tags.includes(t))) return false;
      }
      return true;
    });
  },[result, filters]);

  return (
    <div className="wrap">
      <div className="container">
        <header className="hero">
          <div className="title"><Bus size={24} /> Bus Tickets</div>
          <p>Search, compare and book intercity buses</p>
        </header>

        <section className="box">
          <div className="grid">
            <CityInput label="From" value={from} onChange={setFrom} />
            <CityInput label="To" value={to} onChange={setTo} />
            <DateInput label="Travel Date" value={date} onChange={setDate} />
            <PaxInput value={pax} onChange={setPax} />
            <button className="btn" onClick={handleSearch} disabled={!canSearch || loading}>
              <Search size={18} /> {loading?'Searching…':'Search'}
            </button>
          </div>
        </section>

        {filtered.length>0 && (
          <section className="layout">
            <FilterPanel value={filters} onChange={setFilters} />
            <main className="list">
              {filtered.map(item=>(
                <BusCard key={item.id} data={item} onSelect={()=>setSelected(item)} />
              ))}
            </main>
          </section>
        )}

        {selected && (
          <div className="dialog" onClick={()=>setSelected(null)}>
            <div className="panel" onClick={e=>e.stopPropagation()}>
              <h3>{selected.operator} • ₹{selected.price.toLocaleString()}</h3>
              <p>{selected.from} {selected.depTime} → {selected.to} {selected.arrTime}</p>
              <button className="btn" onClick={()=>alert('Proceed to seat selection…')}>Continue</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .wrap{background:#f5f5f5; min-height:100vh; font-family:Inter,system-ui,sans-serif;}
        .container{max-width:1200px; margin:0 auto; padding:1.25rem;}
        .hero{background:white;border:1px solid #e0e0e0;border-radius:12px;padding:1rem 1.25rem;margin-bottom:1rem;}
        .title{display:flex;align-items:center;gap:.5rem;font-weight:800;color:#111827}
        .box{background:white;border:1px solid #e0e0e0;border-radius:12px;padding:1rem 1.25rem;margin-bottom:1rem;}
        .grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr auto;gap:.75rem;align-items:end}
        .form-field{display:flex;flex-direction:column}
        .field-label{font-size:.85rem;font-weight:700;color:#333;margin-bottom:.35rem}
        .input-wrap{position:relative;display:flex;align-items:center}
        .field-icon{position:absolute;left:10px;color:#666}
        .input-field{width:100%;padding:.7rem .85rem .7rem 2.1rem;border:1px solid #ddd;border-radius:8px}
        .btn{height:44px;padding:0 1rem;border-radius:8px;border:1px solid #111;background:#111;color:#fff;font-weight:700}
        .layout{display:grid;grid-template-columns:280px 1fr;gap:1rem}
        .filters{background:#f8f8f8;border:1px solid #e0e0e0;border-radius:12px;padding:1rem}
        .filters .head{display:flex;gap:.5rem;align-items:center;font-weight:700;margin-bottom:1rem}
        .filters .section{margin-bottom:1rem}
        .filters .row{display:flex;gap:.5rem;align-items:center}
        .list{display:grid;gap:.75rem}
        .card{background:#fff;border:1px solid #e0e0e0;border-radius:12px;padding:1rem;cursor:pointer}
        .card-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:.75rem}
        .avatar{width:36px;height:36px;border-radius:8px;background:#111;color:#fff;display:flex;align-items:center;justify-content:center}
        .name{font-weight:800;color:#111}
        .sub{color:#666;font-size:.9rem}
        .amount{font-weight:800;color:#111}
        .grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center}
        .cell .big{font-weight:800;color:#111}
        .muted{color:#666;font-size:.9rem}
        .center{text-align:center}.right{text-align:right}
        .foot{display:flex;justify-content:space-between;align-items:center;margin-top:.5rem}
        .rating{display:flex;align-items:center;gap:.25rem}
        .dialog{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:1rem}
        .panel{background:#fff;border-radius:12px;max-width:520px;width:100%;padding:1rem}
        @media (max-width:960px){.grid{grid-template-columns:1fr 1fr;}.layout{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}
