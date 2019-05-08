import React,{Component} from 'react';
import { connect } from "react-redux";
import { GetCountValue, IncCountValue, DecCountValue } from './store/action';

class Counter extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
      this.props.dispatch(GetCountValue());
    }

    incrementHandler=()=>{
        this.props.dispatch(IncCountValue());
    }

    decrementHandler=()=>{
        this.props.dispatch(DecCountValue());
    }

    render(){
        const { count } = this.props;
        return(
            <div>
                <h4>Count :: {count}</h4>
                <button onClick={this.incrementHandler}>Increment</button> &nbsp;&nbsp;
                <button onClick={this.decrementHandler}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>  {
    return({
        count:state.count
    })
  }
  
export default connect(mapStateToProps)(Counter);