import { Controller, Middleware, Post } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { runSP } from "../Dal/db";
import { asyncWrap } from "../utils/asyncWrap";
import { auth_role, ROLES } from "./middlewares/CustomRole";

@Controller("signup")
export class SignupController {
  @Post("")
  @Middleware(auth_role(ROLES["Super Admin"]))
  private async signupNewUser(req: any, res: any) {
    const {
      fullName,
      email,
      mobileNumber,
      roleId,
      userId,
      userName,
      password,
      TransctionCode,
    } = req.body;

    const [error, result] = await asyncWrap(
      runSP("IU_Users", [
        {
          name: "UserID",
          value: userId,
        },
        {
          name: "RoleID",
          value: roleId,
        },
        {
          name: "FullName",
          value: fullName,
        },
        {
          name: "Email",
          value: email,
        },
        {
          name: "PhoneNumber",
          value: mobileNumber,
        },
        {
          name: "UserName",
          value: userName,
        },
        {
          name: "Password",
          value: password,
        },
        {
          name: "Email",
          value: email,
        },
        {
          name: "TransctionCode",
          value: TransctionCode,
        },
        {
          name: "LoginUserID",
          value: +req.payload.userId,
        },
      ])
    );

    if (!result) {
      return res.status(INTERNAL_SERVER_ERROR).send({
        success: false,
        code: -1,
        message: "Something went wrong!",
      });
    }

    return res.status(OK).send({
      success: true,
      code: +result.recordset[0].status,
      message: result.recordset[0].message,
    });
  }
}
