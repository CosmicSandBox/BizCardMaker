<Html
  style={{
    transition: "all 0.2s",
    opacity: hidden ? 0 : 1,
    transform: `scale(${hidden ? 0.5 : 1})`,
  }}
  distanceFactor={0.5}
  position={[0, 0, 0.03]}
  transform
  occlude
  // onOcclude={setVisible}
>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "150px",
      background: "pink",
      width: "240rem",
      height: "140rem",
      display: "flex",
      backgroundColor: "black",
    }}
  >
    <img
      style={{
        width: "40rem",
        height: "40rem",
        background: "transparent",
      }}
      src="/bizIcon/logo01.png"
    ></img>
    {/* Size hi */}
  </div>
</Html>;
