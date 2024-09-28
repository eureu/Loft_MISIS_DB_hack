import BlueButton from "../Button/Button"
import { AddButton, ModeButton, NotesButton } from "../settingButtons/SettingButtons"
import Search from "./Search/Search"
import SvgLogo from "./SvgLogo/SvgLogo"
import SvgMenu from "./SvgLogo/SvgMenu"

const Header = ({setIsOpen}: {setIsOpen:Function}) => {

    return(
        <div className="absolute top-0 left-0 h-205 w-full bg-regal-blue
        pl-6 pt-4 pr-8 pb-1">
            <div className="flex flex-row gap-4 items-center justify-between">
                <span className="flex flex-row gap-5">
                <button 
                className="p-0 b-0 bg-transparent"
                onClick={() => setIsOpen((prev:boolean) => !prev)}>
                    <SvgMenu/>
                </button>
                <SvgLogo/>
                </span>

                <Search/>
                <div className="flex flex-row justify-center items-center gap-[20px]">
                    <AddButton/>
                    <NotesButton/>
                    <ModeButton/>
                    <BlueButton text={'Вход и регистрация'}/>
                </div>
            </div>
        </div>
    )
}

export default Header