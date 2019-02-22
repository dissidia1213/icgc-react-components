//@flow

import { shallow } from "enzyme";
import React from "react";
import Map from "./Map";
import "../../setupTests";

/**
 * @jest-environment jsdom
 */

it("Expect to ", ()=> {

	expect(shallow(<Map></Map>)).toMatchSnapshot();

});

//Mocking Mapbox gl js needed
//https://github.com/mapbox/mapbox-gl-js/issues/5026