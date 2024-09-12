function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <ParkingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return <div className="add-form">What do you need for your 😍 trip?</div>;
}

function ParkingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 You have X items on your parking list, and you already packed X (X%)
      </em>
    </footer>
  );
}

export default App;
