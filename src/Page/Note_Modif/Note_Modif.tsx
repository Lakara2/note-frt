import * as React from "react";
import "../../App.css"

export const Note_Modif =() =>{
    return (
        <>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>G</li>
                    <li>H</li>
                </ul>
            </nav>
            <div>
                <h3 className="text-center"></h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Rang</th>
                        <th>STD ref</th>
                        <th>Nom et Prenom</th>
                        <th></th>
                        <th>Age</th>
                        <th className="text-center" colSpan={2}>
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>123</tbody>
                </table>
            </div>
        </>
    )
}
