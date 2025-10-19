import React, { useMemo, useState } from 'react';
import { Train, Search, MapPin, Calendar, Users, Filter, Clock, Star } from 'lucide-react';

/* Inputs */
const StationInput = ({ label, value, onChange, placeholder='City or station' }) => (
  <div className="form-field">
    <label className="field-label">{label}</label>
    <div className="input-wrap">
      <MapPin size={18} className="field-icon" />
      <input className="input-field" value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} />
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

const PaxClass = ({ pax, onPax, cls, onClass, quota, onQuota }) => (
  <div className="form-field">
    <label className="field-label">Passengers • Class • Quota</label>
    <div className="row3">
      <div className="input-wrap">
        <Users size={18} className="field-icon" />
        <select className="input-field" value={pax} onChange={(e)=>onPax(parseInt(e.target.value))}>
          {[1,2,3,4,5,6].map(n=><option value={n} key={n}>{n} {n>1?'Passengers':'Passenger'}</option>)}
        </select>
      </div>
      <select className="input-field" value={cls} onChange={(e)=>onClass(e.target.value)}>
        {['SL','3A','2A','1A','CC','EC'].map(c=><option key={c} value={c}>{c}</option>)}
      </select>
      <select className="input-field" value={quota} onChange={(e)=>onQuota(e.target.value)}>
        {['GN','TQ','PT','LD'].map(q=><option key={q} value={q}>{q}</option>)}
      </select>
    </div>
  </div>
);

/* Card */
const TrainCard = ({ data, onSelect }) => (
  <article className="card" onClick={onSelect} tabIndex={0} onKeyDown={e=>{ if(e.key==='Enter') onSelect(); }}>
    <header className="card-head">
      <div className="title">
        <div className="avatar">🚆</div>
        <div>
          <div className="name">{data.name}</div>
          <div className="sub">{data.number} • {data.classAvail.join(', ')}</div>
        </div>
      </div>
      <div className="price">
        <div className="amount">₹{data.fare.toLocaleString()}</div>
        <div className="per">starting</div>
      </div>
    </header>

    <div className="grid-3">
      <div className="cell">
        <div className="big">{data.depTime}</div>
        <div className="muted">{data.from}</div>
      </div>
      <div className="cell center">
        <div className="muted"><Clock size={14} /> {data.durationH}h {data.durationM}m</div>
        <div className="muted">{data.days.join(', ')}</div>
      </div>
      <div className="cell right">
        <div className="big">{data.arrTime}</div>
        <div className="muted">{data.to}</div>
      </div>
    </div>

    <footer className="foot">
      <div className="muted">Availability: {data.availability}</div>
      <div className="rating"><Star size={14} color="#fbbf24" fill="#fbbf24" /> {data.rating}</div>
    </footer>
  </article>
);

/* Filters */
const FilterPanel = ({ value, onChange }) => (
  <aside className="filters">
    <div className="head"><Filter size={18} /><span>Filters</span></div>

    <div className="section">
      <h4>Class</h4>
      {['SL','3A','2A','1A','CC','EC'].map(c=>(
        <label key={c} className="row">
          <input
            type="checkbox"
            checked={value.classes.includes(c)}
            onChange={(e)=>{
              const set = new Set(value.classes);
              e.target.checked? set.add(c) : set.delete(c);
              onChange({ ...value, classes: Array.from(set) });
            }}
          />
          <span>{c}</span>
        </label>
      ))}
    </div>

    <div className="section">
      <h4>Departure</h4>
      {['Morning','Afternoon','Evening','Night'].map(slot=>(
        <label key={slot} className="row">
          <input
            type="checkbox"
            checked={value.slots.includes(slot)}
            onChange={(e)=>{
              const set = new Set(value.slots);
              e.target.checked? set.add(slot) : set.delete(slot);
              onChange({ ...value, slots: Array.from(set) });
            }}
          />
          <span>{slot}</span>
        </label>
      ))}
    </div>
  </aside>
);

/* Mock API */
const searchTrains = async ({ from, to, date, cls }) => {
  await new Promise(r=>setTimeout(r, 700));
  const base = [
    { id:1, number:'12009', name:'Shatabdi Express', classAvail:['CC','EC'], depTime:'06:00', arrTime:'12:30', durationH:6, durationM:30, fare:1450, from, to, availability:'AVAILABLE', rating:4.3, days:['M','T','W','Th','F'] },
    { id:2, number:'12951', name:'Rajdhani Express', classAvail:['1A','2A','3A'], depTime:'16:10', arrTime:'08:50', durationH:16, durationM:40, fare:2250, from, to, availability:'WL 12', rating:4.1, days:['M','W','F'] },
    { id:3, number:'12627', name:'Karnataka Express', classAvail:['SL','3A','2A'], depTime:'21:20', arrTime:'14:05', durationH:16, durationM:45, fare:680, from, to, availability:'RAC 18', rating:3.9, days:['Daily'] },
  ];
  return base;
};

/* Page */
export default function TrainsPage() {
  const [from, setFrom] = useState('New Delhi (NDLS)');
  const [to, setTo] = useState('Mumbai CSMT (CSMT)');
  const [date, setDate] = useState('');
  const [pax, setPax] = useState(2);
  const [cls, setCls] = useState('3A');
  const [quota, setQuota] = useState('GN');

  const [filters, setFilters] = useState({ classes: [], slots: []});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [selected, setSelected] = useState(null);

  const canSearch = useMemo(()=> from && to && date, [from,to,date]);

  const handleSearch = async () => {
    setLoading(true);
    const res = await searchTrains({ from, to, date, cls });
    setResult(res);
    setLoading(false);
  };

  const filtered = useMemo(()=>{
    return result.filter(r=>{
      if (filters.classes.length && !filters.classes.some(c=>r.classAvail.includes(c))) return false;
      return true;
    });
  },[result, filters]);

  return (
    <div className="wrap">
      <div className="container">
        <header className="hero">
          <div className="title"><Train size={24} /> Train Tickets</div>
          <p>Check availability and book IRCTC trains</p>
        </header>

        <section className="box">
          <div className="grid">
            <StationInput label="From" value={from} onChange={setFrom} />
            <StationInput label="To" value={to} onChange={setTo} />
            <DateInput label="Journey Date" value={date} onChange={setDate} />
            <PaxClass pax={pax} onPax={setPax} cls={cls} onClass={setCls} quota={quota} onQuota={setQuota} />
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
                <TrainCard key={item.id} data={item} onSelect={()=>setSelected(item)} />
              ))}
            </main>
          </section>
        )}

        {selected && (
          <div className="dialog" onClick={()=>setSelected(null)}>
            <div className="panel" onClick={e=>e.stopPropagation()}>
              <h3>{selected.name} • {selected.number}</h3>
              <p>{selected.from} {selected.depTime} → {selected.to} {selected.arrTime}</p>
              <p>Classes: {selected.classAvail.join(', ')}</p>
              <button className="btn" onClick={()=>alert('Proceed to passenger details…')}>Continue</button>
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
        .grid{display:grid;grid-template-columns:1fr 1fr 1fr 1.6fr auto;gap:.75rem;align-items:end}
        .form-field{display:flex;flex-direction:column}
        .field-label{font-size:.85rem;font-weight:700;color:#333;margin-bottom:.35rem}
        .input-wrap{position:relative;display:flex;align-items:center}
        .field-icon{position:absolute;left:10px;color:#666}
        .input-field{width:100%;padding:.7rem .85rem .7rem 2.1rem;border:1px solid #ddd;border-radius:8px}
        .row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:.5rem}
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
