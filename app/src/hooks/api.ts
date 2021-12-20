import cloudbase from '@cloudbase/js-sdk';

import type { ResponseType, EventType } from 'todos-types';

declare global {
  interface Window {
    _tcbEnv: {
      TCB_ENV_ID: string;
      TCB_REGION: string;
    };
  }
}

let __app__: cloudbase.app.App;

function currentApp() {
  if (!__app__) {
    const env = window._tcbEnv ?? {
      TCB_ENV_ID: process.env.REACT_APP_ENV_ID,
      TCB_REGION: process.env.REACT_APP_REGION,
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

async function call<T extends EventType>(data: T) {
  const app = currentApp();
  const res = await app.callFunction({
    name: 'todos-api',
    data,
  });

  return res.result as ResponseType<T>;
}

export default call;
