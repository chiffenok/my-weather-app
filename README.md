# My Weather App

### Run the application locally

In the project directory, you should run:

- `yarn add`
- Create file `env.local` and add there `REACT_APP_APPID=` with your key for open weather API. Also I included `.env.example` file
- `yarn start`
- Alternatively, to two previous step you can also run `REACT_APP_APPID=you-api-key yarn start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  _NOTE_: API key should be restricted to the application's final domain, as API Key could be observed in front-end. If API doesn't provide this functionality, another possible solution would be to develop a server-side application (for example, with NodeJS) to serve as a proxy for hiding the API Key to front-end users and not allowing access.
