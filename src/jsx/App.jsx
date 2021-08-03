import React, {Component} from 'react';
import style from './../styles/styles.less';

import Confetti from 'react-confetti';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  onClick() {
    return false;
  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div>
        <div className={style.app}>
          <h1>To do with Teemo…</h1>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} checked={true} /> Floating down the Rhone</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Museum day in Geneva</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Free skiing down a mountain</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Over nighter at a ski resort</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Ping pong tournament</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Bains des Pâquis sauna</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Hike to Mont Tendre</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Tour de Lac Leman</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Course de l'Escalade</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Beach Volley at Vessey</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Cycle up Salève</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Day by the lake w/ friends</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Drink at Grottes Market</label>
        </div>
        <div className={style.background}></div>
      </div>
    );
  }
}
export default App;