import { ClearPointBtn, FindRouteButton, SelectModeButton, SelectPointButton, Toggle, Wrapper } from "./Action.styles"

// eslint-disable-next-line react/prop-types
const Action = ({ selectMode, setSelectMode, priority, setPriority }) => {
  return (
    <Wrapper>
      <div>
        <SelectPointButton onClick={() => setSelectMode("start")} $active={selectMode === "start"}><span className="material-symbols-outlined">pin_drop</span>Start</SelectPointButton>
        <SelectPointButton onClick={() => setSelectMode("end")} $active={selectMode === "end"}><span className="material-symbols-outlined">pin_drop</span>End</SelectPointButton>
        { selectMode && <ClearPointBtn onClick={() => setSelectMode()}><span className="material-symbols-outlined">close</span></ClearPointBtn> }
      </div>
      <div>
        <Toggle $priority={priority}>
          <SelectModeButton onClick={() => setPriority("time")} $active={priority === "time"}>Time</SelectModeButton>
          <SelectModeButton onClick={() => setPriority("distance")} $active={priority === "distance"}>Distance</SelectModeButton>
        </Toggle>
        <FindRouteButton><span className="material-symbols-outlined">search</span>Find Route</FindRouteButton>
      </div>
    </Wrapper>
  );
}
 
export default Action;