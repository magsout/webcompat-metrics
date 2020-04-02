/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import renderer from "react-test-renderer";

import NavigationContainer from "..";

it("renders NavigationContainer matchMedia return true", () => {
  Object.defineProperty(window, "matchMedia", {
    value: jest.fn(() => {
      return { matches: true };
    }),
  });
  const tree = renderer
    .create(
      <NavigationContainer>
        <div>Content</div>
      </NavigationContainer>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
