class App extends React.Component {
  render() {
    return <h2> hey ninjas {Math.PI} </h2>;
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
