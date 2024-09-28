
const BlueButton = ({text}: {text:string}) =>{
    return (
    <button
    className="bg-blue-button py-3 px-4 text-white rounded-md text-xs hover:bg-hover-blue-button h-10"> 
    {text}
    </button>)
}

export default BlueButton;