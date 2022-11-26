export const trpcController = {
  ping: (message: string) => {
    return `service2 - pong: ${message}`;
  },
};
