import React, { Component } from 'react';

class GUI extends Component{
    render(){
        return(
            <main
                className="w3-margin-bottom"
            >
                <table
                    className="w3-border w3-round"
                    style={{ margin: "0 auto" }}
                >
                    {/* Answer bar */}
                    <tr>
                        <td
                            colSpan="4"
                        >
                            <input
                                type="text"
                                value="0"
                                className="w3-input w3-border w3-round"
                                style={{ textAlign: "right" }}
                                readOnly
                            />
                        </td>
                    </tr>

                    {/* Buttons C(Clear), B(Backspace), %(modulas), /(divide) */}
                    <tr>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                            >
                                C
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                            >
                                B
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                            >
                                %
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                            >
                                /
                            </button>
                        </td>
                    </tr>

                    {/* Buttons 7, 8, 9, x(multiplication) */}
                    <tr>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                7
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                8
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                9
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                            >
                                x
                            </button>
                        </td>
                    </tr>

                    {/* Button 4, 5, 6, -(minus) */}
                    <tr>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                4
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                5
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                6
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                            >
                                -
                            </button>
                        </td>
                    </tr>

                    {/* Buttons 1, 2, 3, +(plus) */}
                    <tr>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                1
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                2
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                3
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                            >
                                +
                            </button>
                        </td>
                    </tr>

                    {/* Buttons 0, .(decimal point), =(equals to) */}
                    <tr>
                        <td
                            colSpan="2"
                        >
                            <button
                                type="button"
                                className="w3-button w3-black w3-round full-width"
                            >
                                0
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                            >
                                .
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                            >
                                =
                            </button>
                        </td>
                    </tr>
                </table>
            </main>
        );
    }
}

export default GUI;