import { CommonService } from "../_services/common.service";

export class UploadAdapter {
   
    ProfileImageUrl: any;
    constructor(private service:CommonService) {
     
    }
  
    // public upload() {
    //   //"data:image/png;base64,"+ btoa(binaryString) 
    //   return this.readThis(this.loader.file);
    // }
  
    upload(fileData) {
        let formdata = new FormData()
        formdata.append('media', fileData);
        this.service.postApi(`upload/media/`,formdata).subscribe((res: any) => {
          console.log("Imager api called",res);
          if ([200,201].includes(res.code)) {
            // this.profileImageId = res.data[0].id
             this.ProfileImageUrl = res.data[0].media_file_url
          }
        });
        return this.ProfileImageUrl
      }
      readThis(event) {
        if (event.target.files && event.target.files[0]) {
          var type = event.target.files[0].type;
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
            let fileData = event.target.files[0];
            this.upload(fileData)
            reader.onload = (event) => { // called once readAsDataURL is completed
            //   this.ProfileImageUrl = event.target.result;
            }
          }
        }
      }



    // readThis(file: File): Promise<any> {
    //   console.log(file,'File called')
    //   let imagePromise: Promise<any> = new Promise((resolve, reject) => {
    //     var myReader: FileReader = new FileReader();
    //     myReader.onloadend = (e) => {
    //       let image = myReader.result;
    //       console.log('Line 20 called onload', image);
    //       return { default: "data:image/png;base64," + image };
         
    //     }
    //     myReader.readAsDataURL(file);
    //   });
    //   return imagePromise;
    // }
  




  }