import { LoginAPI } from '../utils/fetch';
function Login() {

    let isUserLoggedIn = false;
    try {
        isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
        if (isUserLoggedIn && isUserLoggedIn.id) {
            window.location.href = 'http://localhost:3000/'
        }
    } catch (error) {
    }

    const login = () => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        console.log('username: ', username)
        console.log('password: ', password)
        LoginAPI(username, password)
            .then((result) => {
                return result.json()
            })
            .then((result) => {
                console.log('result: ', result)
                console.log('localStorage: ', localStorage)
                if (result.success) {
                    //go to dashboard / home
                    localStorage.setItem('user', JSON.stringify(result.userData))
                    window.location.href = 'http://localhost:3000/'
                } else {
                    // alert user that credentials is invalid
                }
            })
            .catch(error => {
                console.log('error: ', error)
            })
    }
    return (
        !isUserLoggedIn ?
            <>
                <div class="wrapper">
                    <h1>Welcome!</h1>
                    <p>Please Login now</p> <br />
                    <form>
                        <input style={{ color: 'red' }} type="text" id="username" placeholder="username" />
                        <br />
                        <input style={{ color: 'red' }} type="password" id="password" placeholder="password" />
                        <p class="recover">
                            <a href=" ">Recover Password</a>
                        </p>
                        <closeform></closeform></form>
                    <button onClick={login}>Login</button>

                    <p class="or">
                        ----- or continue with -----
                    </p>
                    <div class="icons">
                        <i class="fab fa-google"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-facebook"></i>
                    </div>
                    <div class="not-member">
                        Not a member? <a href=" ">Register Now</a>
                    </div>
                </div>
            </>
            :
            <></>
    );
}

export default Login;