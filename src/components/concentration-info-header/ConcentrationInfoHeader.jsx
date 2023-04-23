export function ConcentrationInfoHeader({ name, score, handleRestart }) {
  return (
    <>
      <h1>WELCOME, {name}!</h1>
      <div>
        Select two cards with same content consecutively to make them vanish
      </div>
      <p className='bold'>
        Errors: {score.errors} -- Score: {score.successes}.
      </p>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}
