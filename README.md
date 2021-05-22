# GitLab Badges

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

This server acts like a very tiny shields.io to generate SVG badges for your private GitLab instance. Uses shield.io's [gh-badges](https://www.npmjs.com/package/gh-badges) to generate them.


## 📦 Installation

	npm i -g @sebbo2002/gitlab-badges
    gitlab-badges

    # OR

    docker run -e GITLAB_URL=https://gitlab.example.com -e GITLAB_TOKEN=**** sebbo2002/gitlab-badges


## 🔧 Configuration

Use environment variables to set login credentials and pushover tokens:

<table>
    <tr>
        <th scope="row">GITLAB_URL</td>
        <td>GitLab URL (https://gitlab.example.com)</td>
    </tr>
    <tr>
        <th scope="row">GITLAB_TOKEN</td>
        <td>A private Token which is used to query the GitLab API</td>
    </tr>
    <tr>
        <th scope="row">PORT</td>
        <td>Port to listen to, default to 8888</td>
    </tr>
    <tr>
        <th scope="row">BADGE_STYLE</td>
        <td>Optional, allows to specify the used [badge style](http://shields.io/#styles)</td>
    </tr>
    <tr>
        <th scope="row">MAX_CACHE_SIZE</td>
        <td>Optional, to setup the living cache size, defaults to 50</td>
    </tr>
</table>


## 📑 API

#### `/:projectId/:branch/build`

Generates a badge with the current build state of the latest commit in the given branch.
You'll find your project's ID in the GitLab project settings.

###### Example
```
https://gitlab-badges.example.com/1337/master/build
```

#### `/:projectId/:branch/coverage`

Generates a badge with the current build coverage of the latest commit in the given branch.
You'll find your project's ID in the GitLab project settings.

###### Example
```
https://gitlab-badges.example.com/1337/master/coverage
```

#### `/cache`

Returns all currently cached data as a JSON object.

#### `/ping`

Returns `pong`. Usually helpful to monitor the server in a very basic way.



## 🙆🏼‍♂️ Copyright and license

Copyright (c) Sebastian Pekarek under the [MIT license](LICENSE).
