import './App.css';
import Navbar from './componets/Navbar';
import Header from './componets/Header'
import TodoList from './componets/TodoList'
import Footer from './componets/Footer'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <section>
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
       <Navbar/>

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header/>
          <hr className="mt-4" />

         <TodoList/>

          <hr className="mt-4" />

        <Footer/>
        </div>
      </div>
    </section>
    </Provider>
  );
}

export default App;
