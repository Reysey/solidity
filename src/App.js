import logo       from './logo.svg';
import './App.css';
import web3       from './web3'; 
import lottery    from './lottery';
import { Component } from 'react';

class App extends Component {
    state = {
      manager : '',
      players : [],
      balance : '',
      value   : '',
      message : ''
    };
  

  async componentDidMount(){
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    console.log(" ---- ---- Component Did Mount ---- ----");
    console.log("manager    :", manager);
    console.log("players    :", players);
    console.log("balance    :", balance);

    this.setState({manager, players, balance});
  }

  onSubmit = async (event) => {
    event.preventDefault();
    
    // WE GONNA ASSUME THE FIRST ACCOUNT IN THE ACCOUNTS ARRAY IS GONNA BE THE ACCOUNT THAT GONNA SEND THE TRANSACTIONS
    const accounts = await web3.eth.getAccounts();

    // DEBUGING
     console.log(" ---- ---- onSubmit ---- ----");
    // const nonce = await web3.eth.getTransactionCount(web3.eth.getAccounts()[0]);
    // console.log("Transaction Count  : " + nonce);
    const block = await web3.eth.getBlock("latest");
    console.log("block              : " + block);
    const gasLimit = block.gasLimit;
    console.log("gasLimit           : " + gasLimit);
    const gasPrice = await web3.eth.getGasPrice();
    console.log("gasPrice           : " + gasPrice);
    const calGasPrice = parseInt((gasPrice / gasLimit) + gasLimit);
    console.log("calGasPrice        : " + calGasPrice);

    this.setState({
      message: 'Waiting on transaction seccess...'
    });

    // ENTER THE USER INTO THE LOTTERY
    // THIS SEND A TRANSACTION TO THE NETWORK
    await lottery.methods.enter().send({
       from: accounts[0],
       value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({
      message: 'You have been entered!'
    });

  };

  onClick = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting On Transaction Success...' });

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ message: 'A Winner Has Been Picked!' });
  }

  render(){
    web3.eth.getAccounts().then(console.log);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>lottery Contract</h1>
          <p>
            This Contract Is Managed By <span class = "badge bg-info text-dark" > {this.state.manager}</span>
          </p>
          < p >
            There are currently <span class = "badge bg-info text-dark" > {this.state.players.length}</span>
             people entered, competing to win <span class = "badge bg-info text-dark" >{web3.utils.fromWei(this.state.balance, 'ether')}</span> 
          </p>

          <hr/>

          <form onSubmit={this.onSubmit}>
            <h4>Want To Try Your Luck</h4>
            <div>
              <label class = "form-label" > Amount Of Ether to Enter </label>
              <input class="form-control" value={this.state.value} onChange={event => this.setState({value: event.target.value})} />
            </div>
            <button class = "btn btn-primary" > Enter </button>
          </form>
          <hr/>
          <h1 class ="badge rounded-pill bg-warning text-dark" >{this.state.message}</h1>
        </header>
          <hr/>
          <h1 class = "form-label">Ready To Pick A Winner?</h1>
          <button class = "btn btn-primary" onClick={this.onClick}>-- Pick a Winner --</button>
      </div>
    );
  }
  
}

export default App;
