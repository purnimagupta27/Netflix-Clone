export const validateInput = (email: string, password : string) => {
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test( password )

    if(!isValidEmail){
        return "This email format is not valid"
    }
    if(!isValidPassword){
        return "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
    }
    return null
}