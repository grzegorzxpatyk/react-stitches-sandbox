import React, { useEffect, useLayoutEffect, useState } from 'react';
import Button from './components/Button';
import { darkTheme, globalStyles } from './styles/stitches';
import { Separator } from './components/Separator';
import FlexContainer from './components/FlexContainer';
import { Half2Icon } from '@radix-ui/react-icons';
import NameHeading from './components/NameHeading';
import BioHeading from './components/BioHeading';

function App() {
  globalStyles();
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(false);

  function switchTheme() {
    setIsUsingDarkTheme(!isUsingDarkTheme);
  }

  const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)')
    .matches;

  useLayoutEffect(() => {
    if (darkModePreference) {
      setIsUsingDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        setIsUsingDarkTheme(event.matches);
      });
  }, []);

  return (
    <div id="App" className={isUsingDarkTheme ? darkTheme : ''}>
      <header>
        <FlexContainer
          justifyContent="between"
          alignItems="center"
          flexDirection="row"
          css={{
            position: 'fixed',
            top: '0',
            left: '25vw',
            width: '50vw',
            padding: '1rem 0'
          }}
        >
          <nav>
            {['Home', 'About', 'Projects', 'Contact'].map((element) => (
              <Button variant="navigation" key={element}>
                {element}
              </Button>
            ))}
          </nav>
          <Button
            onClick={switchTheme}
            css={{
              padding: '.6rem'
            }}
          >
            <Half2Icon />
          </Button>
        </FlexContainer>
      </header>
      <main
        style={{
          margin: '4rem auto',
          width: '50vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <section style={{ width: '100%' }}>
          <NameHeading>Greg Patyk</NameHeading>
          <BioHeading>Frontend developer</BioHeading>
          <Separator css={{ margin: '15px 0' }} />
          <p style={{ textAlign: 'justify' }}>
            Creative Front End Developer with more than two year experience in
            software development industry. Trained architect, self-taught
            software developer. Bringing my problem solving and analytical
            thinking skills from architecture into web development. Passionate
            about design, architecture, snowboarding and dogs{' '}
            <span role="img" aria-labelledby="dog">
              🐶
            </span>
          </p>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
