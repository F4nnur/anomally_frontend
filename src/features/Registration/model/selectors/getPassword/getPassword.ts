import { StateSchema } from '../../../../../app/providers/storeProvider/config/StateSchema';

export const getRegistrationPassword = (state: StateSchema) => state?.registration?.password || '';
