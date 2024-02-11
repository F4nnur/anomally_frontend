import { UserSchema } from '../../../../entities/User';
import { LoginSchema } from '../../../../features/AuthByUsername';
import { RegistrationSchema } from '../../../../features/Registration/model/type/RegistrationSchema';
import { AnomalySchema } from '../../../../entities/Annomally/model/type/AnomalySchema';

export interface StateSchema {
    user: UserSchema;
    login: LoginSchema;
    registration: RegistrationSchema,
    anomaly: AnomalySchema,
}

export type StateSchemaKey = keyof StateSchema;
