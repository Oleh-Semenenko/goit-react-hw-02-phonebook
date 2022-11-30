const Filter = ({value, onChange}) => (
    <label>
        Find contacts by name:
        <input
            type="text"
            value={value}
            name="filter"
            onChange={onChange} />
    </label>
)

export default Filter;