# My Weather App

### Run the application locally

In the project directory, you should run:

- Create file `.env` and add there `REACT_APP_SERVER_URL=http://localhost:3005`. Also I included `.env.example` file
- `yarn add`
- `yarn start`
- Also start BE API
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  _NOTE_: API key should be restricted to the application's final domain, as API Key could be observed in front-end. If API doesn't provide this functionality, another possible solution would be to develop a server-side application (for example, with NodeJS) to serve as a proxy for hiding the API Key to front-end users and not allowing access.
