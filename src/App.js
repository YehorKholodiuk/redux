import {connect} from "react-redux";
import {useState} from "react";


function App(props) {
    const [increment,setIncrement]=useState(2)
  return (
    <div >
Count:{props.myCount}
<input type="text" value={increment} onChange={e=>setIncrement(e.target.value)}/>
<button onClick={props.minus}>Minus</button>
        <button onClick={props.plus}>Plus</button>
        <button onClick={()=> props.plusIncrement(increment)}>Plus Increment</button>
    </div>
  );
}
const mapStateToProps = state => ({
    myCount:state.count
})
const mapDispatchToProps = dispatch => ({
    plus:() => dispatch({type:'PLUS'}),
    minus:() => dispatch({type:'MINUS'}),
    plusIncrement:(value) => dispatch({type:"PLUS_INCREMENT",payload:value})
})
export default connect(mapStateToProps,mapDispatchToProps) (App);


