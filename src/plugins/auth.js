import { useUserInfoStore } from '../stores/userinfo';

export function checkAuth(to, from) {
  const userInfo = useUserInfoStore();
  if (!userInfo.name) return '/login';
  return true;
}

export function logout() {
  const userInfo = useUserInfoStore();
  userInfo.clearName();

  location.reload();
}
