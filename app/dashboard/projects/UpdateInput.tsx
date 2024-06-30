import { FormEvent, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { FaPenFancy } from "react-icons/fa";


interface FormValues {

    src: string;
    description: string;
    title: string;
    _id:string
  }

const InputUpdate=({ it ,updateProjectHandler,fieldName}: { it: FormValues ,updateProjectHandler:(projectInfo: any, fieldName: string, handleCLoseEdit: () => void, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>,fieldName:keyof FormValues  })=>{
    const [isEdit, setIsEdit] = useState(false);
  
    const handleCLoseEdit=()=>setIsEdit(false);
    const [loading, setLoading] = useState(true);
  
  
    return (
  
  
      isEdit ? 
      <form className="max-w-sm mx-auto" onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const {description,src,title,_id}: FormValues = {
            description: formData.get('description') as string,
            src: formData.get('src') as string,
            title: formData.get('title') as string,
            _id: formData.get('_id') as string,
  
  
        };
  
        updateProjectHandler({description,src,title,_id},fieldName,handleCLoseEdit,setLoading)
  
  
        return false;
  
  
    }}>
      <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </div>
        <input defaultValue={it[fieldName]} name={fieldName} type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
      </div>
      <div className="flex items-center ">
  
      <button type='submit'>
  
        <TiTick  size={30} className='cursor-pointer'  />
        </button>
      <button type='button'>
         <RxCross1  onClick={() => setIsEdit(prev => !prev)} className='cursor-pointer' />
        </button> 
      </div>
    </div>
    </form>:
  
      <a onClick={e => setIsEdit(prev => !prev)} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-2 items-center">{it[fieldName]}     <FaPenFancy />  </a>
  
  
  
    
    )
  
  }

  export default InputUpdate;