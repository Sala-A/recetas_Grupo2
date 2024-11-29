import { ListRecet } from "../components/ListRecet";

export function RecetasList() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3" style={{gap:'1rem'}}>
        <ListRecet />
      </div>
    </div>
  );
}
