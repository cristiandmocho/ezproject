import { useUserInfoStore } from '../stores/userinfo';

export function checkAuth() {
  const userInfo = useUserInfoStore();
  if (!userInfo.name) return '/login';
  return true;
}

export function logout() {
  const userInfo = useUserInfoStore();
  userInfo.clearStore();

  location.reload();
}
