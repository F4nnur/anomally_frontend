import { StateSchema } from '../../../../../app/providers/storeProvider/config/StateSchema';

export const getRegistrationUsername = (state: StateSchema) => state?.registration?.username || '';
