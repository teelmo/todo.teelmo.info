import React, { /* useState, useEffect */ } from 'react';
import '../styles/styles.less';

function App() {
  const onClick = () => false;
  return (
    <div>
      <div className="app">
        <h1>Todo w/ Teemo…</h1>
        <p>Things to do with Teemo, be active and suggest an activity from below or come up with your own!</p>
        <label htmlFor="input-1">
          <span className="input_container"><input type="checkbox" id="input-1" onClick={() => onClick()} disabled checked /></span>
          {' '}
          <span className="label">Floating down the Rhone</span>
        </label>
        <div className="done_container">Thx Jan & et al. ❤️❤️❤️ Happy to go again!</div>
        <label htmlFor="input-2">
          <span className="input_container"><input type="checkbox" id="input-2" onClick={() => onClick()} disabled /></span>
          {' '}
          <span className="label">Museum day in Geneva</span>
        </label>
        <label htmlFor="input-3">
          <span className="input_container"><input type="checkbox" id="input-3" onClick={() => onClick()} disabled checked /></span>
          {' '}
          <span className="label">Free skiing down a mountain</span>
        </label>
        <div className="done_container">Thx Helena and Yulia and Dante! ☃️🏂☃️🏂☃️</div>
        <label htmlFor="input-4">
          <span className="input_container"><input type="checkbox" id="input-4" onClick={() => onClick()} disabled checked /></span>
          {' '}
          <span className="label">Over nighter at a ski resort</span>
        </label>
        <div className="done_container">Thx Helena/Fanny & Julien!</div>
        <label htmlFor="input-5">
          <span className="input_container"><input type="checkbox" id="input-5" onClick={() => onClick()} disabled /></span>
          {' '}
          <span className="label">Ping pong tournament</span>
        </label>
        <label htmlFor="input-6">
          <span className="input_container"><input type="checkbox" id="input-6" onClick={() => onClick()} disabled /></span>
          {' '}
          <span className="label">Bains des Pâquis sauna</span>
        </label>
        <label htmlFor="input-7">
          <span className="input_container"><input type="checkbox" id="input-7" onClick={() => onClick()} disabled checked /></span>
          {' '}
          <span className="label">Hike to Mont Tendre</span>
        </label>
        <div className="done_container">Thx Dante and Helena 🥾!</div>
        <label htmlFor="input-8">
          <span className="input_container"><input type="checkbox" id="input-8" onClick={() => onClick()} disabled checked /></span>
          {' '}
          <span className="label">Tour de Lac Leman</span>
        </label>
        <div className="done_container">Thx Dante 🚲💦🚲💦!</div>
        <label htmlFor="input-9">
          <span className="input_container"><input type="checkbox" id="input-9" onClick={() => onClick()} disabled checked /></span>
          {' '}
          <span className="label">Course de l&apos;Escalade</span>
        </label>
        <div className="done_container">A new record of 35&apos; 15&apos;&apos; 1!</div>
        <label htmlFor="input-10">
          <span className="input_container"><input type="checkbox" id="input-10" onClick={() => onClick()} disabled /></span>
          {' '}
          <span className="label">Beach Volley at Vessey</span>
        </label>
        <label htmlFor="input-11">
          <span className="input_container"><input type="checkbox" id="input-11" onClick={() => onClick()} disabled checked /></span>
          {' '}
          <span className="label">Cycle up Salève</span>
        </label>
        <div className="done_container">Thank you Holy Saturday 🐥!</div>
        <label htmlFor="input-12">
          <span className="input_container"><input type="checkbox" id="input-12" onClick={() => onClick()} disabled /></span>
          {' '}
          <span className="label">Day by the lake w/ friends</span>
        </label>
        <label htmlFor="input-13">
          <span className="input_container"><input type="checkbox" id="input-13" onClick={() => onClick()} disabled checked /></span>
          {' '}
          <span className="label">Drink at Grottes Market</span>
        </label>
        <div className="done_container">Thx familia Sara! 🎉🎉🎉</div>
        <div className="extra">+ Hikes, Badminton, Volleyball, Running, Tabletennis and Everything!</div>
        <p>
          <strong>Note:</strong>
          {' '}
          none are related to food ;)
        </p>
      </div>
      <div className="background" />
    </div>
  );
}

export default App;
