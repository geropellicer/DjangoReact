import React from 'react';

const Estructura = () => {
    return(
        <div className="doubleCenter container">
            <table class="u-full-width">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Dave Gamache</td>
                    <td>26</td>
                    <td>Male</td>
                    <td>San Francisco</td>
                    </tr>
                    <tr>
                    <td>Dwayne Johnson</td>
                    <td>42</td>
                    <td>Male</td>
                    <td>Hayward</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Estructura;