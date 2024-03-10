import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class ToasterService {
  private option: ToastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  public info = (toastContent: string) => {
    toast.info(toastContent, this.option);
  };
  public success = (toastContent: string) => {
    toast.success(toastContent, this.option);
  };

  public warning = (toastContent: string) => {
    toast.warn(toastContent, this.option);
  };
  public error = (toastContent: string) => {
    toast.error(toastContent, this.option);
  };
  public default = (toastContent: string) => {
    toast(toastContent, this.option);
  };
}
export default ToasterService;
