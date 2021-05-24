import tcb from '@cloudbase/js-sdk'

declare global {
  interface Window {
    _tcbEnv: any
  }
}

// window._tcbEnv.TCB_ENV_ID = 'hello-cloudbase-9g9gtebf851318fd'

// 将你的环境 Id 填写到此处
window._tcbEnv = window._tcbEnv || {}
export const envId = window._tcbEnv.TCB_ENV_ID
export const region = window._tcbEnv.TCB_REGION

export const getApp = () => {
  const app = tcb.init({
    env: 'hello-cloudbase-9g9gtebf851318fd',
    region: region
  })

  app.auth({
    persistence: 'local'
  })

  return app
}
