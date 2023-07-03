import 'app/styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'


export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme, 'red', 'blue'])}>
            <Navbar className=''/>
            <AppRouter />
        </div>
    )
}
