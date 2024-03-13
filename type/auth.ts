export type AuthResponse = {
  status: number;
  data: {
    userId: number;
    accessToken: string;
    refreshToken: string;
  };
  serverDateTime: string;
};
