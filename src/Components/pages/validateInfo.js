export default function validateInfo(values){
    let errors={}

    if(!values.username.trim()){
        errors.username = 'Username required'
    }

    if(!values.password){
        errors.password = 'Password required'} 
    // else if (values.password.length<6){
    //     errors.password = 'Password needs to be 6 characters or more'
    // }

    // if(!values.email){
    //     errors.email= 'Email required'
    // } else if(!/\S+@\S+\.\S+/.test(values.email)){
    //     errors.email='Email address is invalid'
    // }

    return errors;
}