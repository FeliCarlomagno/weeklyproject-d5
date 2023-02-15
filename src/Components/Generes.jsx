import { Dropdown } from "react-bootstrap";
import { Grid3x3GapFill, GridFill } from "react-bootstrap-icons";

export const Generes = () => (
  <div className="d-flex justify-content-between">
    <div className="d-flex">
      <h2 className="mb-4">TV Shows</h2>
      <Dropdown className="ml-4 mt-1">
        <Dropdown.Toggle
          className="btn btn-secondary btn-sm dropdown-toggle rounded-0 ms-3 bg-transparent"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Genres &nbsp;
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="dropdown-menu bg-dark"
          aria-labelledby="dropdownMenuButton"
        >
          <Dropdown.Item className="dropdown-item text-white bg-dark" href="#">
            Comedy
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item text-white bg-dark" href="#">
            Drama
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item text-white bg-dark" href="#">
            Thriller
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div>
      <GridFill className="icons"></GridFill>
      <Grid3x3GapFill className="icons"></Grid3x3GapFill>
    </div>
  </div>
);
