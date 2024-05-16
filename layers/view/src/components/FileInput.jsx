import React from 'react'
//import axios from 'axios'
import { MdOutlineFileUpload } from "react-icons/md";

import './styles/FileInput.css'

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
    }

    return (
        <>
            <div className="file-card">

                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler} />
                    <button>
                        <i>
                            <MdOutlineFileUpload size={30} />
                        </i>
                        Subir Imagen
                    </button>
                </div>

                <p className="main">Archivos Válidos</p>
                <p className="info">JPG, PNG</p>

            </div>
        </>
    )
}

export default FileUpload