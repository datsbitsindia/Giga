import { Controller, Get } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../../utils/asyncWrap";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import axios from "axios";

const api_service_url = "https://api.b365api.com/v1/bet365/event";
const token = "97205-QBhTyEQKRoffkC";

@Controller("api/matches")
export class MatchesContoller {
  @Get("")
  private async getMatches(req: ISecureRequest, res: Response) {
    const { match_id } = req.query;
    const [error, result] = await asyncWrap(
      axios.get(`${api_service_url}?token=${token}&FI=${match_id}`)
    );

    if (!result) {
      return res.status(INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong!",
      });
    }

    return res.status(OK).json({
      success: true,
      data: result.data,
    });
  }
}
