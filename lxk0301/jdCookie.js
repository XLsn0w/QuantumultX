/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。注：github action用户ck填写到Settings-Secrets里面
let CookieJDs = [
  'pt_key=AAJfPyXfADDBrCmpXn05CgKeO1b4DQpfpCgLyNv-1MM16HX0Otywuad7WxcnKBCAMdYujdr1JXs;pt_pin=jd_45a6b5953b15b;',//账号一ck
  'pt_key=AAJfOjUAADAGJEBswZGZhAuuWRPeGWe-hTA9c-dnFQSivsHxwFroMo7RVf-CqR-ZnhlV_3EgM80;pt_pin=zooooo58;',//账号二ck,如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE && process.env.JD_COOKIE.split('&') && process.env.JD_COOKIE.split('&').length > 0) {
  CookieJDs = process.env.JD_COOKIE.split('&');
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}