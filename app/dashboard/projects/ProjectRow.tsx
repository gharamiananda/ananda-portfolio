import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import { FaPenFancy } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { toast } from 'sonner';
import InputUpdate from './UpdateInput';
import UploadImage from './UploadImage';
import InputImg from './UploadImg';

interface FormValues {

  src: string;
  description: string;
  title: string;
  _id:string
}
const ProjectRow = ({ it,fetchProjectList }: { it: FormValues ,fetchProjectList: () => Promise<void>}) => {




  const updateProjectHandler = async (projectInfo:any,fieldName:string,handleCLoseEdit: () => void,setLoading:React.Dispatch<React.SetStateAction<boolean>>,setImagePreviewUrl?:React.Dispatch<React.SetStateAction<string>>) => {
    const token = localStorage.getItem('portfolio_ananda_token');
    setLoading(true)
    if (!token) {
      setLoading(false);
      return;
    }




    const sendDBObj:Record<string,unknown>={id:it?._id}


    if(projectInfo[fieldName] ){
      sendDBObj[fieldName]=projectInfo[fieldName];

    }
    if (projectInfo.imageFile) {
        const reader = new FileReader();
        reader.readAsDataURL(projectInfo.imageFile);
        reader.onloadend = () => {

            sendDBObj.imageBase64=reader.result;
            updateProjectApi(sendDBObj,setLoading,handleCLoseEdit,setImagePreviewUrl)
        }

      }else{
        updateProjectApi(sendDBObj,setLoading,handleCLoseEdit)

      }

  }


  const updateProjectApi=async(sendDBObj:Record<string,unknown>,setLoading:React.Dispatch<React.SetStateAction<boolean>>,handleCLoseEdit: () => void,setImagePreviewUrl?:React.Dispatch<React.SetStateAction<string>>)=>{
    const token = localStorage.getItem('portfolio_ananda_token');
   

    try {
      const response = await fetch('/api/projects', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'AccessToken': token as string
        },
        body: JSON.stringify(sendDBObj),
      });
  
      setLoading(false)
  
      if (!response.ok) {
        const errorData = await response.json();
        toast.warning(errorData.message || 'Enter value for password or email!')
  
        return;
      }
  
      const data = await response.json();
      fetchProjectList()
      handleCLoseEdit()
      
    } catch (error) {
      
    }finally{
      setLoading(false);
      if(setImagePreviewUrl){

        setImagePreviewUrl('')
      }

    }

   
  }



  return (

      <>



<td className="px-6 py-4">

         <InputUpdate key={it?.title}  it={it} fieldName={'title'} updateProjectHandler={updateProjectHandler} /> 
        </td>
        {/* <UploadImage it={it} updateProjectHandler={updateProjectHandler} /> */}

     

<td className="px-6 py-4">

<InputImg key={it?.title}  it={it} fieldName={'src'} updateProjectHandler={updateProjectHandler} /> 
</td>

        <td className="px-6 py-4">
       

        <InputUpdate it={it} fieldName={'description'} updateProjectHandler={updateProjectHandler} /> 

        </td>




      </>
    
  )
}

export default ProjectRow;

