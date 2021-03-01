import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import {useState} from 'react'
import {nanoid} from 'nanoid'
function AddTodo({addTodo}) {

    const toast = useToast();
    function handleSubmit(e)
    {
        e.preventDefault();
        if(!content)
        {
            toast({
                title: "No Content Please Add some Todo",
                status: "error",
                duration: 2000,
                isClosable: true,
              });
              return;
        }
        const todo={
            id:nanoid(),
            body: content,
        }
         addTodo(todo);
         setContent('');
    }
    const [content,setContent] = useState('');

    return (
    <form onSubmit={handleSubmit}>
        <HStack mt='8'>

            <Input 
            variant='filled'
            placeholder='learning chakra-ui' 
            value={content} 
            onChange={(e)=> setContent(e.target.value)}/>
            <Button colorScheme='cyan' px='8' type='submit'>Add Todo</Button> 
        </HStack>
    </form>
    );
}

export default AddTodo;
