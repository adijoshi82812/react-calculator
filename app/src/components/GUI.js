import React, { Component } from 'react';

class GUI extends Component{
    constructor(){
        super();
        this.state = {
            answerBar: "0",
        };
    }

    handleButtonClick = (butt) => {
        if(this.state.answerBar === '0' && butt !== '.'){
            this.setState({ answerBar: butt });
        }else{
            this.setState({ answerBar: this.state.answerBar + butt });
        }
    };

    clearbar = () => {
        this.setState({ answerBar: "0" });
    };

    handleBack = () => {
        if(this.state.answerBar.length <= 1 || typeof this.state.answerBar !== 'string'){
            this.clearbar();
        }else{
            const value = this.state.answerBar;
            let newvalue;
            newvalue = value.slice(0, -1);
            this.setState({ answerBar: newvalue });
        }
    };

    handleAnswer = () => {
        let num1 = "", num2 = "", operator;
        const value = this.state.answerBar;
        for(let i = 0; i < value.length; i++){
            if(value[i] === "+" || value[i] === "-" || value[i] === "x" || value[i] === "/" || value[i] === "%"){
                for(let j = 0; j < i; j++){
                    num1 += value [j];
                }
                
                operator = value[i];

                for(let j = i+1; j < value.length; j++){
                    num2 += value[j];
                }
                break;
            }
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch(operator){
            case "+":
                this.setState({ answerBar: num1 + num2 });
                break;
            case "-":
                this.setState({ answerBar: num1 - num2 });
                break;
            case "x":
                this.setState({ answerBar: num1 * num2 });
                break;
            case "/":
                this.setState({ answerBar: num1 / num2 });
                break;
            case "%":
                this.setState({ answerBar: num1 % num2 });
                break;
            default:
                this.setState({ answerBar: "Something went wrong" });
                break;
        }
    };

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
                                value={this.state.answerBar}
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
                                onClick={this.clearbar}
                            >
                                C
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                                onClick={this.handleBack}
                            >
                                B
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                                onClick={() => this.handleButtonClick("%")}
                            >
                                %
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                                onClick={() => this.handleButtonClick("/")}
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
                                onClick={() => this.handleButtonClick("7")}
                            >
                                7
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                                onClick={() => this.handleButtonClick("8")}
                            >
                                8
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                                onClick={() => this.handleButtonClick("9")}
                            >
                                9
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                                onClick={() => this.handleButtonClick("x")}
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
                                onClick={() => this.handleButtonClick("4")}
                            >
                                4
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                                onClick={() => this.handleButtonClick("5")}
                            >
                                5
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                                onClick={() => this.handleButtonClick("6")}
                            >
                                6
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                                onClick={() => this.handleButtonClick("-")}
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
                                onClick={() => this.handleButtonClick("1")}
                            >
                                1
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                                onClick={() => this.handleButtonClick("2")}
                            >
                                2
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                                onClick={() => this.handleButtonClick("3")}
                            >
                                3
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                                onClick={() => this.handleButtonClick("+")}
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
                                onClick={() => this.handleButtonClick("0")}
                            >
                                0
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-black w3-round button-width"
                                onClick={() => this.handleButtonClick(".")}
                            >
                                .
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="w3-button w3-text-orange w3-hover-white w3-round button-width"
                                onClick={this.handleAnswer}
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