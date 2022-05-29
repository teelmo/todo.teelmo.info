import React, {Component} from 'react';
import style from './../styles/styles.less';

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
          <h1>Todo w/ Teemo…</h1>
          <p>Things to do with Teemo, be active and suggest an activity from below or come up with your own!</p>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} checked={true} /></span> <span className={style.label}>Floating down the Rhone</span></label>
          <div className={style.done_container}>Thx Jan & et al. ❤️❤️❤️ Happy to go again!</div>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} /></span> <span className={style.label}>Museum day in Geneva</span></label>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} checked={true}/></span> <span className={style.label}>Free skiing down a mountain</span></label>
          <div className={style.done_container}>Thx Helena and Yulia and Dante! ☃️🏂☃️🏂☃️</div>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} checked={true}/></span> <span className={style.label}>Over nighter at a ski resort</span></label>
          <div className={style.done_container}>Thx Helena/Fanny & Julien!</div>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} /></span> <span className={style.label}>Ping pong tournament</span></label>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} /></span> <span className={style.label}>Bains des Pâquis sauna</span></label>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} checked={true}/></span> <span className={style.label}>Hike to Mont Tendre</span></label>
          <div className={style.done_container}>Thx Dante and Helena 🥾!</div>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} checked={true}/></span> <span className={style.label}>Tour de Lac Leman</span></label>
          <div className={style.done_container}>Thx Dante 🚲💦🚲💦!</div>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} checked={true}/></span> <span className={style.label}>Course de l'Escalade</span></label>
          <div className={style.done_container}>A new record of 35' 15'' 1!</div>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} /></span> <span className={style.label}>Beach Volley at Vessey</span></label>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} /></span> <span className={style.label}>Cycle up Salève</span></label>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} /></span> <span className={style.label}>Day by the lake w/ friends</span></label>
          <label><span className={style.input_container}><input type="checkbox" onClick={() => this.onClick()} disabled={true} checked={true}/></span> <span className={style.label}>Drink at Grottes Market</span></label>
          <div className={style.done_container}>Thx familia Sara! 🎉🎉🎉</div>
          <label className={style.extra}><span className={style.input_container}></span> <span className={style.label}>+ Hikes, Badminton, Volleyball, Running, Tabletennis and Everything!</span></label>
          <p><strong>Note:</strong> none are related to food ;)</p>
        </div>
        <div className={style.background}></div>
      </div>
    );
  }
}
export default App;