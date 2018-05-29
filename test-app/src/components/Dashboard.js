import React, {Component} from 'react';
import '../App.css';

//REDUX
import { createStore, combineReducers }  from 'redux';
import { Provider, connect } from 'react-redux';

//ACTION HANDLERS
const incrementCount = () => ({
    type: 'INCREMENT'
})

//REDUCERS
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const count = typeof state.count === 'number' ? state.count : 1;
            return {
                count: state.count + count
            }
        default:
            return state
    }
}

const store = createStore(combineReducers({
    count: countReducer
}));

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleAlert = this.handleAlert.bind(this);
    }
    handleAlert() {
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1
        //     }
        // })
    }
    render() {
        
        return (

            <DashboardWrapper children={(
                <div className="App">
                        <p className="App-intro">
                            DASHBOARD
                        </p>
                        <input type="text" value={this.props.count} />
                        <button onClick={this.props.incrementCount}>Alert</button>
                </div>
            )}>

            
            </DashboardWrapper>
        );
    }
}

const DashboardWrapper = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

export default connect(
    (state) => {
        return {
            count: state.count
        }
    },
    (dispatch) => {
        return {
            incrementCount : () => dispatch(incrementCount())
        }
    }
)(Dashboard);