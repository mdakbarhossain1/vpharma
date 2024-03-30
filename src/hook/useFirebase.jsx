import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";



// Initialize Firebase
// initializeApp(firebaseConfig);
firebaseAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        const googleProvide = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvide)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
                setLoading(false);
            }
        });
    }, [])

    return {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        googleSignIn
    }

}

export default useFirebase