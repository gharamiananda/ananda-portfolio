import React, { useState } from 'react'


import { FaPenFancy } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

interface FormValues {

    src: string;
    description: string;
    title: string;
    _id:string
  }
const UploadImage = ({it,updateProjectHandler}:{it:FormValues,updateProjectHandler:(projectInfo: any, fieldName: string, handleCLoseEdit: () => void, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setImagePreviewUrl?: React.Dispatch<React.SetStateAction<string>>) => Promise<void>}) => {

  const [imageFile, setImageFile] = useState<null|File>(null);
  const [imagLoading, setImagLoading] = useState(false)
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  if(it?.title==='Techwens Website ghjk'){
}
    return (
        <td className="px-6 py-4" key={it?._id} >

            {
                imagLoading ?
                    <div role="status" style={{
                        width: "200px"
                    }} className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>

                    </div> : <>

                        <div key={it?._id} className="flex items-center justify-center w-full" style={{
                            background: `url(${imagePreviewUrl || it?.src}) no-repeat`, width: "200px",

                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer " style={{ height: "100px" }}>
                                <div className="flex flex-col items-center justify-center ">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>

                                </div>
                                <input  key={it?._id}  id="dropzone-file" type="file" className="hidden" onChange={e => {
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
                                }} />
                            </label>




                        </div>


                    </>
            }



            {
                imageFile && <div className="flex items-center ">

                    <button onClick={() => {
                        updateProjectHandler({ imageFile }, 'src', () => setImageFile(null), setImagLoading,setImagePreviewUrl)

                    }}>

                        <TiTick size={30} className='cursor-pointer' />
                    </button>
                    <button type='button'>
                        <RxCross1 onClick={() => {
                            setImagePreviewUrl('')

                            setImageFile(null)
                        }} className='cursor-pointer' />
                    </button>
                </div>
            }
        </td>
    )
}

export default UploadImage