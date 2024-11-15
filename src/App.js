import { increment,decrement } from "./Components/Redux/Slice";
import { useDispatch,useSelector } from "react-redux";

const App =()=>{
   const dispatch=useDispatch();
   const data=useSelector((state)=>state.counterReducer.count)
   function incrementValue(){
    dispatch(increment())
   }
   function decrementValue(){
    dispatch(decrement())
   }
   return(
      <>
      <button onClick={()=>{incrementValue()}}>Increment</button>
      <input value={data}/>
      <button onClick={()=>{decrementValue()}}>Decrement</button>
      </>
   )
}
export default App;
