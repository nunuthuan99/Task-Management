import React from 'react';



export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
    }
  }
  render() {
    return (
      <div className="game">
        Hello {localStorage.getItem('username')}
      </div>
    );
  }
}


// ========================================

