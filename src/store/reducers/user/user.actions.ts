import User from '../../../types/user.types';
import UserActionsTypes from './user.action-types';

interface LoginUserAction {
    type: typeof UserActionsTypes.LOGIN
    payload: User
}

interface LogoutUserAction {
    type: typeof UserActionsTypes.LOGOUT
}

export const loginUser = (payload: User):LoginUserAction => ({
    type: UserActionsTypes.LOGIN,
    payload
})

export const logoutUser = (): LogoutUserAction=>({type: UserActionsTypes.LOGOUT})

export type UserActions = LoginUserAction | LogoutUserAction