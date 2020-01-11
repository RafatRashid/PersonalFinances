import {toast} from "react-toastify";

export const handleErrorMessages = (err) => {
  if(err.response.data) {
    toast.error(err.response.data.message);
  }
  else if (err.messsage) {
    toast.error(err.messsage);
  }
  else {
    toast.error("Some problem occurred :(");
  }
};

export const handleSuccessMessages = (response) => {
  let validResponse = response != null && response.data != null && response.data.message != null && response.data.message != "";
  let successMessage = validResponse ? response.data.message : "Saved";
  
  toast.success(successMessage);
}