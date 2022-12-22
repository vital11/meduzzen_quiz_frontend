import * as CounterActionCreators from './counter'
import * as AuthActionCreators from './auth'
import * as UserActionCreators from './user'
import * as CompanyActionCreators from './company'
import * as MembershipActionCreators from './membership'
import * as QuizActionCreators from './quiz'

export default {
    ...CounterActionCreators,
    ...AuthActionCreators,
    ...UserActionCreators,
    ...CompanyActionCreators,
    ...MembershipActionCreators,
    ...QuizActionCreators,
}
