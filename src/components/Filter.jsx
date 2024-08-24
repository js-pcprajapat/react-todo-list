import './Filter.scss';
import { TodosContext, useTodos } from '../TodosContext';
function Filter() {
    const store = useTodos();
    return (
    <>
        <div className="filters">
            <div>
                <p>Filter by state</p>
                <div className="badges">
                    <div onClick={()=>store.setFilterBy('todo')} className={`badge ${store.filterBy === 'todo' ? 'selected' : ''}`}>
                        To-Do
                    </div>
                    <div onClick={()=>store.setFilterBy('done')} className={`badge ${store.filterBy === 'done' ? 'selected' : ''}`}>
                        Done
                    </div>
                    {
                        store.filterBy &&
                        <span className="clear" onClick={()=>store.setFilterBy('')}>
                            x clear
                        </span>
                    }
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default Filter