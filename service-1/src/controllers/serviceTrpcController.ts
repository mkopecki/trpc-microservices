export const trpcController = {
  ping: (message: string) => {
    return `pong: ${message}`;
  },
};
