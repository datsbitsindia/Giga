"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchesContoller = void 0;
const core_1 = require("@overnightjs/core");
const http_status_codes_1 = require("http-status-codes");
const asyncWrap_1 = require("../../utils/asyncWrap");
const axios_1 = __importDefault(require("axios"));
const api_service_url = "https://api.b365api.com/v1/bet365/event";
const token = "97205-QBhTyEQKRoffkC";
let MatchesContoller = class MatchesContoller {
    getMatches(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { match_id } = req.query;
            const [error, result] = yield asyncWrap_1.asyncWrap(axios_1.default.get(`${api_service_url}?token=${token}&FI=${match_id}`));
            if (!result) {
                return res.status(http_status_codes_1.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    message: "Something went wrong!",
                });
            }
            return res.status(http_status_codes_1.OK).json({
                success: true,
                data: result.data,
            });
        });
    }
};
__decorate([
    core_1.Get("")
], MatchesContoller.prototype, "getMatches", null);
MatchesContoller = __decorate([
    core_1.Controller("api/matches")
], MatchesContoller);
exports.MatchesContoller = MatchesContoller;
//# sourceMappingURL=matchesController.js.map