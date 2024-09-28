import { DarkThemeToggle, Flowbite, Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import './sidebarNav.css'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { setPage } from '../store/store.tsx'
import { CatalogIcon, CompititionIcon, FilmsIcon, ForBloggersIcon, HistoryIcon, MenuIcon, MyIcon, PopularIcon, ShortsIcon, SubscribesIcon, TopIcon, TranslationIcon, tvIcon, vefIcon } from "../Icons/Icons.tsx";

const normalCustomTheme = {
  "root": {
    "base": "h-full",
    "collapsed": {
      "on": "w-16",
      "off": "w-305"
    },
    "inner": "h-full scrollbar-thin scrollbar-thumb-scrollbar scrollbar-track-transparent scrollbar-track-rounded-full overflow-y-scroll overflow-x-hidden bg-regal-blue px-3 py-2 dark:bg-regal-blue"
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
    "base": "flex items-center justify-center rounded-lg px-2 py-0 text-base font-normal text-gray-900 hover:bg-sidebar-item-hover dark:text-white dark:hover:bg-sidebar-item-hover pl-3 h-[40px]",
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
    "inner": "h-full overflow-y-hidden overflow-x-hidden bg-regal-blue px-0 py-0 dark:bg-regal-blue"
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
    "base": "flex flex-col items-center justify-center rounded-tr-lg rounded-br-lg p-0 text-base font-normal text-gray-900 hover:bg-sidebar-item-hover dark:text-white dark:hover:bg-sidebar-item-hover w-20 h-20",
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


export default function SidebarNav({ isOpen }) {
  const page = useSelector((state) => state.page.page);
  const dispatch = useDispatch();
  // () => dispatch(setPage(1))


  return (<>
    {isOpen &&
      <div className="absolute left-0 w-305 top-[72px] h-[calc(100vh_-_72px)] bg-regal-blue">
        <Flowbite theme={{ theme: {sidebar: normalCustomTheme} }}>
          <div className="h-[calc(100vh_-_72px)]">
            <Sidebar aria-label="Sidebar with content separator example">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={MenuIcon}>
                    Главная
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={ForBloggersIcon}>
                    RUTUBE для блогеров
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={CatalogIcon}>
                    Каталог
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={vefIcon}>
                    ВЭФ-2024
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={PopularIcon}>
                    Популярное
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={TopIcon}>
                    В топе
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={ShortsIcon}>
                    Shorts
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={tvIcon}>
                    ТВ онлайн
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={TranslationIcon}>
                    Трансляции
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={SubscribesIcon}>
                    Подписки
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={MyIcon}>
                    Моё
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={FilmsIcon}>
                    Фильмы
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={CompititionIcon}>
                    Классный конкурс
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiChartPie}>
                    Вопросы и ответы
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiViewBoards}>
                    Сообщить о проблеме
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={BiBuoy}>
                    Написать в поддержку
                  </Sidebar.Item>
                  <Sidebar.Item href="#" className="h-auto">
                    <p className="info">О RUTUBE</p>
                    <p className="info"> Проект создан в рамках хакатона</p>
                    <p className="info"> ИНОВАЦИОНЫЕ ТЕХНОЛОГИИ</p>
                    <p className="info"> Команда</p>
                    <p className="info">Институт Ниту Мисис</p>
                    <p className="info">© 2024, RUTUBE</p>
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
          </Sidebar>
          </div>
        </Flowbite>
      </div>}
    {!isOpen &&
      <div className="absolute left-0 w-[72px] top-[72px] h-[calc(100vh_-_72px)] bg-regal-blue">
         <Flowbite theme={{ theme: {sidebar: customTheme} }}>
          <div className="overflow-y-hidden h-[calc(100vh_-_72px)]">
            <Sidebar aria-label="Sidebar with content separator example" className="w-20">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={MenuIcon} className="sidebar-item">
                    Главная
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={ForBloggersIcon} className="sidebar-item">
                    RUTUBE для блогеров
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={CatalogIcon} className="sidebar-item">
                    Каталог
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={vefIcon} className="sidebar-item">
                    ВЭФ-2024
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={PopularIcon} className="sidebar-item">
                    Популярное
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={TopIcon} className="sidebar-item">
                    В топе
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={ShortsIcon} className="sidebar-item">
                    Shorts
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={tvIcon} className="sidebar-item">
                    ТВ онлайн
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={TranslationIcon} className="sidebar-item">
                    Трансляции
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={SubscribesIcon} className="sidebar-item">
                    Подписки
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={MyIcon} className="sidebar-item">
                    Моё
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={FilmsIcon} className="sidebar-item">
                    Фильмы
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={CompititionIcon} className="sidebar-item">
                    Классный конкурс
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={FilmsIcon} className="sidebar-item">
                    Смортеть позже
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HistoryIcon} className="sidebar-item">
                    История просмотра
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiChartPie} className="sidebar-item">
                    Вопросы и ответы
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiViewBoards} className="sidebar-item">
                    Сообщить о проблеме
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={BiBuoy} className="sidebar-item">
                    Написать в поддержку
                  </Sidebar.Item>
                  <Sidebar.Item href="#">
                    <p className="info">О RUTUBE</p>
                    <p className="info"> Проект создан в рамках хакатона</p>
                    <p className="info"> ИНОВАЦИОНЫЕ ТЕХНОЛОГИИ</p>
                    <p className="info"> Команда</p>
                    <p className="info">Институт Мисис и ВШЭ</p>
                    <p className="info">© 2024, RUTUBE</p>
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