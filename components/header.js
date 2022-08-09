import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button'
import Animation_circle from './home/animation_circle';

export default function Header() {
    return (
        <> < header className = "text-base bg-white p-0 mt-0 fixed w-full z-10 top-0" >
            
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav
                className="text-base md:ml-auto flex flex-wrap items-center justify-center">
                <Link href="/">
                    <a className="header">홈</a>
                </Link>
                <Link href="/projects">
                    <a className="header">프로젝트</a>
                </Link>
                <Link href="https://www.google.com">
                    <a className="header">연락하기</a>
                </Link>           
                <DarkModeToggleButton/></nav>
        </div>
    </header>

</>

    )

}