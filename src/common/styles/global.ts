import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
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
