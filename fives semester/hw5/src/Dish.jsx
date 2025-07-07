import Difficulty from "./Difficulty";

export default function Dish({ image, name, time, calories, difficulty }) {
  return (
    <div className="card">
      {difficulty === 3 && (
        <img
          className="hard-level-svg"
          src="https://www.svgrepo.com/show/528891/chef-hat.svg"
          alt=""
        />
      )}
      <img className="dish-image" src={image} alt="" />
      <h3>{name}</h3>
      <div className=" dish-content dish-info">
        <div className="">
          <img
            src="https://www.svgrepo.com/show/31817/timer.svg"
            width={12}
            alt=""
          />
          <p>{time}</p>
        </div>
        <div className="">
          <img
            src="https://www.svgrepo.com/show/101082/volume-level-indicator.svg"
            width={12}
            alt=""
          />
          <p>{calories}</p>
        </div>
      </div>
      <Difficulty difficulty={difficulty} />
    </div>
  );
}
