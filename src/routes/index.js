/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Router } from "../libraries";

const API_BASE_URL = process.env.API_BASE_URL;

const RouterInstance = new Router();

/*
 * Ochazuke endPoints
 */
RouterInstance.defineRoute(
  "/needsdiagnosis-timeline",
  "needsdiagnosis-timeline",
  {
    baseUrl: API_BASE_URL,
  },
);

RouterInstance.defineRoute("/needscontact-timeline", "needscontact-timeline", {
  baseUrl: API_BASE_URL,
});

RouterInstance.defineRoute("/contactready-timeline", "contactready-timeline", {
  baseUrl: API_BASE_URL,
});

RouterInstance.defineRoute("/needstriage-timeline", "needstriage-timeline", {
  baseUrl: API_BASE_URL,
});

RouterInstance.defineRoute("/sitewait-timeline", "sitewait-timeline", {
  baseUrl: API_BASE_URL,
});

RouterInstance.defineRoute("/weekly-counts", "weekly-counts", {
  baseUrl: API_BASE_URL,
});

RouterInstance.defineRoute("/triage-bugs", "needstriage-list", {
  baseUrl: API_BASE_URL,
});

RouterInstance.defineRoute("/tsci-doc", "tsci-doc", {
  baseUrl: API_BASE_URL,
});

export default RouterInstance;
