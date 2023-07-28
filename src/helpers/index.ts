import toast from "react-hot-toast";
import moment from "moment";

const ROLES: { [key: string]: string } = {
  PARTNER: "Aliado",
  USER: "Usuario",
};

const TYPES: { [key: string]: string } = {
  INFORMATION: 'Información',
  LOYALTY: 'Confiabilidad',
  ACHIEVEMENTS: 'Logros',
  PROMOTION: 'Promoción'
};

const ROUTES: { [key: string]: string } = {
  "/dashboard/admin/home": "Inicio",
  "/dashboard/admin/partners": "Aliados Revu",
  "/dashboard/admin/ratings": "Calificaciones",
  "/dashboard/admin/support": "Soporte",
  "/dashboard/admin/notifications/partner": "Notificaciones",
  "/dashboard/admin/notifications/user": "Notificaciones",
  "/dashboard/admin/shopping": "Compras",
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

export const getType = (type: string) => TYPES[type];

export const getRoute = (route: string) => ROUTES[route];

export const toastSuccess = (message: string) => toast.success(message);
export const toastError = (message: string) => toast.error(message);
export const formatDate = (date: string) => moment(date).format("D/MM/YYYY");
