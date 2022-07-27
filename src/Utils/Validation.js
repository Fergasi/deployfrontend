const validateUser = (userData) => {
  if (userData.firstName && userData.lastName && userData.email) {
    return { isValid: true };
  }
  const missingFirstName = userData.firstName ? (
    ""
  ) : (
    <div>
      {" "}
      <br /> - First Name
    </div>
  );
  const missingLastName = userData.lastName ? (
    ""
  ) : (
    <div>
      {" "}
      <br /> - Last Name
    </div>
  );
  const missingEmail = userData.email ? (
    ""
  ) : (
    <div>
      {" "}
      <br /> - Email
    </div>
  );
  const mssg = (
    <div>
      To create a new user please include:
      {missingFirstName}
      {missingLastName}
      {missingEmail}
    </div>
  );
  return { isValid: false, mssg: mssg };
};

export default validateUser;
