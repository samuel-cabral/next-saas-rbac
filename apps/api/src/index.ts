import { defineAbilityFor } from '@saas/auth'
import console from 'console'

const ability = defineAbilityFor({ role: 'MEMBER' })

// const userCanInviteSomeoneElse = ability.can('invit e', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

// console.log(userCanInviteSomeoneElse)
console.log(userCanDeleteOtherUsers)
console.log(userCannotDeleteOtherUsers)
