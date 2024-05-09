import { useEffect } from 'react';
import SpeechRecognition from 'react-speech-recognition';
  
  const triggerPhrases = ['Я готовий!', 'Мамо, тато, я тут!'];
  
  const ChildComponent = () => {
    useEffect(() => {
      const startListening = async () => {
        try {
          await SpeechRecognition.startListening({
            language: 'uk-UA',
            onResult: async ({ results }) => {
              const spokenText = results[0];
              if (triggerPhrases.includes(spokenText)) {
                // await sendNotificationToParent(spokenText);
              }
            },
          });
        } catch (error) {
          console.error('Error starting speech recognition:', error);
        }
      };
  
      startListening();
  
      return () => {
        SpeechRecognition.stopListening();
      };
    }, []);
  
    return null;
  };
  
  export default ChildComponent;

//   export const sendNotificationToParent = async (triggerPhrase) => {
//     try {
//       alert(`Увага! Тригерну фразу «${triggerPhrase}» розпізнано! Вашу дитину проінформовано про потенційну небезпеку. Якщо ви вважаєте, що потенційна небезпека може бути реальною, зв’яжіться з вашою дитиною`);
//     } catch (error) {
//       console.error('Error sending notification to parent:', error);
//     }
//   };