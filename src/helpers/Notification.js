import Noty from 'noty'

class Notification{

    success(msg){
    new Noty({
      type: 'success',
      layout: 'topRight',
      text: msg ?? 'Successfully Done!',
      timeout: 1000,
         }).show();
    }


    alert(){
        new Noty({
      type: 'alert',
      layout: 'topRight',
      text: 'Are you Sure?',
      timeout: 1000,
         }).show();
    }



    error(message,duration){
        new Noty({
      type: 'error',
      layout: 'topRight',
      text: message ?? 'Something Went Wrong ! ',
      timeout: duration ?? 1000,
         }).show();
    }


   warning(msg){
        new Noty({
      type: 'warning',
      layout: 'topRight',
      text: msg ?? 'Opps Wrong ',
      timeout: 1000,
         }).show();
    }
  }

  export default new Notification()
  // export default Notification;
