import React, { useState } from 'react';
import { useSound } from 'use-sound';
import { ReactMic } from 'react-mic';
import UseShowToast from '../../UseShowToast';
import { Button, Flex } from '@chakra-ui/react';

const RecordButton = () => {
  const [record, setRecord] = useState(false);
  const [audio, setAudio] = useState('');
  const [play, { stop }] = useSound('/path/to/audio/file.mp3');
  const ShowToast = UseShowToast();

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    setAudio(recordedBlob.blobURL);
  };

  const onStop = async () => {
    stopRecording();
  
    const formData = new FormData();
    formData.append('audio', audio);
    formData.append('title', 'Recording Title');
    formData.append('description', 'Recording Description');
    formData.append('userId', '1'); 
  
    try {
      await axios.post('/api/upload-audio', formData);
      ShowToast("Success", "Audio uploaded successfully", "success");
    } catch (error) {
      ShowToast("Error",error.message, "error")
      
    }
  };
  const playAudio = () => {
    play();
  };

  const stopAudio = () => {
    stop();
  };

  return (
    <Flex display={"flex"} flexDir={"column"} gap={5}>
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#445566"
      />
      <Button colorScheme='blue' onClick={record ? stopRecording : startRecording}>
        {record ? 'Stop' : 'Start'}
      </Button>
      {audio && (
        <Flex width={300}  m={5} >
          <audio src={audio} controls />
          <Button onClick={playAudio} colorScheme='blue'>Play</Button>
          <Button onClick={stopAudio} colorScheme='blue'>Stop</Button>
        </Flex>
      )}
    </Flex>
  );
};

export default RecordButton;
