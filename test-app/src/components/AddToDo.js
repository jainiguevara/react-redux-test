import React, {Component} from 'react';
import '../App.css';

//REDUX
import { createStore, combineReducers }  from 'redux';

const userState = {
    users: [{
        name: 'Jaini Guevara'
    }]
}

const users = [];

//ACTION HANDLERS
const addUser = ({name = ''} = {}) => ({
    type: 'ADD_USER',
    user: {
        name
    }
})

//REDUCERS
const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {

            }
        default:
            return state
    }
}

const store = createStore(combineReducers({
    users: userReducer
}));

console.log(store);
//

class AddToDo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <p className="App-intro">ADD TO DO</p>
                <form>
                    To do: <input type="text" name="todo"></input>
                    <button>Save</button>
                </form>
            </div>
            
        );
    }
}

export default AddToDo;