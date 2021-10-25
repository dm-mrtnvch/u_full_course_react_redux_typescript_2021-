import * as UserActionsCreators from "./user"
import * as TodoActionsCreators from "./user"

export default {
    ...UserActionsCreators,
    ...TodoActionsCreators
}