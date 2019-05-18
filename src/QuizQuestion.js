import React, { Component } from 'react';
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {quiz_question} = this.props;

        return (
            <div className="QuizQuestion">
                <main>
                    <section>
                        <p>{quiz_question.instruction_text}</p>
                    </section>
                    <section className="buttons">
                        <ul>
                            {quiz_question.answer_options.map((opt, index) => <QuizQuestionButton key={index} button_text={opt}/>)}
                        </ul>
                    </section>
                </main>
            </div>
        );
    }
}

export default QuizQuestion;