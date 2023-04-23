export function ConcentrationGameForm({
  name,
  handleSubmit,
  handleNameChange,
}) {
  return (
    <>
      <h1>CONCENTRATION GAME</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Name' value={name} onChange={handleNameChange} />
        <button>Play</button>
      </form>
    </>
  );
}
