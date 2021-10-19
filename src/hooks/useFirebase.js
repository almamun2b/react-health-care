import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password must contain one uppercase letters');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password must contain one special case letter');
            return;
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setError('Password must contain one digits');
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setError('Password must contain one lowercase letters');
            return;
        }

        registerNewUser(email, password);
    }

    const handleLogin = e => {
        e.preventDefault();
        processLogin(email, password);
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
            })
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {
                console.log(result);
            })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                console.log("User Signed Out");
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        handleResetPassword,
        handleNameChange,
        handleLogin,
        logOut
    }
}

export default useFirebase;