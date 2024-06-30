import { FormEvent, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { FaPenFancy } from "react-icons/fa";
import Image from "next/image";


interface FormValues {

    src: string;
    description: string;
    title: string;
    _id:string
  }

const InputImg=({ it ,updateProjectHandler,fieldName}: { it: FormValues ,updateProjectHandler:(projectInfo: any, fieldName: string, handleCLoseEdit: () => void, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>,fieldName:keyof FormValues  })=>{
    const [isEdit, setIsEdit] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleCLoseEdit=()=>{
        setImagePreviewUrl('')
        setIsEdit(false);}
    const [loading, setLoading] = useState(true);
  
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            const file = files[0];
            setImageFile(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
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
  
        updateProjectHandler({description,src,title,_id,imageFile},fieldName,handleCLoseEdit,setLoading)
  
  
        return false;
  
  
    }}>

      <div className="flex items-center gap-2">
      

    
      
<div className="flex items-center justify-center w-full">
  <label htmlFor="dropzone-file" className="flex flex-col text-center
   items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"   
  
  style={{
    width: '100%',
    height: '200px',
    backgroundImage: `url(${imagePreviewUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '20px',
}}
  >
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
      </svg>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} />
  </label>
</div>

      
      <div className="flex items-center ">
  
   {imagePreviewUrl &&    <button type='submit'>
  
        <TiTick  size={30} className='cursor-pointer'  />
        </button>}
      <button type='button'>
         <RxCross1  onClick={handleCLoseEdit} className='cursor-pointer' />
        </button> 
      </div>
    </div>
    </form>:
  
  <div className="flex gap-2">
  

<div style={{
    width:'200px'
  }}>

    

<Image
            src={it.src}
            alt={it.title}
            width={200}
            height={100}
            className="  w-full object-contain  mx-auto sm"
            />

            </div>
  <a onClick={e => setIsEdit(prev => !prev)} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-2 items-center">    <FaPenFancy />  </a>
  </div>
  
  
  
  
    
    )
  
  }

  export default InputImg;