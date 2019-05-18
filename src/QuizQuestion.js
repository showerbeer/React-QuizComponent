import React, { Component } from 'react';
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.setState({ incorrectAnswer: false });
            this.props.showNextQuestionHandler();
        } else {
            this.setState({ incorrectAnswer: true });
        }
    }

    render() {
        return (
            <div className="QuizQuestion">
                <main>
                    <section>
                        <p>{this.props.quiz_question.instruction_text}</p>
                    </section>
                    <section className="buttons">
                        <ul>
                            {this.props.quiz_question.answer_options.map((opt, index) =>
                                <QuizQuestionButton key={index} clickHandler={this.handleClick.bind(this)} button_text={opt} />)
                            }
                        </ul>
                    </section>
                    {this.state.incorrectAnswer ? (
                        <p className="error">
                            Sorry, that's not right
                        </p>
                    ) : null}
                </main>
            </div>
        );
    }
}

export default QuizQuestion;