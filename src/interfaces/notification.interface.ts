export interface INotificationSettings{
    id: string,
    notification_type: string,
    message: string,
    description: string,
    status: boolean,
    created_at: string,
}

export type INotification = {
    read_by_users: string[];
  } & Omit<INotificationSettings, 'description'>;
