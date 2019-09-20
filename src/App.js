import React, { Component } from 'react';
import './App.css';
import { LineChart } from 'react-chartkick';
import 'chart.js';
var jsonp = require('jsonp'); 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main_data : [
        { "name": "mec", "data": { "2017-01-01": 3, "2017-01-02": 4 } },
        { "name": "tec", "data": { "2017-01-01": 5, "2017-01-02": 3 } },
        { "name": "10web", "data": { "2017-01-01": 5, "2017-01-02": 3 } },
        { "name": "allinone", "data": { "2017-01-01": 5, "2017-01-02": 3 } },
        { "name": "eventmanager", "data": { "2017-01-01": 5, "2017-01-02": 3 } }
      ]
    }
    
  }
  async componentDidMount() {


    jsonp('https://api.wordpress.org/stats/plugin/1.0/downloads.php?slug=modern-events-calendar-lite&limit=30', null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState(event => {
          event.main_data.map(e => {
            if (e.name === 'mec'){
              e.data = data;
            }
            return true;
          })
          return true;
        });
      }
    });

    jsonp('https://api.wordpress.org/stats/plugin/1.0/downloads.php?slug=the-events-calendar&limit=30', null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState(event => {
          event.main_data.map(e => {
            if (e.name === 'tec'){
              e.data = data;
            }
            return true;
          })
          return true;
        });
      }
    });

    jsonp('https://api.wordpress.org/stats/plugin/1.0/downloads.php?slug=spider-event-calendar&limit=30', null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState(event => {
          event.main_data.map(e => {
            if (e.name === '10web'){
              e.data = data;
            }
            return true;
          })
          return true;
        });
      }
    });

    jsonp('https://api.wordpress.org/stats/plugin/1.0/downloads.php?slug=all-in-one-event-calendar&limit=30', null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState(event => {
          event.main_data.map(e => {
            if (e.name === 'allinone'){
              e.data = data;
            }
            return true;
          })
          return true;
        });
      }
    });

    jsonp('https://api.wordpress.org/stats/plugin/1.0/downloads.php?slug=events-manager&limit=30', null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState(event => {
          event.main_data.map(e => {
            if (e.name === 'eventmanager'){
              e.data = data;
            }
            return true;
          })
          return true;
        });
      }
    });

  }
  render() {
    //console.log(this.state.main_data)
    return (
      <div>
        <LineChart id="users-chart" width="90%" height="90vh" xtitle="Date" ytitle="Downloads" download={true} curve={false}  data={this.state.main_data} />
      </div>
    )
  }
}