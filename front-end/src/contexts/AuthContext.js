import React, { useContext, useState, useEffect } from "react"
// import { ToastBody } from "react-bootstrap";
import api from "../api/db";

const AuthContext = React.createContext()

export function useAuth() {
return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [allUsers, setAllUsers] = useState()
       const [currentUser, setCurrentUser] = useState()
       const [loading, setLoading] = useState(true)


      function signup( email, password) {
          console.log("email password => ",email , password);
          api.post( '/users' , 
            {
              surname: "PAul",
              name: "test",
              group: "educ",
              fonction: "test",
              mail: email,
              password: password
            }
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }); 
        }
          

        function login(email, password) {
            allUsers.map((user) => {
                if (user.mail === email && user.password === password) {
                    setCurrentUser(user);
                } 
                else {
                  console.log("non");
                }
            }          
           )
        }
       
        function logout() {
                setCurrentUser("");
        }

//     //   function resetPassword(email) {
//     //     return auth.sendPasswordResetEmail(email)
//     //   }

//     //   function updateEmail(email) {
//     //     return currentUser.updateEmail(email)
//     //   }

//     //   function updatePassword(password) {
//     //     return currentUser.updatePassword(password)
//     //   }

useEffect(() => {
    const retrieveUser = async () => {
        const response = await api.get("/users");
        return response.data;
    };
    const getAllUsers = async () => {
        const allUsers = await retrieveUser();
        if (allUsers) 
            setAllUsers(allUsers);
            setLoading(false);
    };
    getAllUsers();
}, []);


      const value = {
        currentUser,
        login,
        signup,
        logout,
//         // resetPassword,
//         // updateEmail,
//         // updatePassword
       }

      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      )
}