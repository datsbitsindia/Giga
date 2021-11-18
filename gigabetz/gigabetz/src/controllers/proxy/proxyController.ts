import { Controller, Get } from "@overnightjs/core";
import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import { asyncWrap } from "../../utils/asyncWrap";
import { ISecureRequest } from "@overnightjs/jwt";
import { Response } from "express";
import axios from "axios";

const api_servic_url = "https://api.b365api.com/v1/bet365/inplay_filter";
const token = "97205-QBhTyEQKRoffkC";

@Controller("api/sports")
export class ProxyController {
  @Get("")
  private async postLimit(req: ISecureRequest, res: Response) {
    const [error, result] = await asyncWrap(
      axios.get(`${api_servic_url}?token=${token}&sports_id=${1}`)
    );

    console.log(result.data.results);

    if (!result) {
      return res.status(INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong!",
      });
    }

    return res.status(OK).json({
      success: true,
      data: result.data.results,
    });
  }
}
