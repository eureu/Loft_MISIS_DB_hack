import SvgLogo from "../../Header/SvgLogo/SvgLogo"
import SvgMenu from "../../Header/SvgLogo/SvgMenu"
import { SvgLogoAdmin } from "../Components";

const HeaderAdmin = () => {

    return(
        <div className="headerAdmin z-10 fixed top-0 left-0 h-[96px] w-full white
        pl-6 pt-4 pr-8 pb-1 bg-white">
            <div className="flex flex-row gap-4 items-center justify-between">
                <div className="flex flex-row align-center gap-[20px]">
                <button 
                className="p-0 b-0 bg-transparent">
                    <SvgLogoAdmin/>
                </button>
                <span className="font-semibold text-[32px]">Live conversions</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[12px]">
                    <button>
                        <img src="../../../../public/admin/message.svg"/>
                    </button>
                    <button>
                        <img src="../../../../public/admin/notification.svg"/>
                    </button> 
                    <button>
                        <img src="../../../../public/admin/Avatar.png"/>
                    </button>
                    {/* <AddButton/>
                    <NotesButton/>
                    <ModeButton/> */}
                </div>
            </div>
        </div>
    )
}

export default HeaderAdmin;