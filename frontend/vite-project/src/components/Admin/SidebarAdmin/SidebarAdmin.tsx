import { DarkThemeToggle, Flowbite, Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import './sidebar.module.css'
import { CatalogIcon, CompititionIcon, FilmsIcon, ForBloggersIcon, HistoryIcon, MenuIcon, MyIcon, PopularIcon, ShortsIcon, SubscribesIcon, TopIcon, TranslationIcon, tvIcon, vefIcon } from "../Icons/Icons.tsx";
import { ArrowAdminIcon, DiagramAdminIcon, DiamondAdminIcon, HelpAdminIcon, HomeAdminIcon, ProfileAdminIcon, StoreAdminIcon, SunAdminIcon } from "../../Icons/Icons.tsx";

const normalCustomTheme = {
  "root": {
    "base": "h-full",
    "collapsed": {
      "on": "w-16",
      "off": "w-305"
    },
    "inner": "h-full scrollbar-thin scrollbar-thumb-scrollbar scrollbar-track-transparent scrollbar-track-rounded-full overflow-y-scroll overflow-x-hidden white px-3 py-2 dark:white"
  },
  "collapse": {
    "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    "icon": {
      "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      "open": {
        "off": "",
        "on": "text-gray-900"
      }
    },
    "label": {
      "base": "ml-3 flex-1 whitespace-nowrap text-left",
      "icon": {
        "base": "h-6 w-6 transition delay-0 ease-in-out",
        "open": {
          "on": "rotate-180",
          "off": ""
        }
      }
    },
    "list": "space-y-2 py-2"
  },
  "cta": {
    "base": "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
    "color": {
      "blue": "bg-cyan-50 dark:bg-cyan-900",
      "dark": "bg-dark-50 dark:bg-dark-900",
      "failure": "bg-red-50 dark:bg-red-900",
      "gray": "bg-alternative-50 dark:bg-alternative-900",
      "green": "bg-green-50 dark:bg-green-900",
      "light": "bg-light-50 dark:bg-light-900",
      "red": "bg-red-50 dark:bg-red-900",
      "purple": "bg-purple-50 dark:bg-purple-900",
      "success": "bg-green-50 dark:bg-green-900",
      "yellow": "bg-yellow-50 dark:bg-yellow-900",
      "warning": "bg-yellow-50 dark:bg-yellow-900"
    }
  },
  "item": {
    "base": "flex items-center justify-center rounded-lg px-2 py-0 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hoverbg-gray-100 pl-3 h-[40px]",
    "active": "bg-gray-100 dark:bg-gray-700",
    "collapsed": {
      "insideCollapse": "group w-full pl-8 transition duration-75",
      "noIcon": "font-bold"
    },
    "content": {
      "base": "flex-1 whitespace-nowrap px-3 pl-6 text-sm"
    },
    "icon": {
      "base": "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      "active": "text-gray-700 dark:text-gray-100"
    },
    "label": "",
    "listItem": ""
  },
  "items": {
    "base": ""
  },
  "itemGroup": {
    "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  "logo": {
    "base": "mb-5 flex items-center pl-2.5",
    "collapsed": {
      "on": "hidden",
      "off": "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    "img": "mr-3 h-6 sm:h-7"
  }
}


const customTheme = {
  "root": {
    "base": "h-full",
    "collapsed": {
      "on": "w-16",
      "off": "w-64"
    },
    "inner": "h-full overflow-y-hidden  white px-0 py-0 dark:white"
  },
  "collapse": {
    "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    "icon": {
      "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      "open": {
        "off": "",
        "on": "text-gray-900"
      }
    },
    "label": {
      "base": "ml-3 flex-1 whitespace-nowrap text-left",
      "icon": {
        "base": "h-6 w-6 transition delay-0 ease-in-out",
        "open": {
          "on": "rotate-180",
          "off": ""
        }
      }
    },
    "list": "space-y-2 py-2"
  },
  "cta": {
    "base": "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
    "color": {
      "blue": "bg-cyan-50 dark:bg-cyan-900",
      "dark": "bg-dark-50 dark:bg-dark-900",
      "failure": "bg-red-50 dark:bg-red-900",
      "gray": "bg-alternative-50 dark:bg-alternative-900",
      "green": "bg-green-50 dark:bg-green-900",
      "light": "bg-light-50 dark:bg-light-900",
      "red": "bg-red-50 dark:bg-red-900",
      "purple": "bg-purple-50 dark:bg-purple-900",
      "success": "bg-green-50 dark:bg-green-900",
      "yellow": "bg-yellow-50 dark:bg-yellow-900",
      "warning": "bg-yellow-50 dark:bg-yellow-900"
    }
  },
  "item": {
    "base": "flex flex-col items-center justify-center rounded-tr-lg rounded-br-lg p-0 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-100 w-[96px] h-[48px]",
    "active": "bg-gray-100 dark:bg-gray-700",
    "collapsed": {
      "insideCollapse": "group w-8 pl-8 transition duration-75",
      "noIcon": "font-bold"
    },
    "content": {
      "base": "whitespace-wrap px-3 text-center sidebar-item"
    },
    "icon": {
      "base": "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      "active": "text-gray-700 dark:text-gray-100"
    },
    "label": "",
    "listItem": ""
  },
  "items": {
    "base": ""
  },
  "itemGroup": {
    "base": "mt-4 space-y-2 pt-[calc(100vh_-_518px)] first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  "logo": {
    "base": "mb-5 flex items-center pl-2.5",
    "collapsed": {
      "on": "hidden",
      "off": "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    "img": "mr-3 h-6 sm:h-7"
  }
}


const SidebarSupport = () => {

  return (<>
    {true &&
      <div className="fixed left-0 w-[96px] top-[96px] h-[calc(100vh_-_72px)] white dark:white">
         <Flowbite theme={{ theme: {sidebar: customTheme} }}>
          <div className="overflow-y-hidden h-[calc(100vh_-_72px)]">
            <Sidebar aria-label="Sidebar with content separator example" className="w-[96px]">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HomeAdminIcon} className="sidebar-item">ыы
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={DiamondAdminIcon} className="sidebar-item">
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={ProfileAdminIcon} className="sidebar-item">
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={StoreAdminIcon} className="sidebar-item">
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={DiagramAdminIcon} className="sidebar-item">
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={ArrowAdminIcon} className="sidebar-item">
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HelpAdminIcon} className="sidebar-item">
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={SunAdminIcon} className="sidebar-item">
                </Sidebar.Item>
               
                </Sidebar.ItemGroup>

              </Sidebar.Items>
          </Sidebar>
          </div>
        </Flowbite>
      </div>
    }
  </>
  );
}
export default SidebarSupport;