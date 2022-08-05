import { UnauthenticatedError } from "../Errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
  // if (requestUser.role === 'admin') return
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new CustomError.UnauthenticatedError(
    "Not authorized to access this route"
  );
};

export default checkPermissions;
