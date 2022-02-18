import {Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {
    return (
        <div className="card my-5">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>8 849 м</th>
                    <th>Temperature</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Эверест</td>
                    <td>8 849 м</td>
                    <td>-16°C</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Эверест</td>
                    <td>8 849 м</td>
                    <td>-16°C</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Эверест</td>
                    <td>8 849 м</td>
                    <td>-16°C</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Эверест</td>
                    <td>8 849 м</td>
                    <td>-16°C</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Эверест</td>
                    <td>8 849 м</td>
                    <td>-16°C</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Cards;
