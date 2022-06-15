import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
	${normalize}

	* {
		padding: 0;
		margin: 0;
		list-style: none;
		outline: none;
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	html {
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		scroll-behavior: smooth;
	}

	html,
	body {
    padding: 0;
    margin: 0;
		background: ${props => props.theme.colors.background};
	}

  body {
		font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
  }

	html, body, #root {
		height: 100%;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	a {
		text-decoration: none;
	}
`;
