import 'app/styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import 'shared/config/i18n/i18n'



export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme, 'red', 'blue'])}>
            <Suspense fallback=''>
                <Navbar className='' />
                <div className='content-page'>
                    <Sidebar className='' />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
