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
          <h1>Still to do…</h1>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} checked={true} /> Floating down the Rhone</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Museum day in Geneva</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Free skiing down a mountain</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Over nighter at a ski resort</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Ping pong tournament</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Bains des Pâquis sauna</label>
          <label><input type="checkbox" onClick={() => this.onClick()} disabled={true} /> Hike to Mont Tendre</label>
        </div>
        <div className={style.background}></div>
      </div>
    );
  }
}
export default App;