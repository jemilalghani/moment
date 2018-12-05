import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import withContext from '../ContextApi/Context_HOC';
import './Cloudinary.css';
import placeholderImage from '../../Image/picture.svg';

const CLOUDINARY_UPLOAD_PRESET = 'gz0ctmrp';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dptjp5wvq/image/upload';

class Cloudinary extends Component {
    constructor(){
        super();
        this.state={
            uploadedFile: null,
            uploadedFileCloudinaryUrl:''
        }
    }
    onImageDrop(files){
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }
    handleImageUpload(file){
        let name = this.props.name
        console.log(name)
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        .field('file', file);
        upload.end((err,response)=>{
            if(err){
                console.error(err)
            } 
            if(response.body.secure_url !== ''){
                this.setState({uploadedFileCloudinaryUrl: response.body.secure_url})
                this.props.context.updateProfileInfo(`${name}`, response.body.secure_url);
            }
        })
    }
    render() {
        console.log(this.state.uploadedFileCloudinaryUrl)
        return (
            <form>
                <div className={this.state.uploadedFileCloudinaryUrl? "Cloudinary": "Cloudinary-hover"} style={{backgroundImage: this.state.uploadedFileCloudinaryUrl && `url(${this.state.uploadedFileCloudinaryUrl})`}}>
                    <Dropzone
                    multiple ={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}
                    className="Cloud"
                    >
                    {!this.state.uploadedFileCloudinaryUrl ?
                     <img className="Cloudinary-image" src={placeholderImage} alt=''/>
                    :
                    <p>
                        Edit
                    </p>}
                    </Dropzone>
                </div>
                {console.log(this.state.uploadedFileCloudinaryUrl)}
            </form>
        );
    }
}

export default withContext(Cloudinary);