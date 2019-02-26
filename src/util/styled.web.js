// NOTE: this file only exists for symmetry with styled.native.js,
// and in case we ever want to add some extra "magic" to styled-components

import _ from "lodash";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

export default styled;

// NOTE: we're not reexporting everything from styled-components
export { createGlobalStyle, css, keyframes };
