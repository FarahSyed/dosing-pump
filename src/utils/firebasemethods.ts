import { getFirestore, collection, doc, setDoc, getDocs, getDoc } from '@react-native-firebase/firestore';


// Firestore instance
const db = getFirestore();

// Add or update document
const sendData = async (collectionName: string, obj: any, id?: string) => {
    try {
        let docRef;
        if (id) {
            docRef = doc(db, collectionName, id);
            await setDoc(docRef, obj, { merge: true });
        } else {
            docRef = doc(collection(db, collectionName)); // auto-id
            obj.id = docRef.id;
            await setDoc(docRef, obj);
        }
        return `Data sent successfully to ${collectionName}/${obj.id || id}`;
    } catch (err) {
        throw err;
    }
};

// Get single or all documents
const getData = async (collectionName: string, id?: string) => {
    try {
        if (id) {
            const docSnap = await getDoc(doc(db, collectionName, id));
            return docSnap.exists() ? docSnap.data() : null;
        } else {
            const colSnap = await getDocs(collection(db, collectionName));
            return colSnap.docs.map(doc => doc.data());
        }
    } catch (err) {
        throw err;
    }
};

// Get all documents (with doc ID)
const getAllData = async (collectionName: string): Promise<any[]> => {
    try {
        const colSnap = await getDocs(collection(db, collectionName));
        return colSnap.docs.map(docSnap => ({
            id: docSnap.id,
            ...docSnap.data()
        }));
    } catch (error) {
        throw error;
    }
};

export { sendData, getData, getAllData };