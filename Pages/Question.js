import * as React from 'react';

import { useEffect,useState,useTransition } from 'react';
import { Pressable, View, Text } from 'react-native';

let apiData = null;
function Question({ navigation }) {

    const [questionIndex, setQuestionIndex] = useState(-1);
    const [questionText, setQuestionText] = useState("");
    const [disableNext, setDisableNext] = useState(false);
    const [answers, setAnswers] = useState([]);

    const api = async ()=>{
        if (apiData==null){
            let data = await fetch('http://localhost/server/api.php');
            let json = await data.json();
            
            apiData = json;
            setQuestionIndex(0);
        }
    }

    const prevQuestion = ()=>{
        // if (questionIndex<apiData.questions.length-1)  
        setQuestionIndex(questionIndex-1);

    }

    const nextQuestion = ()=>{
        // if (questionIndex<apiData.questions.length-1)  
        setQuestionIndex(questionIndex+1);

    }

    useEffect(() => {
        console.log("Question Index: " + questionIndex);
        if (questionIndex>=0){
            setQuestionText(apiData.questions[questionIndex].text);
            setAnswers(apiData.questions[questionIndex].answers);
        }
        if (apiData!=null){
            if (questionIndex==apiData.questions.length-1){
                setDisableNext(true);
            }else{
                setDisableNext(false);
            }
        }
    }, [questionIndex]);

    useEffect(() => {
        api();
    }, []);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Frage</Text>
        <Text>{questionText}</Text>
        <Text>Antwort 1</Text>

        <>
            <ul>
        {answers.map(d => (<li >{d.text}</li>))} 
            </ul>
        </>

        <Pressable
          onPress={nextQuestion}
          disabled={disableNext}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Weiter</Text>
        </Pressable>

        <Pressable
          onPress={prevQuestion}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Zurück</Text>
        </Pressable>
      </View>
    );
  }

  export default Question;