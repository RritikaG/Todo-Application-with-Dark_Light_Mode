import React from 'react';
import {HStack, VStack,Text,IconButton,Badge, StackDivider, Spacer} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
function TodoLIst({todos,deleteTodo}) {

    if(!todos.length){
        return(
            <Badge colorScheme='telegram' p='4'm='4' borderRadius='lg'>
                NO TODOS, YAY!!!!!!
            </Badge>
        )
    }

    return (
        <VStack
        alignItems='stretch'
         divider={<StackDivider/>} 
         borderColor='green.100'
         borderWidth='2px'
         p='4'
         borderRadius='lg'
         w='100%'
         maxW={{base:'90vw', sm:'80vw', xl:'40vw', lg:'50vw'}}
        >
            {todos.map(todo =>(
                <HStack id={todo.id}>
                    <Text>{todo.body}</Text>
                    <Spacer/>
                    <IconButton icon={<FaTrash/>} isRound='true' onClick={() => deleteTodo(todo.id)}/>
                </HStack>
            ))}
        </VStack>
    );
}

export default TodoLIst;
