const Filter = props => {
    return (
      <div className="filterWrapper">
         <div className="ui menu">
         <div className="item"></div>
          <label>Sort By: </label>
          </div>
          <div className="ui item">
          <select
          className="ui selection dropdown"
            name="sort"
            onChange={props.handleSelectChange}
            value={props.sortBy}
          >
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
          </div>
          <div className="item">
          <label>Greased Pigs Only?</label>
          </div>
          <input
          className="ui toggle checkbox"
            checked={props.greased}
            onChange={props.handleToggleGreased}
            type="checkbox"
          />
        </div>
   );
 };