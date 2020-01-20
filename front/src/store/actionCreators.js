// 편의상, 나중에 액션 생성 함수들을 미리 바인딩해서 내보냄

import { bindActionCreators } from 'redux';
import * as loginPageActions from './modules/loginPage';
import * as signUpPageActions from './modules/signUpPage';

import store from './index';

const { dispatch } = store;

export const LoginPageActions = bindActionCreators(loginPageActions, dispatch);
export const SignUpPageActions = bindActionCreators(signUpPageActions, dispatch);