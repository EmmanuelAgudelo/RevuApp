import {createStore} from 'zustand';
import { API } from './api';
import {IResponse } from '../interfaces';

// interface INotificationStore {
//     notificationPartner: IRating[] | null;
//     notificationUser: IRating[] | null;
//     promRatings: IPromRating[] | null
//     isLoading: boolean;
//     error: string | null;
//     findRating: () => void;
//     getPromRating: (businesse:string, branch:string) => void;
// }
// export const notificationStore = createStore<INotificationStore>((set) => ({
//     ratings: null,
//     promRatings: null,
//     isLoading: false,
//     error: null,
//     findRating: async () => {
//         try {
//             set({ isLoading: true })
//             const { data } = await API.get<IResponse>('/rating/all');
//             set({ ratings: data.data });
//         } catch (e: any) {
//             set({ error: e?.response?.data.message });
//         }
//         set({ isLoading: false })
//     },
//     getPromRating: async (businesse:string, branch:string) => {
//         try {
//             set({ isLoading: true })
//             const { data } = await API.get<IResponse>(`/rating/${businesse}/${branch}`);
//             set({ promRatings: data.data });
//         } catch (e: any) {
//             set({ error: e?.response?.data.message });
//         }
//         set({ isLoading: false })
//     },
// }));