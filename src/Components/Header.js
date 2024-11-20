import '../css/Header.css';
import { Outlet } from "react-router-dom";

window.addEventListener('scroll', function() {
    const header = document.querySelector('.Header');

    if(window.scrollY < 50) {
        header.style.setProperty('--headerBackColor', 'transparent');
        header.style.setProperty('--fontColor', 'white');
    };

    if(window.scrollY >= 50) {
        header.style.setProperty('--headerBackColor', 'white');
        header.style.setProperty('--fontColor', 'rgb(247, 120, 47)');
    };
});

function Header() {
    return (
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
            <Outlet />
        </header>
    );
}

export default Header;