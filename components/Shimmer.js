const Shimmer = () => {
  const shimmerAnimation = {
    background:
      "linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)",
    backgroundSize: "800px 104px",
    animation: "shimmer 2s linear infinite",
  };

  return (
    <div
      className="card"
      style={{
        ...shimmerAnimation,
        height: "450px",
        width: "300px",
        margin: "15px",
      }}
    >
      <div
        style={{ height: "399px", marginBottom: "10px", ...shimmerAnimation }}
      ></div>
      <div
        style={{
          height: "20px",
          width: "80%",
          marginBottom: "10px",
          ...shimmerAnimation,
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ height: "14px", width: "60%", ...shimmerAnimation }}
        ></div>
        <div
          style={{ height: "24px", width: "24px", ...shimmerAnimation }}
        ></div>
      </div>
    </div>
  );
};

export default Shimmer;
