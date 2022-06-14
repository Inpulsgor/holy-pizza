import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
	${normalize}

	* {
		box-sizing: border-box;
	}

	*, *:before, *:after {
    box-sizing: inherit;
  }

	html,
	body {
    padding: 0;
    margin: 0;
		background: ${props => props.theme.colors.background};
	}

  body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
