
const TechSupport = ({isOpen}) => {


    return (
        <div className={isOpen? 'absolute bg-dark-blue-main dark:bg-dark-blue-main top-[72px] left-64 overflow-y-auto w-[calc(100%_-_261px)] h-[calc(100vh_-_72px)] left-[261px]':
        'absolute bg-dark-blue-main dark:bg-dark-blue-main top-[72px] left-[72px] overflow-y-auto w-[calc(100%_-_72px)] h-[calc(100vh_-_72px)]'
        }>
            Hello!
        </div>
        )
}

export default TechSupport;