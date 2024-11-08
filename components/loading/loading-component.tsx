import "./loading-component.css";

const LoadingComponent = () => {
  return (
    <div className="loadingContainer">
      <div className="spinner" />
      <p>Carregando</p>
    </div>
  );
};

export default LoadingComponent;
