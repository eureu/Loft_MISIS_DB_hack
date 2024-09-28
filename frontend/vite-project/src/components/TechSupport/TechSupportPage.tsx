import Header from "../Header/Header"
import SidebarNav from "../SidebarNav/SidebarNav"
import TechSupport from "./TechSupport"

const TechSupportPage = ({setIsOpen, isOpen}) => {
    return( 
         <div className="voreflow-x-hidden">
            <Header setIsOpen={setIsOpen} />
            <SidebarNav isOpen={isOpen} />
            <TechSupport isOpen={isOpen} />
      </div>)
}

export default TechSupportPage;