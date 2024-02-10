import { Box, Button, Flex, Input, Text,  VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import UseShowToast from '../UseShowToast';

const Contact = () => {
    const showToast = UseShowToast();
    const [values, setData] = useState({
        // name: '',
        languge:'',
        gender:'',
        age: '',
        country: '',
        // email: '',
        // message: '', // Added message to state
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // if (!values.name || !values.age || !values.country || !values.email || !values.message) {
        //     return showToast("Error", "خطأ الرجاء ملئ الحقول ", "error");
            
        // }

        try {
            const res = await axios.post('http://localhost:8001/info', values);
            showToast("Success", "شكرا لك نحن سعداء بزيارتك ", "success");
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };

    return (
        <Flex h="100vh" display="flex" justifyContent="center" alignItems="center">
            <Flex w="full" border="1px solid black" mb={20} mt={20} borderRadius={10} h="60vh" color="white" p={3} alignItems="center" justifyContent="center" bg="black">
                <VStack>
                    <Text fontSize={20} textAlign="center" color="white">
                        اخي القارئ ان هذه البيانات تجربة اختيارية 
                    </Text>
                    <form onSubmit={handleSubmit}>

                        <Box mb={2}>
                            <Input type="text" placeholder='Enter languge' w={350} onChange={e => setData({ ...values, languge: e.target.value })} />
                        </Box>
                        <label htmlFor="gender">
                            Gender: 
                            <select name="gender" style={{background:'black', padding:2, margin:2, marginBottom:"2"}} onChange={e => setData({...values, gender:e.target.value})} >
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            </label>
                        <Box mb={2}>
                            <Input type="numeric" placeholder='Enter age' onChange={e => setData({ ...values, age: e.target.value })} />
                        </Box>
                        <Box mb={2}>
                            <Input type="numeric" placeholder='Enter country' onChange={e => setData({ ...values, country: e.target.value })} />
                        </Box>
                        {/* <Box mb={2}>
                            <Input type="email" placeholder='Enter email' onChange={e => setData({ ...values, email: e.target.value })} />
                        </Box> */}
                        {/* <Box mb={2}>
                            <Textarea placeholder='Enter your message' onChange={e => setData({ ...values, message: e.target.value })} />
                        </Box> */}
                        <Button type="submit" colorScheme='blue' variant='solid'>
                            Submit
                        </Button>
                    </form>
                </VStack>
            </Flex>
        </Flex>
    );
};

export default Contact;
