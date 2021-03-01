import {Heading} from '@chakra-ui/react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoLIst';
import {VStack,IconButton, useColorMode} from '@chakra-ui/react';
import {FaSun,FaMoon} from "react-icons/fa";
import {useEffect,useState} from 'react'


function App() {


  const initialTodos=[
    {
        id:1,
        body:'get bread',
    },
    {
        id:2,
        body:'learn react',
    },
];
const [todos,setTodos] = useState(
  ()=>JSON.parse(localStorage.getItem('todos')) || []
  );
  
  useEffect(()=>{
   localStorage.setItem('todos',JSON.stringify(todos))
   },[todos])

 function deleteTodo(id)
 {
   const newTodos =todos.filter((todo) =>{
     return todo.id!==id;
   });

   setTodos(newTodos);
 }


  function addTodo(todo){
    setTodos([...todos,todo])
  }

  const {colorMode,toggleColorMode} = useColorMode()

  return (
    <VStack p={4}>
      <IconButton
      onClick={toggleColorMode}
      icon={ colorMode ==='light' ?<FaSun/> : <FaMoon/>}
      isRound='true' 
      size="lg" 
      alignSelf="flex-end"/>
  <Heading
      mb='8' 
      fontWeight='extrabold' 
      size='2xl' 
      bgClip='text'
      bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
      >
        Todo Application
  </Heading>
  <TodoList todos={todos} deleteTodo={deleteTodo} />
<AddTodo addTodo={addTodo}/>
</VStack>
  );
}

export default App;
