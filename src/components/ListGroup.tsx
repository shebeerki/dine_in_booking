import {useState} from 'react';
// import type { SetStateAction } from 'react';

interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props){
    const [selectedIndex, setSelectedIndex] = useState(1);
    // const handleClick = (event: MouseEvent)=> { console.log(event); };
    // const handleClick = (index: SetStateAction<number>) => {setSelectedIndex(index);}

    let itemElem;
    if(items.length === 0){
        itemElem = ""
    }else{
        itemElem = <ul className="w-1/4">
            {items.map((item, index) => (
                // <li onClick={(event)=> { console.log(`event: ${event} \n clicked item ${item} is on rank ${index+1}`)}} key={item} className="rounded-3xl transition duration-200 ease-in-out hover:bg-indigo-500 hover:border-black-500 hover:text-yellow-500   border-4 border-green-500 hover:border-black-500 p-3 text-gray-950 bg-white">{item}</li>
                // <li onClick={() => {handleClick(index);}} key={item} className={selectedIndex === index ?'text-red-500': 'text-green-500' }>{item}</li>
                <li onClick={()=>{setSelectedIndex(index); onSelectItem(item);}} key={item} className={selectedIndex === index ?'text-red-500': 'text-green-500' }>{item}</li>
            ))} 
        </ul>
    
    }
    return (
        <>
            <h1>{heading}</h1>
            {itemElem}

        </>
    );
}

export default ListGroup;