# League of Legends gaming stats

[![Build Status](https://travis-ci.org/wederribas/league-of-legends-stats.svg?branch=master)](https://travis-ci.org/wederribas/league-of-legends-stats)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wederribas/league-of-legends-stats/master/LICENSE)

The best way to check out your LOL gaming stats!

## Built With

- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/)
- [Express](https://www.express.com/)
- [Next.js](https://nextjs.org/)
- [Riot Developer API](https://developer.riotgames.com)

## Requirements

This project is Javascript based, so if you have **Node.js** installed in your machine, it should work just fine. In case you don't, please access this [link](https://nodejs.org/en/download/) in order to install Node in your own machine.

## Installation and Execution

The project is composed by the **back-end**, implemented with Node.js and Express. The **front-end** is implemented with React, using **Next.js** to generate the application boilerplate/routing/tooling.

In order to run the application, you may start by cloning this repository:

```
git clone https://github.com/wederribas/league-of-legends-stats.git
cd league-of-legends-stats
```

Then export the environment variables required to run the backend application:

```
export BASE_URL=http://localhost:5000/
export PORT=5000
export RIOT_API_KEY=<replace_this_with_your_own_key>

# If you want to see Node.js and Mongoose logs
export NODE_ENV=development

# Otherwise
export NODE_ENV=production
```

Now you could start both **backend** and **frontend** applications:

```
#Starting the back-end application
cd backend
npm install
npm run dev

# Starting the fron-end application
cd ../frontend
npm install
npm run dev
```

Now, access the browser at http://localhost:3000 and you should see the Front-end application running. :-)

# Front-end application screenshot

![Front-end application](https://github.com/wederribas/league-of-legends-stats/blob/master/screenshots/main-interface.png)

# REST API Reference

- **/api/v1/summoners/< summonerName >**:

It retrieves general info about the given summoner. It will return 422 code in case the given summoner name is not valid, or will return 404 code if the given summoner was not found.

Sample of response:

```json
{
  "id": "1K8qEWduY048OsQKH4-mARgv3pZw9kQ29unHfWjWe0oN",
  "accountId": "eGJ7BaAR-auekquWJjSiXbde-M_UO88_i4kzE_dCESCuGQ",
  "puuid": "fo2emK4hqXRE8p7Caqqs54YvBvFb4ncGBisLmkB-HW8DbbNVeXmH4S3hTDqput2LLtVeHseQknpVSw",
  "name": "Canada",
  "profileIconId": 784,
  "revisionDate": 1549500707000,
  "summonerLevel": 86
}
```

- **/api/v1/summoners/< accountId >/matches**:

It retrieves all the data from the more recent matches played by the given summoner (account ID). It it's currently limited to 5 matches at a time. It will return 404 in case the given account ID was not found.

Sample of response:

```json
{
  "gameCreation": 1549351414638,
  "gameDuration": 1282,
  "seasonId": 11,
  "didWin": true,
  "championLevel": 12,
  "championName": "Vayne",
  "championImage": "Vayne.png",
  "doubleKills": 2,
  "tripleKills": 0,
  "quadraKills": 0,
  "pentaKills": 0,
  "spells": [4, 7],
  "kda": {
    "kills": 7,
    "deaths": 3,
    "assists": 7
  }
}
```

## To do

There are some features/tasks to be implemented:

1. Implement tests in both back-end and front-end applications;
2. Implement a better error handling engine;
3. Utilize more stats obtained from the API;
4. Implement pagination (hability to load more matches);
5. Dockerize the application.

## Authors

- Weder Ribas - [@wederribas](https://twitter.com/wederribas)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
