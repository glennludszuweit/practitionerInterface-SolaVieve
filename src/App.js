import Aside from './containers/Aside/Aside';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
