import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import LightIcon from 'shared/assets/icons/light-theme.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, ToggleTheme } = useTheme()

    return (
        <Button 
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={ToggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    )
}