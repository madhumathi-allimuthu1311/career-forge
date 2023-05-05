import { notifications } from "@mantine/notifications";

export const displayNotification = ({
  message,
  color,
  id = "notification",
  loading = false,
  description = null,
  autoClose = true,
}) => {
  return notifications.show({
    id: id,
    message: message,
    title: description,
    loading: loading,
    autoClose: autoClose ? 5000 : false,
    styles: (theme) => ({
      root: {
        backgroundColor: color,
        borderColor: color,

        "&::before": { backgroundColor: theme.white },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
      },
    }),
  });
};
