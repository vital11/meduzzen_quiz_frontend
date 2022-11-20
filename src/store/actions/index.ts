import * as UserActionCreators from './user'
import * as CounterActionCreators from './counter'
import * as CompanyActionCreators from './company'

export default {
    ...UserActionCreators,
    ...CounterActionCreators,
    ...CompanyActionCreators,
}