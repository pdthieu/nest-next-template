const MaintenanceUI = ({ children }) => {
  return (
    <div className="h-screen">
      {false ? <div className="text-4xl">This is a maintenance screen</div> : <>{children}</>}
    </div>
  );
};

export default MaintenanceUI;
