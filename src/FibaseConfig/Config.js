import { initializeApp} from "firebase/app";
import { getAuth} from  'firebase/auth';
import { getFirestore} from  'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAmczaemZoBTTa7Ia4knQafpqMn1HP46A0",
  authDomain: "netflix-5e2c0.firebaseapp.com",
  projectId: "netflix-5e2c0",
  storageBucket: "netflix-5e2c0.appspot.com",
  messagingSenderId: "508578248350",
  appId: "1:508578248350:web:f30b98adc020ae50722d8f"
};

  const app=initializeApp(firebaseConfig)
  const auth=getAuth();
  const db=getFirestore(app);

  export {app,auth,db};