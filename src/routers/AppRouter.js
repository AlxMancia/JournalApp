import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { starLoadingNotes } from "../actions/notes";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedin, setisLoggedin] = useState(false);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(async(user)=>{
        if(user?.uid){
            dispatch( login(user.uid,user.displayName) )
            setisLoggedin(true);
            
            dispatch(starLoadingNotes(user.uid))
        }else{
            setisLoggedin(false);
        }

        setChecking(false);


      });
    }, [dispatch,setChecking, setisLoggedin]);

    if(checking){
        return(
            <h1>Espere...</h1>
        )
    }
    

  return (
    <BrowserRouter>
        <div>
            <Routes>
                {/* <Route
                    path="/login/*"
                    element={<AuthRouter />} 
                /> */}

                <Route path="/login/*" element={<PublicRoute isAuthenticated={isLoggedin} component={AuthRouter}/>}>
                        <Route element={<AuthRouter />} />
                </Route>

                <Route path="/" element={<PrivateRoute isAuthenticated={isLoggedin} component={JournalScreen}/>}>
                        <Route element={<JournalScreen />} />
                </Route>

            </Routes>
        </div>
    </BrowserRouter>
  );
};
