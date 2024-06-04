import { ClearPointBtn, FindRouteButton, SelectModeButton, SelectPointButton, Toggle, Wrapper } from "./Action.styles"

// eslint-disable-next-line react/prop-types
const Action = ({ selectMode, priority, handleFindRoute, handleChangeSelectMode, handleChangePriority }) => {
  return (
    <Wrapper>
      <div>
        <SelectPointButton onClick={() => handleChangeSelectMode("start")} $active={selectMode === "start"}><span className="material-symbols-outlined">pin_drop</span>Start</SelectPointButton>
        <SelectPointButton onClick={() => handleChangeSelectMode("end")} $active={selectMode === "end"}><span className="material-symbols-outlined">pin_drop</span>End</SelectPointButton>
        { selectMode && <ClearPointBtn onClick={() => handleChangeSelectMode()}><span className="material-symbols-outlined">close</span></ClearPointBtn> }
      </div>
      <div>
        <Toggle $priority={priority}>
          <SelectModeButton onClick={() => handleChangePriority("time")} $active={priority === "time"}>Time</SelectModeButton>
          <SelectModeButton onClick={() => handleChangePriority("distance")} $active={priority === "distance"}>Distance</SelectModeButton>
        </Toggle>
        <FindRouteButton onClick={handleFindRoute}><span className="material-symbols-outlined">search</span>Find Route</FindRouteButton>
      </div>
    </Wrapper>
  );
}
 
export default Action;