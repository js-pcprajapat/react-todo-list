import Filter from '../components/Filter.jsx';
import ModalWindow from '../components/modals/ModalWindow.jsx';
import AddTodoModal from '../components/modals/AddTodoModal.jsx';
import TodosList from '../components/TodosList.jsx';
import { useTodos } from '../TodosContext.jsx';

function Home() {
    const store = useTodos();
    return (
    <>
        <div className="container">
            {store.modalIsActive && 
            <ModalWindow>
                <AddTodoModal />
            </ModalWindow>
            }
            
            <Filter />
        
            <TodosList />
        </div>
    </>
    )
  }
  
  export default Home
