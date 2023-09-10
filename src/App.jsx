import Counter from './country'
import Team from './team'
import './App.css'
import Users from './users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('hai')
  }
  const handleClick2 =()=>
  alert('hello')
   const addToFive =(num)=>{
     alert(num+3)
   }
  

  return (
    <>
      <h3>React Core Concept-2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick ={handleClick}>click me</button>
      <button onClick={handleClick2}>Click-2</button>
      <button onClick={()=>alert('hi')}>Click-3</button>
      <button onClick={()=>addToFive(3)}>five</button>
    </>
  )
}

export default App
