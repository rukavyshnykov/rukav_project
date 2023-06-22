import '../styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { MainPageAsync } from '../pages/MainPage/MainPage.async'
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async'
import { Suspense } from 'react'
import { useTheme } from '../theme/useTheme'
import { classNames } from '../helpers/classNames/classNames'

export const App = () => {
    const {theme, ToggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme, 'red', 'blue'])}>
            <button onClick={ToggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
