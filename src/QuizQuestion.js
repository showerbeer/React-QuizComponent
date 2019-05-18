import React, { Component } from 'react';

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
                            {quiz_question.answer_options.map((opt, index) => <li key={index}>{opt}</li>)}
                        </ul>
                    </section>
                </main>
            </div>
        );
    }
}

export default QuizQuestion;