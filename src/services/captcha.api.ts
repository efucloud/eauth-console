import { request } from '@umijs/max';

import { CaptchaCheckResponse, CaptchaCheckData } from './common.d';

//点选式形状验证码校验
//点选式形状验证码校验
//请求方法: POST
//请求地址: /api/captcha/click/shape
export async function checkCaptchaClickShape<CaptchaCheckResponse>(  data: CaptchaCheckData,   options?: { [key: string]: any }) {
  return  request<CaptchaCheckResponse>(`/api/captcha/click/shape`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    ...(options || {}),
  });
}
//点选式文字验证码校验
//点选式文字验证码校验
//请求方法: POST
//请求地址: /api/captcha/click/basic
export async function checkCaptchaClickBasic<CaptchaCheckResponse>(  data: CaptchaCheckData,   options?: { [key: string]: any }) {
  return  request<CaptchaCheckResponse>(`/api/captcha/click/basic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    ...(options || {}),
  });
}
//区域滑动验证码校验
//区域滑动验证码校验
//请求方法: POST
//请求地址: /api/captcha/slide/region
export async function checkCaptchaSlideRegion<CaptchaCheckResponse>(  data: CaptchaCheckData,   options?: { [key: string]: any }) {
  return  request<CaptchaCheckResponse>(`/api/captcha/slide/region`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    ...(options || {}),
  });
}
//点选式文字验证码
//点选式文字验证码
//请求方法: GET
//请求地址: /api/captcha/click/basic
export async function getCaptchaClickBasic(  options?: { [key: string]: any }) {
  return  request(`/api/captcha/click/basic`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
//点选式形状验证码
//点选式形状验证码
//请求方法: GET
//请求地址: /api/captcha/click/shape
export async function getCaptchaClickShape(  options?: { [key: string]: any }) {
  return  request(`/api/captcha/click/shape`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
//基本滑动区验证码
//基本滑动区验证码
//请求方法: GET
//请求地址: /api/captcha/slide/basic
export async function getCaptchaSlideBasic(  options?: { [key: string]: any }) {
  return  request(`/api/captcha/slide/basic`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
//区域旋转验证码校验
//区域旋转验证码校验
//请求方法: POST
//请求地址: /api/captcha/rotate/basic
export async function checkCaptchaRotateBasic<CaptchaCheckResponse>(  data: CaptchaCheckData,   options?: { [key: string]: any }) {
  return  request<CaptchaCheckResponse>(`/api/captcha/rotate/basic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    ...(options || {}),
  });
}
//区域滑动验证码
//区域滑动验证码
//请求方法: GET
//请求地址: /api/captcha/slide/region
export async function getCaptchaSlideRegion(  options?: { [key: string]: any }) {
  return  request(`/api/captcha/slide/region`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
//基本滑动区验证码校验
//基本滑动区验证码校验
//请求方法: POST
//请求地址: /api/captcha/slide/basic
export async function checkCaptchaSlideBasic<CaptchaCheckResponse>(  data: CaptchaCheckData,   options?: { [key: string]: any }) {
  return  request<CaptchaCheckResponse>(`/api/captcha/slide/basic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    ...(options || {}),
  });
}
//区域旋转验证码
//区域旋转验证码
//请求方法: GET
//请求地址: /api/captcha/rotate/basic
export async function getCaptchaRotateBasic(  options?: { [key: string]: any }) {
  return  request(`/api/captcha/rotate/basic`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
