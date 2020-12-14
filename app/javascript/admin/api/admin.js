import request from '@admin/utils/request'

export function adminLoginApi(data) {
  return request({
    url: '/api/admin/sessions',
    method: 'post',
    data
  })
}

export function getAdminInfoApi() {
  return request({
    url: '/api/admin/sessions/profile',
    method: 'get',
  })
}
