import Homepage from "./Homepage";
import QLSV from "./QLSV";
import Detail from "./Detail";
import Header from "./Header";
import { useSelector } from "react-redux";
import LoadingAnimation from './QLSV/LoadingAnimation'
import { ModalEdit } from "./QLSV/Modal";

import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {

  const load = useSelector(state => state.reducer.loadingApi);

  return (
    <>
    <BrowserRouter>
    <Header/>
    <ModalEdit/>
      <Switch>
        <Route exact path={'/'}>
          <Homepage/>
        </Route>
        <Route path={'/qlsv'}>
          <QLSV/>
        </Route>
        <Route path={`/detail/:id`}>
          <Detail/>
        </Route>
      </Switch>
      { load && <LoadingAnimation/> }
    </BrowserRouter>
    </>
  );
}

export default App;
