const PersonForm = ({ name, onNameChange, number, onNumberChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div> name: <input value={name} onChange={(event) => onNameChange(event.target.value)} /> </div>
    <div> number: <input value={number} onChange={(event) => onNumberChange(event.target.value)} /> </div>
    <div> <button type="submit">add</button> </div>
  </form>
)

export default PersonForm
