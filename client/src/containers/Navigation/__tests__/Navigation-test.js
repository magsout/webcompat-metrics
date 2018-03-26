/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";

import Header from "../../../components/Header";
import NavigationContainer from "../";

it("renders NavigationContainer default correctly", () => {
  Object.defineProperty(window, "matchMedia", {
    value: jest.fn(() => {
      return { matches: false };
    }),
  });
  const tree = renderer
    .create(
      <Router>
        <NavigationContainer />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders NavigationContainer matchMedia return false", () => {
  Object.defineProperty(window, "matchMedia", {
    value: jest.fn(() => {
      return { matches: true };
    }),
  });
  const tree = renderer
    .create(
      <Router>
        <NavigationContainer />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("NavigationContainer click button", () => {
  const wrapper = shallow(<NavigationContainer />);
  expect(wrapper.state("isOpen")).toBeFalsy();
  wrapper.find(Header).simulate("click");
  expect(wrapper.state("isOpen")).toBeTruthy();
});
