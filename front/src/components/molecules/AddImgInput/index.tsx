import React, {useState} from "react";
import Figure from "@atoms/Figure";


function AddImgInput({setImgFiles}: {setImgFiles: React.Dispatch<React.SetStateAction<File[]>> }){
  const [imgUrls,setImgUrls] = useState<string[]>([])
  const onSaveFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFiles = Array.prototype.slice.call(e.target.files);
    uploadFiles.forEach((uploadFile) => {
      const imgUrl = URL.createObjectURL(uploadFile)
      setImgUrls(urls =>[...urls,imgUrl])
      setImgFiles(imgs => [...imgs,uploadFile])
    });
  };
  return (
    <div>
      {imgUrls.map((img:string)=><Figure key={img} alt={img} src={img} width="50px" height="50px"/>)}
      <input type="file" multiple onChange={onSaveFiles} />
    </div>
  );
}

export default AddImgInput
