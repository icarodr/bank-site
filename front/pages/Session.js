export const createSession = (cpf) => {
    sessionStorage.setItem("session", cpf )
}

export const getSession = (cpf) => {
    return sessionStorage.getItem( "session")
}