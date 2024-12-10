import '../../css/Header.css';
import { Outlet } from "react-router-dom";

function Header() {
    return (
        <div>
        <header className="Header">
            <ul className="menu">
            <h1>책꽃이</h1>
                <li>커뮤니티</li>
                <li>추천 책</li>
            </ul>

            <ul className="user_info">
                <li>로그인</li>
                <li>회원가입</li>
            </ul>
        </header>
        <Outlet />
        </div>
    );
    
}

export default Header;