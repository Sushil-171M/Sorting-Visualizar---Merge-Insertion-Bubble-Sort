
import './App.css';
import {Grid} from '@material-ui/core';
import SortingVisualiser from './components/SortingVisualiser/SortingVisualiser.jsx'
function App() {
  return (
    <Grid
    direction="column"
    style={{ height: '100vh' , width: '1500px'}}>
      <SortingVisualiser />
    </Grid>
  );
}

export default App;
