'use client'
import "./Question.scss"
import PlusButton from "@/components/Button/PlusButton/PlusButton.jsx"

// TODO: transfer to template

export default function Question({ question, answer }) {
    return (
        <div className="question">
            <span className="question-container">
                <h6 className="question-text">{question}</h6>
                <PlusButton></PlusButton>
            </span>
        </div>
    )
}