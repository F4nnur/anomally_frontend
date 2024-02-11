import { UserSchema } from '../../../../entities/User';
import { LoginSchema } from '../../../../features/AuthByUsername';
import { RegistrationSchema } from '../../../../features/Registration/model/type/RegistrationSchema';

export interface StateSchema {
    user: UserSchema;
    login: LoginSchema;
    registration: RegistrationSchema,
}

export type StateSchemaKey = keyof StateSchema;
