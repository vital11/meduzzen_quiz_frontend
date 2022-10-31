import * as UserActionCreators from './user'
import * as CounterActionCreators from './counter'

export default {
    ...UserActionCreators,
    ...CounterActionCreators,
}