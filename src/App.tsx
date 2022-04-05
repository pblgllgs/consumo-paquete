import { Button, MyLabel } from 'pblgllgs-my-storybook-components';
import './App.css';

function App() {
  return (
    <div className="App App-header">
      <h1>Hola mundo!!!</h1>
      <Button size="large" primary label={'Hola mundo'} />
      <MyLabel
        allCaps
        label="Este es mi label personalizado"
        size="h1"
        fontColor="pink"
        color="primary"
      />
    </div>
  );
}

export default App;
