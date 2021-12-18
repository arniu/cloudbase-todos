import cloudbase from '@cloudbase/js-sdk';

declare global {
  interface Window {
    _tcbEnv: {
      TCB_ENV_ID: string;
      TCB_REGION: string;
    };
  }
}

let __app__: cloudbase.app.App;

export function currentApp() {
  if (!__app__) {
    const env = window._tcbEnv ?? {
      TCB_ENV_ID: process.env.ENV_ID,
      TCB_REGION: process.env.REGION,
    };

    __app__ = cloudbase.init({
      env: env.TCB_ENV_ID,
      region: env.TCB_REGION,
    });

    __app__.auth({
      persistence: 'local',
    });
  }

  return __app__;
}
