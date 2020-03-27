/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Router from "../router";

const RouterInstance = new Router();

test("Router getRoute()", () => {
  RouterInstance.defineRoute(
    "/needsdiagnosis-timeline",
    "needsdiagnosis-timeline",
    {
      baseUrl: "baseUrl",
    },
  );

  expect(RouterInstance.getRoute("needsdiagnosis-timeline")).toEqual(
    "baseUrl/needsdiagnosis-timeline",
  );

  expect(() => {
    RouterInstance.getRoute();
  }).toThrow();

  expect(RouterInstance.getRoute("needsdiagnosis-timelines")).toEqual("");

  RouterInstance.defineRoute("/pdf/download/:id/:type", "pdf-download", {
    baseUrl: "baseUrl",
  });
  expect(
    RouterInstance.getRoute("pdf-download", { id: 123, type: "bills" }),
  ).toEqual("baseUrl/pdf/download/123/bills");
});

test("Router buildUrl()", () => {
  expect(RouterInstance.buildUrl("needsdiagnosis-timeline/", "api")).toEqual(
    "needsdiagnosis-timeline/api",
  );
});

test("Router stringfyUrl()", () => {
  expect(
    RouterInstance.stringfyUrl("/pdf/download/:id/:type", {
      id: 123,
      type: "bills",
    }),
  ).toEqual("/pdf/download/123/bills");
});
