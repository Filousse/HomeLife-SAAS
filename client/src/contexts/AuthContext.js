import React, { useContext, useState, useEffect } from "react";
import api from "../api/db";

const AuthContext = React.createContext()

export function useAuth() {
return useContext(AuthContext)
}

export function AuthProvider({ children }) {
       const [allUsers, setAllUsers] = useState()
       const [currentUser, setCurrentUser] = useState()
       const [loading, setLoading] = useState(true)
       const [errorAuthContext, setErrorAuthContext ] = useState("")

      function signup( name, surname, adminName, photoProfil, group, fonction, mail, password) {
          api.post( '/users' , 
            {
              name: name,
              surname: surname,
              adminName: adminName,
              photoProfil: photoProfil,
              group: group,
              fonction: fonction,
              mail: mail,
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
            setErrorAuthContext("")
            allUsers.map((user) => {
                if (user.mail === email && user.password === password) {
                    setCurrentUser(user);
                } 
                else {
                  setErrorAuthContext("Erreur d'authentification!");
                }
            })
        }

        function logout() {
                setCurrentUser("");
                setErrorAuthContext("")
        }

      const updateProfil = ( photo, mail, password, id) => {
         api.put( '/users/'+id , 
            {
              name: currentUser.name,
              surname: currentUser.surname,
              photoRef: photo,
              group: currentUser.group,
              fonction: currentUser.fonction,
              mail: mail,
              password: password,
            }
         )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }); 
      }

      function updatePassword(mail) {
        allUsers.map((user) => {
          if (user.mail === mail) {
            console.log("user.mail => ", user.mail)
          } else {
            console.log("No existe in db !")
          }
      })
      }

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
        updatePassword,
        updateProfil,
        errorAuthContext
       }

      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      )
}