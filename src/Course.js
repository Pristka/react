import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



class Course extends React.Component {

    render() {
        return <>
            <h2>List of Available Courses</h2>
            <Accordion allowZeroExpanded allowMultipleExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Front-End Technologies
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="Courses">
                            <section>
                                <article className="blackFirst"><a href="https://www.w3schools.com/css/" target="_blank">CSS</a></article>
                                <article className="white"><a href="https://www.w3schools.com/html/" target="_blank">HTML</a></article>
                                <article className="black"><a href="https://www.w3schools.com/bootstrap" target="_blank">Bootstrap</a></article>
                                <article className="white"><a href="https://www.w3schools.com/angular/" target="_blank">Angular</a></article>
                                <article className="blackLast"><a href="https://www.w3schools.com/react/" target="_blank">React</a></article>
                            </section>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Back-End Technologies
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            <section className="Courses">
                                <article className="blackFirst"><a href="https://www.w3schools.com/java/" target="_blank">Java</a></article>
                                <article className="white"><a href="https://www.w3schools.com/sql/" target="_blank">SQL</a></article>
                                <article className="blackLast"><a href="https://www.w3schools.com/python/" target="_blank">Python</a></article>
                            </section>
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

            <div className="Recommend">
                <h3>Most Important Courses for the Professionals</h3>
                <section>
                    <article className="blackFirst"><a href="https://www.w3schools.com/nodejs/" target="_blank">Node.js</a></article>
                    <article className="white"><a href="https://www.w3schools.com/js/" target="_blank">Java Script</a></article>
                    <article className="blackLast"><a href="https://www.w3schools.com/git/" target="_blank">GIT VCS</a></article>
                </section>

            </div>

        </>

    }
}
export default Course

