import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase_app from "../config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./auth";




export async function signIn(email: string, password: string): Promise<void> {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, "AndrewDmit2021@gmail.com","Mathew@121");
        console.log('User signed in:', userCredential.user);
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
}
export async function signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
        const userCredential = await signInWithPopup(auth, provider);
        console.log('User signed in with Google:', userCredential.user);
    } catch (error) {
        console.error('Error signing in with Google:', error);
        throw error;
    }
}




export function signOutUser() {
    return auth.signOut();
}

export async function signUp(email: string, password: string): Promise<void> {
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up:', userCredential.user);
    } catch (error) {
        console.error('Error signing up:', error);
    }
}