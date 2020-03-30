export const CHANGE_NOTIFICATIONS_STATUS = "CHANGE_NOTIFICATIONS_STATUS";

export const changeNotifications = notificationsStatus => ({
  type: CHANGE_NOTIFICATIONS_STATUS,
  payload: notificationsStatus
});
