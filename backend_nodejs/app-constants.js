var RoleEnum = {
  PARENT: { id: 1, label: 'Parent' },
  CHILD: { id: 2, label: 'Child' },
};

var ErrorEnum = {
  NOT_AUTHENTICATED: { id: 100, label: 'Not Authenticated' },
  NOT_AUTHORIZED: { id: 101, label: 'Not Authorized' },
};


module.exports = {
  RoleEnum: RoleEnum,
  ErrorEnum: ErrorEnum,
};
