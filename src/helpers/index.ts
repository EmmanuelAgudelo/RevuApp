import toast from "react-hot-toast";
import moment from "moment";

const ROLES: { [key: string]: string } = {
  PARTNER: "Aliado",
  USER: "Usuario",
};

const TYPES: { [key: string]: string } = {
  INFORMATION: 'Information',
  LOYALTY: 'Loyalty',
  ACHIEVEMENTS: 'Achivements',
  PROMOTION: 'Promotion'
};

const ROUTES: { [key: string]: string } = {
  "/dashboard/admin/home": "Home",
  "/dashboard/admin/partners": "Revu partner",
  "/dashboard/admin/ratings": "Ratings",
  "/dashboard/admin/support": "Support",
  "/dashboard/admin/notifications/partner": "Notifications",
  "/dashboard/admin/notifications/user": "Notifications",
  "/dashboard/admin/shopping": "Shopping",
};

export const setTitle = (title: string) => {
  document.title = title;
};

export const convertToBase64 = async (file: Blob) => {
  var reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise<string | null | ArrayBuffer>((reslove, reject) => {
    reader.onload = () => reslove(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const getRole = (role: string) => ROLES[role];

export const getTypeNotification = (type: string) => TYPES[type];

export const getRoute = (route: string) => ROUTES[route];

export const toastSuccess = (message: string) => toast.success(message);
export const toastError = (message: string) => toast.error(message);
export const formatDate = (date: string) => moment(date).format("D/MM/YYYY");

export const formatMoney = (money:number)=>{
  return money.toLocaleString('en-US',{
      style:'currency',
      currency:"USD"
  });
}

export const calculateRevuPrice = (price:number):number => {
  if (price<=12) {
      return 4.99;
  }
 return price - (price*0.6);
}
