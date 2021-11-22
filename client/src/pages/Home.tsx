import { Layout, Menu } from "antd";

import { Switch, Route } from "react-router-dom";
import AllSports from "../views/LiveSports/allSports";
import "../css/spinsporticons.woff2";
import "../css/style.css";
import "../css/Interface_Normal.woff2";
import "../css/Interface_Bold.woff2";
import "../css/demo.css";
import "../css/demo2.css"; 
import "../css/EventListsDesktop.min.css"; 
import "../css/EventListsDesktop.min.css"; 

// import "../css/PromotionsCoreDesktop.min.css"; 
import "../css/PromotionsSportsDesktop.min.css"; 
import "../css/dynamicfilteringdesktop.min.css"; 
import "../css/eventsdesktop.min.css"; 
import "../css/quicksearchdesktop.min.css"; 


// import "../js/AceBootstrap.min.js";
// import "../js/custom2.js";

const { Header, Content, Footer } = Layout;

const Home = (props: any) => {
  return (
    <div>
      <div>
        <div data-application-root className="data-container root">
          <div
            className="layout Application collection vertical"
            data-widget="Application"
          >
            <div
              className="announcementToastShunt node"
              data-container="SpinSport.Application.announcementToastShunt"
            >
              <div
                className="toastShuntLayer displayNone"
                data-widget="ToastShuntAnnouncementsWidget"
              >
                <div
                  className="toastShuntLayerContent empty"
                  data-container="SpinSport.Application.ToastShuntAnnouncementsWidget.TOAST_SHUNT_LAYER"
                />
              </div>
            </div>
            <div
              className="topBar node"
              data-container="SpinSport.Application.topBar"
              style={{ transform: "translate(0px, 0px)" }}
            >
              <div
                className="layout topBarLayout collection vertical"
                data-widget="topBarLayout"
              >
                <div className="firstRow collection horizontal">
                  <div
                    className="menuChannelSelector node"
                    data-container="SpinSport.Application.topBarLayout.menuChannelSelector"
                  >
                    <div
                      data-containerprefix="SpinSport.Application.topBarLayout.MenuWidget[11]"
                      className="brandSelectorContainer"
                      data-containercount={5}
                      data-widget="MenuWidget[11]"
                    >
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322437]"
                      >
                        <a
                          className="menuItem selected brandSelectorItem"
                          data-tap-recogniser="true"
                          href="#"
                          style={{
                            color: "rgb(0, 168, 38)",
                            borderColor: "rgb(0, 168, 38)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322437]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">sports</div>
                        </a>
                      </div>
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322438]"
                      >
                        <a
                          className="menuItem brandSelectorItem"
                          data-tap-recogniser="true"
                          href="#"
                          style={{
                            color: "rgb(102, 202, 224)",
                            borderColor: "rgb(102, 202, 224)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322438]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">live casino</div>
                        </a>
                      </div>
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322439]"
                      >
                        <a
                          className="menuItem brandSelectorItem"
                          data-tap-recogniser="true"
                          href="#"
                          style={{
                            color: "rgb(100, 34, 130)",
                            borderColor: "rgb(100, 34, 130)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322439]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">esports</div>
                        </a>
                      </div>
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322440]"
                      >
                        <a
                          className="menuItem brandSelectorItem"
                          data-tap-recogniser="true"
                          href="#"
                          style={{
                            color: "rgb(129, 195, 65)",
                            borderColor: "rgb(129, 195, 65)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322440]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">blog</div>
                        </a>
                      </div>
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322441]"
                      >
                        <a
                          className="menuItem brandSelectorItem"
                          data-tap-recogniser="true"
                          style={{
                            color: "rgb(255, 196, 33)",
                            borderColor: "rgb(255, 196, 33)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322441]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">promotions</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="secondRow collection horizontal">
                  <div
                    className="logo node"
                    data-container="SpinSport.Application.topBarLayout.logo"
                  >
                    <div
                      data-tap-recogniser="true"
                      className="siteLogo"
                      data-widget="SimpleButtonWidget[abfda4bf-a8c4-4c9b-8cb6-4662b1f817a1]"
                    />
                  </div>
                  <div
                    className="siteControls node"
                    data-container="SpinSport.Application.topBarLayout.siteControls"
                  >
                    <div
                      className="configuredLayoutComponent sports-site-controls"
                      data-widget="ConfiguredLayoutWidget[sports-site-controls]"
                    >
                      <div className="configuredLayoutLoaderWrapper loadingSpinnerWrapper displayNone">
                        <div className="loadingSpinner">
                          <div className="spinnerWrapper">
                            <div className="spinnerIconWrapper">
                              <div className="loading" />
                            </div>
                            <div className="spinnerCaptionWrapper">
                              <label className="spinnerCaption" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="configuredLayoutContainer"
                        data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls]_CONFIGURED_LAYOUT_CONTAINER"
                      >
                        <div
                          className="layout controls collection horizontal"
                          data-widget="controls"
                        >
                          <div
                            className="odds node re-di-no"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.odds"
                          >
                            <div
                              className="dropdownContainer dropdownSquared"
                              data-widget="SquaredOddsTypeSettingOptionWidget[ODDS_TYPE]"
                            >
                              <div
                                className="dropdownSelectedOption re-di-no"
                                data-tap-recogniser="true"
                              >
                                <div className="dropdownSelectedOptionTextContainer">
                                  <div className="dropdownSelectedOptionText">
                                    Decimal
                                  </div>
                                </div>
                                <div className="iconHolder icon-dropdownarrows" />
                              </div>
                              <div className="dropdownOptionsContainer">
                                <div
                                  className="dropdownOptions"
                                  data-tap-recogniser="true"
                                >
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Fractional</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="true"
                                  >
                                    <div className="itemLabel">Decimal</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">American</div>
                                  </div>
                                </div>
                                <div className="dropdownLoading displayNone">
                                  <span className="loading" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="support node re-di-no"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.support"
                          >
                            <div
                              className="dropdownContainer dropdownSquared"
                              data-widget="SupportDropdownMenuWidget[2]"
                            >
                              <div
                                className="dropdownSelectedOption re-di-no"
                                data-tap-recogniser="true"
                              >
                                <div className="dropdownSelectedOptionTextContainer">
                                  <div className="dropdownSelectedOptionText">
                                    Support
                                  </div>
                                </div>
                                <div className="iconHolder icon-dropdownarrows" />
                              </div>
                              <div className="dropdownOptionsContainer">
                                <div
                                  className="dropdownOptions"
                                  data-tap-recogniser="true"
                                >
                                  <a
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Help</div>
                                  </a>
                                </div>
                                <div className="dropdownLoading displayNone">
                                  <span className="loading" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="language node re-di-no"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.language"
                          >
                            <div
                              className="dropdownContainer dropdownSquared"
                              data-widget="SquaredLanguageOptionWidget"
                            >
                              <div
                                className="dropdownSelectedOption re-di-no"
                                data-tap-recogniser="true"
                              >
                                <div className="dropdownSelectedOptionTextContainer">
                                  <div className="dropdownSelectedOptionText">
                                    English
                                  </div>
                                </div>
                                <div className="iconHolder icon-dropdownarrows" />
                              </div>
                              <div className="dropdownOptionsContainer">
                                <div className="dropdownLoading displayNone">
                                  <span className="loading" />
                                </div>
                                <div
                                  className="dropdownOptions"
                                  data-tap-recogniser="true"
                                >
                                  <div
                                    className="dropdownItem"
                                    data-isselected="true"
                                  >
                                    <div className="itemLabel">English</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Deutsch</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Norsk</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Suomi</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Français</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Dansk</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Español</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Italiano</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Português</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Русский</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">
                                      Português (Brasil)
                                    </div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Hindi</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bank node"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.bank"
                          >
                            <div
                              className="empty"
                              data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.LoginWidgetSwitcher[SIMPLE_INTENT_TEXT_BUTTON, BANKING_BUTTON]SwitcherWidgetContainer"
                              data-widget="LoginWidgetSwitcher[SIMPLE_INTENT_TEXT_BUTTON, BANKING_BUTTON]"
                            />
                          </div>
                          <div
                            className="signin node"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.signin"
                          >
                            <div
                              data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.LoginWidgetSwitcher[ACCOUNT_MENU, DROPDOWN, LOGIN, HORIZONTAL_LOGIN]SwitcherWidgetContainer"
                              data-widget="LoginWidgetSwitcher[ACCOUNT_MENU, DROPDOWN, LOGIN, HORIZONTAL_LOGIN]"
                            >
                              <div
                                className="loginWidgetComponent loginHorizontalWidget"
                                data-widget="LoginWidget"
                              >
                                <form className="loginForm">
                                  <input
                                    className="registerButton button"
                                    defaultValue="Register"
                                    type="button"
                                    data-tap-recogniser="true"
                                  />
                                  <div className="loginInputs">
                                    <div className="errorContainer" />
                                    <div className="inputContainer usernameInput">
                                      <input
                                        type="text"
                                        placeholder="Username"
                                        maxLength={20}
                                        autoComplete="off"
                                        spellCheck="false"
                                        autoCapitalize="off"
                                      />
                                      <div
                                        className="clearButton displayNone"
                                        data-tap-recogniser="true"
                                      >
                                        <div className="icon-cross" />
                                      </div>
                                    </div>
                                    <div className="inputContainer passwordInput">
                                      <input
                                        type="password"
                                        placeholder="Password"
                                        maxLength={20}
                                      />
                                      <div
                                        className="clearButton displayNone"
                                        data-tap-recogniser="true"
                                      >
                                        <div className="icon-cross" />
                                      </div>
                                    </div>
                                    <div className="linksHolder">
                                      <div
                                        className="forgottenPassword"
                                        data-tap-recogniser="true"
                                      >
                                        Forgot Login?
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="loginButton button submitButton"
                                    data-tap-recogniser="true"
                                  >
                                    <span className="content innerText">
                                      Log in
                                    </span>
                                    <div className="loading displayNone" />
                                  </div>
                                  <input
                                    className="loginSubmit"
                                    defaultValue="Log in"
                                    type="submit"
                                  />
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            className="quickSearchIconButton node"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.quickSearchIconButton"
                          >
                            <div
                              data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.ConditionalContentWidget[3311185090].CONDITIONAL_CONTENT_WIDGET_CONTAINER_KEY"
                              data-widget="ConditionalContentWidget[3311185090]"
                            >
                              <div
                                className="quickSearchButtonWidgetComponent searchButton"
                                data-widget="QuickSearchButtonWidget[d44313ca-5188-47f8-88b0-5136cbdc87ab]"
                              >
                                <div
                                  className="searchButtonIcon icon-search"
                                  data-tap-recogniser="true"
                                />
                                <div
                                  className="searchCloseIcon icon-cross displayNone"
                                  data-tap-recogniser="true"
                                />
                                <div
                                  className="searchOverlay empty"
                                  data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.ConditionalContentWidget[3311185090].QuickSearchButtonWidget[ef0f9f62-7c2d-4dbb-8449-ba3b37ed741b].SEARCH_OVERLAY_WIDGET_CONTAINER_KEY"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="regulatoryLobbyTopBar node empty"
                  data-container="SpinSport.Application.topBarLayout.regulatoryLobbyTopBar"
                />
                <div
                  className="topBarThirdRow node"
                  data-container="SpinSport.Application.topBarLayout.topBarThirdRow"
                >
                  <div
                    className="layout thirdRowContainer collection horizontal"
                    data-widget="thirdRowContainer"
                  >
                    <div
                      className="primaryLinks node"
                      data-container="SpinSport.Application.topBarLayout.thirdRowContainer.primaryLinks"
                    >
                      <div
                        data-containerprefix="SpinSport.Application.topBarLayout.thirdRowContainer.MenuWidget[6]"
                        className="primaryLinksMenuWidget"
                        data-containercount={2}
                        data-widget="MenuWidget[6]"
                      >
                        <div
                          className="widgetContainerCollectionItem"
                          data-container="SpinSport.Application.topBarLayout.thirdRowContainer.MenuWidget[6][305777]"
                        >
                          <a
                            className="menuItem primaryLinksMenuItemWidget primaryLinksInPlayMenuItemWidget"
                            data-tap-recogniser="true"
                            href="#/in-play"
                            style={{
                              color: "rgb(0, 168, 38)",
                              borderColor: "rgb(0, 168, 38)",
                            }}
                            data-widget="InPlayScreenMenuItemWidget[6, 305777]"
                          >
                            <div className="menuLinkIcon iconHolder">
                              <div className="icon-channel-inplay" />
                            </div>
                            <div className="menuLinkText">In-Play</div>
                          </a>
                        </div>
                        <div
                          className="widgetContainerCollectionItem"
                          data-container="SpinSport.Application.topBarLayout.thirdRowContainer.MenuWidget[6][305778]"
                        >
                          <a
                            className="menuItem primaryLinksMenuItemWidget"
                            data-tap-recogniser="true"
                            style={{
                              color: "rgb(255, 196, 33)",
                              borderColor: "rgb(255, 196, 33)",
                            }}
                            data-widget="MenuItemWidget[6, 305778]"
                          >
                            <div className="menuLinkIcon iconHolder">
                              <div className="icon-betwayplus" />
                            </div>
                            <div className="menuLinkText">Promotions</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="favouriteLinks node"
                      data-container="SpinSport.Application.topBarLayout.thirdRowContainer.favouriteLinks"
                    >
                      <div
                        className="categoryListLayout grid"
                        data-widget="CategoryListWidget[true]"
                      >
                        <div
                          className="categoryList baseCategoryListItem"
                          data-tap-recogniser="true"
                        >
                          <a className="categoryListItem" href="#">
                            <div className="categoryListItemWrapper">
                              <div className="icon_container">
                                <img
                                  className="ic_sports"
                                  src="img/015-cricket.png"
                                />
                                <img
                                  className="categoryBadge"
                                //   badge_type="live"
                                  src="img/live.png"
                                />
                              </div>
                              <div className="textWrapper">
                                <div className="button_text">Cricket</div>
                              </div>
                            </div>
                          </a>
                          <a className="categoryListItem" href="#">
                            <div className="categoryListItemWrapper">
                              <div className="icon_container">
                                <img
                                  className="ic_sports"
                                  src="img/045-soccer.png"
                                />
                                <img
                                  className="categoryBadge"
                                //   badge_type="live"
                                  src="img/live.png"
                                />
                              </div>
                              <div className="textWrapper">
                                <div className="button_text">Football</div>
                              </div>
                            </div>
                          </a>
                          <a className="categoryListItem" href="#">
                            <div className="categoryListItemWrapper">
                              <div className="icon_container">
                                <img
                                  className="ic_sports"
                                  src="img/048-tennis.png"
                                />
                                <img
                                  className="categoryBadge"
                                //   badge_type="live"
                                  src="img/live.png"
                                />
                              </div>
                              <div className="textWrapper">
                                <div className="button_text">Tennis</div>
                              </div>
                            </div>
                          </a>
                          <a className="categoryListItem" href="#">
                            <div className="categoryListItemWrapper">
                              <div className="icon_container">
                                <img
                                  className="ic_sports"
                                  src="img/060-betway-boosts.png"
                                />{" "}
                                <img
                                  className="categoryBadge displayNone"
                                //   badge_type="live"
                                />
                              </div>
                              <div className="textWrapper">
                                <div className="button_text">Betway Boosts</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="main pt-280 node"
              data-container="SpinSport.Application.main"
            >
              <div
                className="layout mainLayout collection vertical"
                data-widget="mainLayout"
              >
                <div
                  className="firstRow node"
                  data-container="SpinSport.Application.mainLayout.firstRow"
                >
                  <div
                    className="layout firstRowContainer collection horizontal"
                    data-widget="firstRowContainer"
                  >
                    <div className="sidebar collection vertical">
                      <div
                        className="quickSearch node empty"
                        data-container="SpinSport.Application.mainLayout.firstRowContainer.quickSearch"
                      />
                      <div
                        className="quickLinks node"
                        data-container="SpinSport.Application.mainLayout.firstRowContainer.quickLinks"
                      >
                        <div
                          className="promotionListAreaLayout"
                          data-widget="PromotionListAreaWidget[QuickLinksBody]"
                        >
                          <div className="promotionListHeaderBar">
                            <div
                              className="headerBarWidgetContainer"
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody].HEADER_WIDGET_CONTAINER"
                            >
                              <div
                                className="headerBar"
                                data-widget="HeaderBarWidget[QuickLinksHeader]"
                              >
                                <div className="headerBarContent">
                                  <div className="headerIcon" />
                                  <div className="headerTitle">Quick Links</div>
                                  <div className="headerSubtitle" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="promotionListItems"
                            data-containerprefix="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody]"
                          >
                            <div
                              className="widgetContainerCollectionItem"
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody][2_51627]"
                            >
                              <div
                                className="promotionLink TemplateName_LinkTemplate"
                                data-tap-recogniser="true"
                                data-widget="PromotionWidget[2_51627]"
                              >
                                <div className="featuredLinkRow">
                                  <div className="textWrapper">
                                    <div className="titleText">
                                      Daily Cricket Matches
                                    </div>
                                  </div>
                                  <div className="navigationArrow">
                                    <div className="icon-arrow-right" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="widgetContainerCollectionItem"
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody][2_29949]"
                            >
                              <div
                                className="promotionLink TemplateName_LinkTemplate"
                                data-tap-recogniser="true"
                                data-widget="PromotionWidget[2_29949]"
                              >
                                <div className="featuredLinkRow">
                                  <div className="textWrapper">
                                    <div className="titleText">
                                      Daily Football Matches
                                    </div>
                                  </div>
                                  <div className="navigationArrow">
                                    <div className="icon-arrow-right" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="widgetContainerCollectionItem"
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody][2_29953]"
                            >
                              <div
                                className="promotionLink TemplateName_LinkTemplate"
                                data-tap-recogniser="true"
                                data-widget="PromotionWidget[2_29953]"
                              >
                                <div className="featuredLinkRow">
                                  <div className="textWrapper">
                                    <div className="titleText">
                                      Daily Tennis Matches
                                    </div>
                                  </div>
                                  <div className="navigationArrow">
                                    <div className="icon-arrow-right" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="widgetContainerCollectionItem"
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody][2_30966]"
                            >
                              <div
                                className="promotionLink TemplateName_LinkTemplate"
                                data-tap-recogniser="true"
                                data-widget="PromotionWidget[2_30966]"
                              >
                                <div className="featuredLinkRow">
                                  <div className="textWrapper">
                                    <div className="titleText">
                                      Daily Basketball Games
                                    </div>
                                  </div>
                                  <div className="navigationArrow">
                                    <div className="icon-arrow-right" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="widgetContainerCollectionItem"
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody][2_54681]"
                            >
                              <div
                                className="promotionLink TemplateName_LinkTemplate"
                                data-tap-recogniser="true"
                                data-widget="PromotionWidget[2_54681]"
                              >
                                <div className="featuredLinkRow">
                                  <div className="textWrapper">
                                    <div className="titleText">
                                      Betway Boosts
                                    </div>
                                  </div>
                                  <div className="navigationArrow">
                                    <div className="icon-arrow-right" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="widgetContainerCollectionItem"
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody][2_50197]"
                            >
                              <div
                                className="promotionLink TemplateName_LinkTemplate"
                                data-tap-recogniser="true"
                                data-widget="PromotionWidget[2_50197]"
                              >
                                <div className="featuredLinkRow">
                                  <div className="textWrapper">
                                    <div className="titleText">
                                      T20 Internationals
                                    </div>
                                  </div>
                                  <div className="navigationArrow">
                                    <div className="icon-arrow-right" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="widgetContainerCollectionItem"
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody][2_33557]"
                            >
                              <div
                                className="promotionLink TemplateName_LinkTemplate"
                                data-tap-recogniser="true"
                                data-widget="PromotionWidget[2_33557]"
                              >
                                <div className="featuredLinkRow">
                                  <div className="textWrapper">
                                    <div className="titleText">
                                      Syed Mushtaq Ali Trophy
                                    </div>
                                  </div>
                                  <div className="navigationArrow">
                                    <div className="icon-arrow-right" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="widgetContainerCollectionItem"
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[QuickLinksBody][2_59183]"
                            >
                              <div
                                className="promotionLink TemplateName_LinkTemplate"
                                data-tap-recogniser="true"
                                data-widget="PromotionWidget[2_59183]"
                              >
                                <div className="featuredLinkRow">
                                  <div className="textWrapper">
                                    <div className="titleText">
                                      Premier League
                                    </div>
                                  </div>
                                  <div className="navigationArrow">
                                    <div className="icon-arrow-right" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="promotionListAreaEmptyComponentContainer displayNone">
                            <div className="emptyTextWrapper promotionListAreaWaitingSpinner">
                              <div className="empty displayNone">
                                <div className="emptyText" />
                              </div>
                              <div className="loading" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="quickNavigation node"
                        data-container="SpinSport.Application.mainLayout.firstRowContainer.quickNavigation"
                      >
                        <div
                          className="layout categoryListLayout collection vertical"
                          data-widget="categoryListLayout"
                        >
                          <div
                            className="categoryListHeaderBar node"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.categoryListLayout.categoryListHeaderBar"
                          >
                            <div
                              className="headerBar"
                              data-widget="HeaderBarWidget[CategoryList]"
                            >
                              <div className="headerBarContent">
                                <div className="headerIcon" />
                                <div className="headerTitle">All Sports</div>
                                <div className="headerSubtitle" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="categoryListContent node"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.categoryListLayout.categoryListContent"
                          >
                            <div
                              className="categoryListLayout stacked"
                              data-widget="CategoryListWidget[true]"
                            >
                              <div
                                className="categoryList baseCategoryListItem"
                                data-tap-recogniser="true"
                              >
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Cricket</span>{" "}
                                    <img
                                      className="categoryBadge"
                                    //   badge_type="live"
                                      src="img/live.png"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Football
                                    </span>{" "}
                                    <img
                                      className="categoryBadge"
                                    //   badge_type="live"
                                      src="img/live.png"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Tennis</span>{" "}
                                    <img
                                      className="categoryBadge"
                                    //   badge_type="live"
                                      src="img/live.png"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Betway Boosts
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Basketball
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Esports</span>{" "}
                                    <img
                                      className="categoryBadge"
                                    //   badge_type="live"
                                      src="img/live.png"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Hockey</span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Baseball
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      UFC / Martial Arts
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Golf</span>{" "}
                                    <img
                                      className="categoryBadge"
                                    //   badge_type="live"
                                      src="img/live.png"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      American Football
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Aussie Rules
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Bandy</span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Boxing</span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Cycling</span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Darts</span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Floorball
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Formula 1
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Futsal</span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Gaelic Sports
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Handball
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Horse Racing
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Kabaddi</span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Politics
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Pool</span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Rugby League
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Rugby Union
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">Snooker</span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Specials
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Table Tennis
                                    </span>{" "}
                                    <img
                                      className="categoryBadge"
                                    //   badge_type="live"
                                      src="img/live.png"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Volleyball
                                    </span>{" "}
                                    <img
                                      className="categoryBadge"
                                    //   badge_type="live"
                                      src="img/live.png"
                                    />
                                  </div>
                                </a>
                                <a className="categoryListItem" href="#">
                                  <div className="categoryListItemWrapper">
                                    <span className="button_text">
                                      Winter Sports
                                    </span>{" "}
                                    <img
                                      className="categoryBadge displayNone"
                                    //   badge_type="live"
                                    />
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-links">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <ul>
                  <li>
                    <a href="#">Betway Corporate</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                  <li>
                    <a href="#">Responsible Gaming</a>
                  </li>
                  <li>
                    <a href="#">Privacy &amp; Security</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <ul>
                  <li>
                    <a href="#">Bonus Terms</a>
                  </li>
                  <li>
                    <a href="#">Betting Help</a>
                  </li>
                  <li>
                    <a href="#">Getting Started</a>
                  </li>
                  <li>
                    <a href="#">Online Slots</a>
                  </li>
                  <li>
                    <a href="#">Online Casino</a>
                  </li>
                  <li>
                    <a href="#">Online Roulette</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <ul>
                  <li>
                    <a href="#">Online Blackjack</a>
                  </li>
                  <li>
                    <a href="#">Online Betting</a>
                  </li>
                  <li>
                    <a href="#">Betting Sites</a>
                  </li>
                  <li>
                    <a href="#">Football Betting</a>
                  </li>
                  <li>
                    <a href="#">Esports Betting</a>
                  </li>
                  <li>
                    <a href="#">Cricket Betting</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <ul>
                  <li>
                    <a href="#">Betting App</a>
                  </li>
                  <li>
                    <a href="#">Horse Racing Betting</a>
                  </li>
                  <li>
                    <a href="#">Tennis Betting</a>
                  </li>
                  <li>
                    <a href="#">Golf Betting</a>
                  </li>
                  <li>
                    <a href="#">Associates</a>
                  </li>
                  <li>
                    <a href="#">Andar Bahar</a>
                  </li>
                  <li>
                    <a href="#">Teen Patti</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="testy-div">
          <div className="testimonial-reel-2 container">
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src="img/12.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src="img/123.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src="img/124.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src="img/125.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src="img/12.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src="img/123.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src="img/124.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src="img/125.png" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <p>Copyright © 2021 GIGABITE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
