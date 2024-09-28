import { Button, Flowbite, Tooltip } from "flowbite-react";

const ButtonStyle = {
    button: {
        inner: {
            base: 'px-[5px] py-[5px] bg-yellow',
        },
        size: 'lg',
    }
}


export function ModeButton() {
  return (
    <div className="flex gap-2">
        <Flowbite theme={{theme: ButtonStyle}}>
        <Tooltip content="Переключить на светлую тему" style="dark" arrow={false}>
            <Button className="bg-transparent border-1 border-solid border-dark-blue-outline rounded-full hover:border-1 hover:border-solid hover:border-dark-blue-outline"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path fill="#E1E5EA" fill-rule="evenodd" 
                    d="M12 2c.399 0 .722.323.722.722v1.03a.722.722 0 1 1-1.444 0v-1.03c0-.399.323-.722.722-.722ZM4.929 4.929a.722.722 0 0 1 1.02 0l.73.729a.722.722 0 1 1-1.021 1.02l-.73-.729a.722.722 0 0 1 0-1.02Zm14.142 0a.722.722 0 0 1 0 1.02l-.729.73a.722.722 0 1 1-1.02-1.021l.729-.73a.722.722 0 0 1 1.02 0ZM12 8.598a3.402 3.402 0 1 0 0 6.804 3.402 3.402 0 0 0 0-6.804Zm-3.426-.024a4.845 4.845 0 1 1 6.852 6.852 4.845 4.845 0 0 1-6.852-6.852ZM2 12c0-.399.323-.722.722-.722h1.03a.722.722 0 0 1 0 1.444h-1.03A.722.722 0 0 1 2 12Zm17.526 0c0-.399.323-.722.721-.722h1.031a.722.722 0 0 1 0 1.444h-1.03a.722.722 0 0 1-.722-.722Zm-2.204 5.322a.722.722 0 0 1 1.02 0l.73.729a.722.722 0 0 1-1.021 1.02l-.73-.729a.722.722 0 0 1 0-1.02Zm-10.644 0a.722.722 0 0 1 0 1.02l-.729.73a.722.722 0 0 1-1.02-1.021l.729-.73a.722.722 0 0 1 1.02 0ZM12 19.526c.399 0 .722.323.722.721v1.031a.722.722 0 1 1-1.444 0v-1.03c0-.4.323-.722.722-.722Z"
                    clip-rule="evenodd"/></svg>
                </Button>
        </Tooltip>
      </Flowbite>
      
    </div>
  );
}

export function NotesButton() {
    return (
      <div className="flex gap-2">
        <Flowbite theme={{theme: ButtonStyle}}>
        <Tooltip content="Переключить на светлую тему" style="dark" arrow={false}>
          <Button className="bg-transparent border-1 border-solid border-dark-blue-outline rounded-full hover:border-1 hover:border-solid hover:border-dark-blue-outline "> 
              <svg  className="rutube-icon rutube-icon--size-large rutube-icon--IconBell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
              fill="none" viewBox="0 0 24 24">
                <path fill="#E1E5EA" fill-rule="evenodd" 
                d="M10.32 4.084A2.36 2.36 0 0 1 12 3.378c.632 0 1.237.255 1.68.706.417.423.66.985.69 1.576a5.9 5.9 0 0 1 2.428 2.016 6 6 0 0 1 1.074 3.435v2.807a1.2 1.2 0 0 0 .342.841l1.23 1.249A.622.622 0 0 1 19 17.067h-3.753v.266c0 .87-.34 1.705-.947 2.323a3.23 3.23 0 0 1-2.3.966 3.23 3.23 0 0 1-2.3-.966 3.3 3.3 0 0 1-.947-2.323v-.266H5a.622.622 0 0 1-.443-1.06l1.229-1.248c.218-.221.342-.524.342-.84v-2.808a5.96 5.96 0 0 1 3.503-5.45 2.4 2.4 0 0 1 .688-1.577Zm-.323 12.983v.266c0 .546.087.784.463 1.167m-.463-1.433H14c0 .545-.21 1.333-.587 1.715a1.98 1.98 0 0 1-1.413.596c-.528 0-1.163-.496-1.54-.878M12 4.622c-.296 0-.582.12-.794.335a1.17 1.17 0 0 0-.334.82v.304a.62.62 0 0 1-.412.585c-1.794.645-3.088 2.39-3.088 4.445v2.808c0 .64-.25 1.257-.7 1.713l-.186.19h11.028l-.187-.19a2.43 2.43 0 0 1-.7-1.714v-2.807a4.77 4.77 0 0 0-.851-2.725 4.64 4.64 0 0 0-2.236-1.72.62.62 0 0 1-.412-.585v-.303c0-.31-.121-.605-.334-.82A1.1 1.1 0 0 0 12 4.621Z" 
              clip-rule="evenodd"></path>
              </svg>
              </Button>
        </Tooltip>
        </Flowbite>
        
      </div>
    );
  }

  export function AddButton() {
    return (
      <div className="flex gap-2">
        <Flowbite theme={{theme: ButtonStyle}}>
        <Tooltip content="Переключить на светлую тему" style="dark" arrow={false}>
          <Button className="bg-transparent border-1 border-solid border-dark-blue-outline rounded-full hover:border-1 hover:border-solid hover:border-dark-blue-outline-"> 
            <svg className="rutube-icon rutube-icon--size-large rutube-icon--IconAdd" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                fill="none" viewBox="0 0 24 24">
                    <path fill="#E1E5EA" 
                    d="M11.38 14a.62.62 0 0 0 1.24 0zm1.24-4a.62.62 0 0 0-1.24 0zM10 11.38a.62.62 0 0 0 0 1.24zm4 1.24a.62.62 0 0 0 0-1.24zm-4.4 8h4.8v-1.24H9.6zm4.8 0c2.061 0 3.665-.408 4.738-1.482 1.074-1.073 1.482-2.677 1.482-4.738h-1.24c0 1.939-.392 3.135-1.118 3.862-.727.726-1.923 1.118-3.862 1.118zm6.22-6.22V9.6h-1.24v4.8zm0-4.8c0-2.061-.408-3.665-1.482-4.738C18.065 3.788 16.461 3.38 14.4 3.38v1.24c1.939 0 3.135.392 3.862 1.118.726.727 1.118 1.923 1.118 3.862zM14.4 3.38H9.6v1.24h4.8zm-4.8 0c-2.061 0-3.665.408-4.738 1.482C3.788 5.935 3.38 7.539 3.38 9.6h1.24c0-1.939.392-3.135 1.118-3.862C6.465 5.012 7.661 4.62 9.6 4.62zM3.38 9.6v4.8h1.24V9.6zm0 4.8c0 2.061.408 3.665 1.482 4.738C5.935 20.212 7.539 20.62 9.6 20.62v-1.24c-1.939 0-3.135-.392-3.862-1.118-.726-.727-1.118-1.923-1.118-3.862zm9.24-.4v-4h-1.24v4zM10 12.62h4v-1.24h-4z">
                    </path></svg>
              </Button>
        </Tooltip>
        </Flowbite>
        
      </div>
    );
  }