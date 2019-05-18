import React, { Component } from 'react';
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
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
                </main>
            </div>
        );
    }
}

export default QuizQuestion;