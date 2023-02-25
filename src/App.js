import './App.css';
import Navbar from './componets/Navbar';
import Header from './componets/Header'
import TodoList from './componets/TodoList'
import Footer from './componets/Footer'

function App() {
  return (
    <section>
      <div
        class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
       <Navbar/>

        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header/>
          <hr class="mt-4" />

         <TodoList/>

          <hr class="mt-4" />

        <Footer/>
        </div>
      </div>
    </section>
  );
}

export default App;
