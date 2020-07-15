import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './components/app/';

class WhoAmI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: 26,
    };
  }
  nextYear() {
    console.log(1);
    // this.state.years++;
    this.setState;
  }
  render() {
    const { name, surname, link } = this.props;
    const { years } = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>
          My name is {name}, surname - {surname}, years ={years}
        </h1>
        <a href={link}>My profile</a>
      </>
    );
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Don" surname="Smith" link="facebook.com" />
      <WhoAmI name="Baton" surname="Smith" link="facebook.com" />
    </>
  );
};

ReactDOM.render(<All />, document.getElementById('root'));
