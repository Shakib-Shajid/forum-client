import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log("Current User", currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout= ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        signInWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;