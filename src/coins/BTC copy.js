import React, { Component, createContext } from "react";

export const Contx = createContext();

export class BTC extends Component {
  state = {
    coins: [],
    digCoin: [],
    sou: [],
    passSocket: undefined
  };

  componentDidMount() {
    this.socketCall();  
  }

  socketCall = () => {
const ws = new WebSocket('wss://stream.binance.com:9443/ws');
const msg = {
  method: 'SUBSCRIBE',
  params: ['btcusdt@kline_5m'],
  id: 1,
};

ws.onopen = () => {
  ws.send(JSON.stringify(msg));
};

    ws.onmessage = e => {
      const value = e.data;
      this.setState({
        coins: value
      });
    };

    this.setState({
      passSocket: ws
    });
  };

  socketClose = () => {
    var wss = this.state.passSocket;
    wss.close();
  };

  render() {
    console.log(this.state.coins);

    // console.log(this.state.coins)
    return (
      <Contx.Provider
        value={{
          ...this.state,
          socketCall: this.socketCall,
          socketClose: this.socketClose
        }}
      >
        {this.props.children}
      </Contx.Provider>
    );
  }
}