import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore/lite';
import { useSelector, useDispatch } from 'react-redux'

const firebaseConfig = {
    apiKey: "AIzaSyBP2lf9pVcZ9oWQOLR9gntyc2ISMYT_xWk",
    authDomain: "prototype-c5991.firebaseapp.com",
    projectId: "prototype-c5991",
    storageBucket: "prototype-c5991.appspot.com",
    messagingSenderId: "843777537936",
    appId: "1:843777537936:web:d13e569b6a10719b03e515",
    measurementId: "G-HQDWTR2Z6V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function loadSnapshot() {

    alert("Loading the latest snapshot");

    const citiesCol = collection(db, 'database');
    const snapshot = await getDocs(query(citiesCol, orderBy("timestamp", "desc")))
    const cityList = snapshot.docs.map(doc => doc.data());

    const data = cityList[0];
    window.localStorage.setItem("payload", data.payload);   
    window.location.reload();
}

export async function takeSnapshot(payload) {

    try {
        const docRef = await addDoc(collection(db, "database"), {
            payload: payload,
            timestamp: new Date().getTime()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

export async function clearStorage() {

    window.localStorage.clear();
    window.location.reload();

}

export default function Sync() {

    const payload = useSelector((state) => state);
    const payloadJSON = JSON.stringify(payload);
    window.localStorage.setItem("payload", payloadJSON);

    return (

        <Box>
            <hr />
            <Button variant='outlined' sx={{marginRight:1}} onClick={(e) => loadSnapshot()}>Load</Button>
            <Button variant='outlined' sx={{marginRight:1}} onClick={(e) => takeSnapshot(payloadJSON)}>Save</Button>
            <Button variant='outlined' onClick={(e) => clearStorage()}>Clear</Button>

            <pre>{JSON.stringify(payload, null, 2)}</pre>

        </Box>

    )

}
