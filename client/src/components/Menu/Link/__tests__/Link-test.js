/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Link from "../";

it("renders Link default correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <Link to="/some/route" />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Link with text and icon correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <Link to="/some/route" text={"some text"} icon={"some icon"} />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Link with node text / icon correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <Link
          to="/some/route"
          text={<span>some node text</span>}
          icon={<span>some node icon</span>}
        />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
