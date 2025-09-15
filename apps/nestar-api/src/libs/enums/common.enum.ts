export enum Message {
    SOMETHING_WENT_WRONG = 'Something went wroing',
    NO_DATA_FOUND = 'No data found',
    CREATE_FAILED = 'Create failed',
    UPDATE_FAILED = 'Update failed',
    BAD_REQUEST = 'Bad request',

    NO_MEMBERNICK  = ' No member with that member nick',
    BLOCKED_USER = 'You have been blocked!',
    WORNG_PASSWORD = 'Wrong password, try again!',
    NOT_AUTHENTICATED = 'You are not authenticated, please login first',
    TOKEN_NOT_EXIST = 'Bearer token is not provided',
    ONLY_SPECIFIC_ROLES_ALLOWED = 'Allowed only for members with specific role',
    NOT_ALLOWED_REQUEST = 'Not allowed request',
    PROVIDE_ALLOWED_FORMAT = 'Please provide jpg, jpeg or png images',
    SELF_SUBCRIPTION_DENIED = 'Self subcription is denied',
}