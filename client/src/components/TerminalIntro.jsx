import { Typewriter } from 'react-simple-typewriter';

const TerminalIntro = () => (
  <div>
  <h1 className="terminal-command">$ whoami</h1>
  <p>Win Moe Oo - Final-year IT student who wants to develop impactful solutions</p>

  <h2 className="terminal-command mt-6">$ echo "Welcome"</h2>
    <span className="text-green-300">
      <Typewriter
        words={['Welcome to my terminal.', 'Check out my code.', 'Let\'s connect.']}
        loop
        cursor
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1000}
      />
    </span>
  </div>
);

export default TerminalIntro;
