# Handshake Design System
> (Final Name TBD)

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

TODO: Overview - TEMPORARY: The Handshake Design System is the Design System used by Handshake, based on Ant Design.

## Installation

```sh
npm install @handshake/design-system
```

## Usage

The Handshake Design System includes a mandatory `DesignContext` component which must be included somewhere near the top of your React hierarchy. This component handles localization and theming.

```js
import { DesignContext } from "@handshake/design-system";
import React, { Component } from "react";

class App extends Component {
    render () {
        return (
            <DesignContext
                // by default we assume the locale is
                // `en-US`, but you care about other
                // locales (of course you do), then
                // you can provide the actual locale
                // here. We do NOT make any attempt to
                // auto-detect the locale.
                locale="en-US"
                theme={{
                    // you can provide overrides for any
                    // variable used by the design system
                    hsFontFamily: "BlahBlah, Helvetica, etc...",
                    hsBtnPadding: "10px 20px",
                    ...etc,
                    // you can also provide additional
                    // variables and use them in your
                    // own components later on (more
                    // on that later)
                    fancyVariable: 123,
                }}
                // if you want to replace any of our
                // locale messages, or provide 
                // additional ones for your own use,
                // you can do so here.
                getAdditionalMessages={
                    // `language` is a 2 character
                    // ISO 639-1 code, e.g. "en"
                    // `locale` is an IETF "language tag"
                    // composed of an ISO 639-1 language 
                    // code and an ISO 3166-2 country 
                    // code, e.g. "en-US"; it is NOT a
                    // full RFC-4646/RFC-5646 locale,
                    // even if that is the locale 
                    // provided to the DesignContext.
                    ({ language, locale }) => ({
                        override: {
                            something: "YAS QUEEN!",
                        },
                        foo: {
                            bar: {
                                baz: "This is my baz. There are many like it, but this one is mine.",
                            }
                        }
                    })
                }
            >
                {/* your content goes here */}
            </DesignContext>
        );
    }
}
```

Elsewhere in your code, you can import and use any of the components provided by the Handshake Design System:

```js
import { Button } from "@handshake/design-system";

<Button type="primary">This is a primary button!</Button>
```

To see a list of our Components, what they look like, and what props they take, goto **TODO - INSERT PUBLIC FACING STORYBOOK URL**

### Theme support

There are 2 easy ways to use theme variables:

1. `styled-components`:

```js
import styled from "styled-components";

const Foo = styled.div`
    font-family: ${p => p.theme.hsFontFamily};
    something-else: ${p => p.theme.fancyVariable};
    /* etc */
`;
```

2. `ThemeSubscriber`:

```js
import { DesignContext } from "@handshake/design-system";

const { ThemeSubscriber } = DesignContext;

<ThemeSubscriber>
    {theme =>
        <div style={{ fontFamily: theme.hsFontFamily }} />
    }
</ThemeSubscriber>
```

### Intl support

We provide the full set of [`react-intl` components](https://github.com/yahoo/react-intl/wiki/Components):

```js
import { intl } from "@handshake/design-system";

const { FormattedMessage } = intl;

<FormattedMessage id="foo.bar.baz" />
```

We also provide a `LocaleSubscriber` in case you need to access the current locale:

```js
import { DesignContext } from "@handshake/design-system";

const { LocaleSubscriber } = DesignContext;

<LocaleSubscriber>
    {({ language, localeName }) =>
        <span>{`The current locale is ${localeName}.`}</span>
    }
</LocaleSubscriber>
```

## Development setup

```sh
git clone https://github.com/handshake/handshake-design-system.git
cd handshake-design-system
npm install
npm start # this will launch our Storybook in your default browser
```

## Release History

* 0.1.0
    * Initial internal release

### Roadmap

TBD
* 1.0.0
    * Initial public release

## Contributors

* Adam Phillips-Silver <adam.phillips-silver@handshake.com>
* David Wolf <david.wolf@handshake.com>
* Kevan Davis <kevan.davis@handshake.com>
* Misaki Suehiro <misaki.suehiro@handshake.com>
* Zoe Peleti <zoe.peleti@handshake.com>

## Contributing

1. Fork it (<https://github.com/handshake/handshake-design-system/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request (<https://github.com/handshake/handshake-design-system/compare/master...yourGitHubName:feature/fooBar>)

## Contributing (Internal)

1. Create your feature branch (`git checkout -b feature/fooBar`)
2. Commit your changes (`git commit -am 'Add some fooBar'`)
3. Push to the branch (`git push origin feature/fooBar`)
4. Create a new Pull Request (<https://github.com/handshake/handshake-design-system/compare/master...feature/fooBar>)

## License

Distributed under the MIT license.
(NOTE: defaulted to MIT because this is mostly a derivative of Ant Design which is under the MIT license)
[https://github.com/handshake/handshake-design-system/LICENSE](https://github.com/handshake/handshake-design-system/LICENSE)





[npm-image]: https://img.shields.io/npm/v/@handshake/design-system.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@handshake/design-system
[npm-downloads]: https://img.shields.io/npm/dm/@handshake/design-system.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/handshake/handshake-design-system/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/handshake/handshake-design-system