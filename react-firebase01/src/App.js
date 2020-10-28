import React ,{Component} from 'react';
import Search from './components/Search';
import { Provider } from 'react-redux'
import SearchStore from './redux/SearchStore.js'

class App extends Component{
render(){
  return(
    <Provider store={SearchStore}>
    <div>
      <Search/>
    </div>
    </Provider>
  )
} 
} 

export default App;