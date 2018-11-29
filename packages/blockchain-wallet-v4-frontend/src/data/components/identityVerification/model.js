import { contains, compose, propOr } from 'ramda'

export const KYC_MODAL = '@KYC.IdentityVerification'
export const USER_EXISTS_MODAL = '@KYC.UserExists'
export const SUNRIVER_LINK_ERROR_MODAL = '@KYC.SunRiverLinkError'

export const STEPS = {
  personal: 'personal',
  mobile: 'mobile',
  verify: 'verify'
}

export const SMS_STEPS = {
  edit: 'edit',
  verify: 'verify'
}

export const PERSONAL_FORM = '@KYC.personalForm'
export const EMAIL_FORM = '@KYC.emailForm'
export const SMS_NUMBER_FORM = '@KYC.smsNumberForm'
export const ADDRESS_FORM = '@KYC.addresForm'

export const PHONE_EXISTS_ERROR = 'Phone number already registered'
export const BAD_CODE_ERROR = 'SMS Verification Code Incorrect.'
export const UPDATE_FAILURE = 'UPDATE_FAILURE'

export const SUPPORTED_DOCUMENTS = {
  PASSPORT: 'PASSPORT',
  DRIVING_LICENCE: 'DRIVING_LICENCE',
  NATIONAL_IDENTITY_CARD: 'NATIONAL_IDENTITY_CARD'
}

export const isStateSupported = compose(
  contains('KYC'),
  propOr([], 'scopes')
)
