import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import crmReducer from '../features/crm/crmSlice';
import accountsReducer from '../features/admin/accounts/accountsSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    crm: crmReducer,
    accounts: accountsReducer,
  },
});
