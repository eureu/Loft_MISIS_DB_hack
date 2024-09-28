import Task from "./Task";

const mockData = [{
    name: "Андрей Артёмов",
    img_url: "",
    status: "Ready 14:06 19.09.2024",
},
{
    name: "Андрей Артёмов",
    img_url: "",
    status: "Ready 14:06 19.09.2024",
},{
    name: "Андрей Артёмов",
    img_url: "",
    status: "Ready 14:06 19.09.2024",
},{
    name: "Андрей Артёмов",
    img_url: "",
    status: "Ready 14:06 19.09.2024",
},{
    name: "Андрей Артёмов",
    img_url: "",
    status: "Ready 14:06 19.09.2024",
},{
    name: "Андрей Артёмов",
    img_url: "",
    status: "Ready 14:06 19.09.2024",
},{
    name: "Андрей Артёмов",
    img_url: "",
    status: "Ready 14:06 19.09.2024",
},{
    name: "Андрей Артёмов",
    img_url: "",
    status: "Ready 14:06 19.09.2024",
},{
    name: "Андрей Артёмов",
    img_url: "",
    status: "Ready 14:06 19.09.2024",
}]


const TasksList = ({DataTaskList}) => {

    return(<div className="flex flex-col gap-[0px]">
        {mockData.map((id, item)=> 
        <Task data={item}/> )}

    </div>
    )
}

export default TasksList;