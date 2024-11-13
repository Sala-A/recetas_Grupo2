export function NoFound() {
  return (
    <div className="text-center">
    <h1 className="display-4" style={{ color: '#FC4B08' }}>404</h1>
    <p className="lead" style={{ color: '#4CBD49' }}>La página que consulta no existe</p>
    <a href="/" className="btn btn-warning btn-lg" style={{ backgroundColor: '#FC4B08', color: '#fff' }}>Volver al inicio</a>
  </div>
  );
}
