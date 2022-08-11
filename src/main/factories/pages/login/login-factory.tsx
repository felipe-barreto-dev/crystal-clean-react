import React from 'react';
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory';
import { makeLoginValidation } from '@/main/factories/validation';
import { makeSaveToStorage } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory';
import { Login } from '@/presentation/pages';

const MakeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      storage={makeSaveToStorage()}
    />
  );
};

export default MakeLogin;
