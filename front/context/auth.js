import React, { createContext, useState, useEffect } from 'react';
import { createSession, logar } from "../service/api";

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveryUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if(recoveryUser && token){ setUser(recoveryUser); }

    setLoading(false);

  }, []);

  const login = async (id,senha) => {

    const res = await logar(id,senha);
    const response = {
        'id':res.data.id, 
        'senha':res.data.senha,
        };
    const loggedUser = {
        'id':res.data.id, 
        'senha':res.data.senha,
        };
    const token = response.token; 

    localStorage.setItem("user", loggedUser);
    localStorage.setItem("token", token);

    setUser(loggedUser);

    
    router.push("/logado")
  }
  

  const logout = () => {

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    setUser(null);

    navigate('/login');

  };

  const cadastrar = async (username, email, password) => {
      const res = await createSession(username, email, password);
      const response = res.status;
      
      if(response === 200){
        alert("Conta cadastrada com sucesso!");
      }else{
        alert("Error status: "+response)
      }
      
    };
  return(
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout, cadastrar}}>
      {children}  
    </AuthContext.Provider>
  );
};