import type { ReactNode } from "react";

interface Props{
    children: ReactNode;
    alertOn: number;
    toggleAlert: () => void; 
}

const Button = ({children, alertOn, toggleAlert}: Props) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> { alertOn? '':toggleAlert();}}>
      {children}
    </button>
  )
}

export default Button;
