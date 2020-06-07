import React, {useCallback, useState} from 'react'
import {Container} from './style'
import {useDropzone} from 'react-dropzone'
import {FiUpload} from 'react-icons/fi'
import UploadFilesInterface from '../../interfaces/UploadsFiles'

const Dropzone: React.FC<UploadFilesInterface> = ({onFileUploaded}) => {

    const [selectedFileURL, setSelectedFileURL] = useState('')

    const onDrop = useCallback((files: any) => {
        const file = files[0]

        const fileURL = URL.createObjectURL(file)

        setSelectedFileURL(fileURL)
        onFileUploaded(file)
    }, [onFileUploaded])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <Container>
            <div {...getRootProps()}>
                <input {...getInputProps()} accept='image/*'/>

                {selectedFileURL ? <img src={selectedFileURL} alt='point'/> : <p> <FiUpload /> Imagem do estabelecimento </p>}


            </div>
        </Container>
    )
}

export default Dropzone
