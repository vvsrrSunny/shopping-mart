import {
  closeNotification,
  openNotification,
  resetNotificationContent,
  setNotificationContent,
} from '../state-slices/appNotificationSlice';
import { getAssetsTableAsync, setStatusToIdle } from '../state-slices/assetsTableSlice';

// Create the middleware instance and methods

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
const assetsTableAsyncListener = {
  actionCreator: getAssetsTableAsync.fulfilled,
  effect: async (action: any, listenerApi: any) => {
    // Run whatever additional side-effect-y logic you want here
    setTimeout(function () {
      listenerApi.dispatch(setStatusToIdle());
    }, 3000);
  },
};

const setNotificationListener = {
  actionCreator: setNotificationContent,
  effect: async (action: any, listenerApi: any) => {
    listenerApi.dispatch(openNotification());
    setTimeout(function () {
      listenerApi.dispatch(closeNotification());
      setTimeout(function () {
        listenerApi.dispatch(resetNotificationContent());
      }, 500);
    }, 3000);
  },
};

export { assetsTableAsyncListener, setNotificationListener };
