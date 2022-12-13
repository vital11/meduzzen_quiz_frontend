import * as CounterActionCreators from './counter'
import * as AuthActionCreators from './auth'
import * as UserActionCreators from './user'
import * as CompanyActionCreators from './company'
import * as MembershipActionCreators from './membership'

export default {
    ...CounterActionCreators,
    ...AuthActionCreators,
    ...UserActionCreators,
    ...CompanyActionCreators,
    ...MembershipActionCreators,
}
