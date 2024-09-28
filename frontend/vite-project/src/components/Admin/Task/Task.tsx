import { useReducer } from "react";

type TaskProps = {
    id: number,
    name: string,
    img_url: string,
    status: string,
}

const mockData = {
    name: "Андрей Артёмов",
    img_url: "../../../../public/anonimus.svg",
    status: "Ready 14:06 19.09.2024",
}
const TasksData = []

export const DefaultStroke = () => {
    return(
    <div className="flex flex-row h-[96px] w-[100%] min-w-[200px] border-b-[1.5px] border-grey-border justify-between items-center pr-[11%] text-m color-grey-text font-semibold">
        <div className="flex flex-row gap-[20px] items-center">
                <span>Пользователь</span>
        </div>
        <span className="ml-[310px]">Статус</span>
        <div className="buttonsDiv flex flex-row gap-[12px]">
          <span>Действие</span>
        </div>
    </div>
    )
}



const Task = ({data}) => {
    // const [state, dispatch] = useReducer(reducer, {status: "DEFAULT"});

    return(
    <div className="flex flex-row h-[96px] w-[100%] min-w-[200px] border-b-[1.5px] border-grey-border justify-between items-center hover:bg-neutral-200 p-[9px]">
        <div className="flex flex-row gap-[20px] items-center">
            <img className="rounded-[50%] h-[80px] w-[80px]" src={mockData.img_url}/>
            <div>
                <p className="font-bold text-xl">{mockData.name}</p>
                <span>{mockData.status}</span>
            </div>
        </div>
        <span className="text-emerald-500 font-bold">В ожидании</span>
        <div className="buttonsDiv flex flex-row gap-[12px]">
            <button className="bordered-[20px] bg-blue-600 text-white"
            onClick={() => { window.location.href = `https://t.me/Denchik_kirill_bot` }}
            >
                Ответить
            </button>
        </div>
    </div>
    )
}

export default Task;