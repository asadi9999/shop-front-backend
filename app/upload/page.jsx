'use client'
import { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadProduct = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('company', company);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData);
      console.log(response.data.message);
      setName('');
      setCompany('');
      setFile(null);
    } catch (error) {
      console.error('Failed to upload product:', error);
    }
  };

  return (
    <>
      <div className=' grid grid-cols-4'>
        <div className=" col-start-2 col-span-2">
          <div className=" flex flex-col gap-8">
            <h1>Upload New Product</h1>
            <input className=' h-10 bg-zinc-500 text-white px-3 py-2 rounded-md outline-none' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input className=' h-10 bg-zinc-500 text-white px-3 py-2 rounded-md outline-none' type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
            <input className=' h-10 bg-zinc-500 text-white px-3 py-2 rounded-md outline-none' type="file" onChange={handleFileChange} />
            <button onClick={uploadProduct} className=' bg-orange-400 px-3 py-2 hover:bg-orange-500 transition-all duration-300 rounded'>Upload Product</button>
          </div>
        </div>
      </div>
    </>

  );
}

export default Upload;
