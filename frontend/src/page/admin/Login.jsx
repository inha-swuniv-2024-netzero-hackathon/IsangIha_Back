import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../../assets/css/admin.css'

function Login() {
    return (
        <section className="full-screen center-sender">
            <div className="login-box center-sender direction-column">
                <input type="text" className="login-input" placeholder="id" />
                <input type="password" className="login-input" placeholder="pw" />
                <Link to="/admin" className="login-button center-sender">로그인</Link>
            </div>
        </section>
    )
}

export default Login