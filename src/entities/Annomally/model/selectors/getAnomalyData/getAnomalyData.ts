import { StateSchema } from '../../../../../app/providers/storeProvider/config/StateSchema';

export const getAnomalyData = (state: StateSchema) => state?.anomaly?.data;
